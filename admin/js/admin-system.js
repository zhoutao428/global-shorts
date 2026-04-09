// admin-system.js
(function() {
    const API_BASE = 'https://global-shorts-api.z17756037070.workers.dev/api/admin';

    // ---------- 管理员管理 ----------
    async function loadAdmins() {
        const tbody = document.getElementById('adminTableBody');
        if (!tbody) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/admins`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data && data.data.length > 0) {
                renderAdmins(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="7" class="empty-placeholder">暂无管理员</td></tr>';
            }
        } catch (error) {
            console.error('加载管理员失败:', error);
            tbody.innerHTML = '<tr><td colspan="7" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderAdmins(admins) {
        const tbody = document.getElementById('adminTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        admins.forEach(admin => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${admin.id || ''}</td>
                <td>${admin.username || '-'}</td>
                <td>${admin.email || '-'}</td>
                <td>${admin.role || '管理员'}</td>
                <td>${admin.last_login ? new Date(admin.last_login).toLocaleString() : '-'}</td>
                <td><span class="status-badge ${admin.is_active ? 'status-active' : 'status-inactive'}">${admin.is_active ? '活跃' : '禁用'}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="adminSystem.editAdmin('${admin.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="adminSystem.deleteAdmin('${admin.id}')">删除</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    async function editAdmin(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/admins/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data) {
                const admin = data.data;
                document.getElementById('adminId').value = admin.id || '';
                document.getElementById('adminUsername').value = admin.username || '';
                document.getElementById('adminEmail').value = admin.email || '';
                document.getElementById('adminRole').value = admin.role || 'admin';
                document.getElementById('adminStatus').value = admin.is_active ? 'active' : 'inactive';
                
                document.getElementById('adminModalTitle').textContent = '编辑管理员';
                if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                    adminCore.openModal('addAdminModal');
                }
            }
        } catch (error) {
            console.error('加载管理员失败:', error);
            alert('加载管理员失败');
        }
    }

    async function deleteAdmin(id) {
        if (!confirm('确定要删除该管理员吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/admins/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success) {
                loadAdmins();
            } else {
                alert('删除失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('删除管理员失败:', error);
            alert('网络错误，请重试');
        }
    }

// ========== 语言管理模块（完整版，适配 settings 表 + JSON 格式）==========

// 加载语言列表
async function loadLanguages() {
    const tbody = document.getElementById('languageTableBody');
    if (!tbody) return;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE}/languages`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (data.success) {
            renderLanguages(data.data);
            updateLanguageStats(data.data);
            updateLanguageSelect(data.data);
            updateTranslationProgress(data.data);
        } else {
            tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">暂无语言配置</td></tr>';
        }
    } catch (error) {
        console.error('加载语言失败:', error);
        tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">加载失败</td></tr>';
    }
}

// 渲染语言列表
function renderLanguages(languages) {
    const tbody = document.getElementById('languageTableBody');
    if (!languages || languages.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">暂无语言配置</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    
    languages.forEach(lang => {
        const row = document.createElement('tr');
        
        const defaultBadge = lang.is_default ? 
            '<span class="status-badge status-active">默认</span>' : 
            '<span class="status-badge status-inactive">否</span>';
        
        const enabledBadge = lang.is_active ? 
            '<span class="status-badge status-active">启用</span>' : 
            '<span class="status-badge status-inactive">禁用</span>';

        const progress = calculateTranslationProgress(lang.code);
        const progressColor = progress >= 80 ? 'success' : (progress >= 50 ? 'warning' : 'error');

        row.innerHTML = `
            <td><strong>${lang.code}</strong></td>
            <td>${lang.name}</td>
            <td>${lang.native_name || '-'}</td>
            <td>${defaultBadge}</td>
            <td>${enabledBadge}</td>
            <td>${lang.sort_order || 0}</td>
            <td>
                <div class="lang-progress">
                    <span>${progress}%</span>
                    <div class="lang-progress-bar">
                        <div class="lang-progress-fill ${progressColor}" style="width:${progress}%;"></div>
                    </div>
                </div>
            </td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="adminSystem.editLanguage('${lang.code}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-${lang.is_active ? 'warning' : 'success'}" onclick="adminSystem.toggleLanguage('${lang.code}')">
                    <i class="fas fa-${lang.is_active ? 'ban' : 'check'}"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="adminSystem.deleteLanguage('${lang.code}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// 计算翻译进度
function calculateTranslationProgress(langCode) {
    const translations = window._cachedTranslations || [];
    if (translations.length === 0) return 0;
    
    const totalKeys = translations.length;
    const translatedKeys = translations.filter(t => t[langCode] && t[langCode].trim() !== '').length;
    
    return Math.round((translatedKeys / totalKeys) * 100);
}

// 更新语言统计
function updateLanguageStats(languages) {
    const total = languages.length;
    const enabled = languages.filter(l => l.is_active).length;
    const defaultLang = languages.find(l => l.is_default);
    
    document.getElementById('totalLanguages') && (document.getElementById('totalLanguages').textContent = total);
    document.getElementById('enabledLanguages') && (document.getElementById('enabledLanguages').textContent = enabled);
    document.getElementById('defaultLanguage') && (document.getElementById('defaultLanguage').textContent = defaultLang ? defaultLang.name : '-');
}

// 更新语言下拉框
function updateLanguageSelect(languages) {
    const select = document.getElementById('defaultLanguageSelect');
    if (!select) return;

    select.innerHTML = '<option value="">请选择</option>';
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.code;
        option.textContent = `${lang.name} (${lang.code})`;
        option.selected = lang.is_default;
        select.appendChild(option);
    });
}

// 更新翻译进度卡片
function updateTranslationProgress(languages) {
    const container = document.getElementById('translationProgressList');
    if (!container) return;

    const flags = {
        'zh-CN': '🇨🇳', 'en-US': '🇺🇸', 'es-ES': '🇪🇸', 
        'fr-FR': '🇫🇷', 'ja-JP': '🇯🇵', 'ko-KR': '🇰🇷'
    };

    container.innerHTML = '';
    
    languages.forEach(lang => {
        const progress = calculateTranslationProgress(lang.code);
        const progressColor = progress >= 80 ? 'success' : (progress >= 50 ? 'warning' : 'error');

        const card = document.createElement('div');
        card.className = 'translation-progress-card';
        card.onclick = () => editTranslations(lang.code);
        card.innerHTML = `
            <div class="flag-icon">${flags[lang.code] || '🌐'}</div>
            <h4>${lang.name}</h4>
            <div class="native-name">${lang.native_name || ''}</div>
            <div class="progress-stats">
                <span>完成度</span>
                <span>${progress}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill ${progressColor}" style="width:${progress}%;"></div>
            </div>
            <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); adminSystem.editTranslations('${lang.code}')">
                编辑翻译
            </button>
        `;
        container.appendChild(card);
    });
}

// 加载翻译键值
async function loadTranslationKeys() {
    const tbody = document.getElementById('translationKeysBody');
    if (!tbody) return;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE}/translations/keys`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (data.success) {
            window._cachedTranslations = data.data || [];
            renderTranslationKeys(data.data || []);
        } else {
            tbody.innerHTML = '<tr><td colspan="5" class="empty-placeholder">暂无翻译键值</td></tr>';
        }
    } catch (error) {
        console.error('加载翻译键值失败:', error);
        tbody.innerHTML = '<tr><td colspan="5" class="empty-placeholder">加载失败</td></tr>';
    }
}

// 渲染翻译键值
function renderTranslationKeys(keys) {
    const tbody = document.getElementById('translationKeysBody');
    if (!keys || keys.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-placeholder">暂无翻译键值</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    
    keys.forEach(key => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><code class="key-name">${key.key}</code></td>
            <td class="translation-preview" title="${key.zh || ''}">${key.zh || '-'}</td>
            <td class="translation-preview" title="${key.en || ''}">${key.en || '-'}</td>
            <td class="translation-preview" title="${key.es || ''}">${key.es || '-'}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="adminSystem.editTranslationKey('${key.key}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="adminSystem.deleteTranslationKey('${key.key}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// 编辑语言
async function editLanguage(code) {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE}/languages/${code}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (data.success) {
            const lang = data.data;
            document.getElementById('languageId').value = lang.id || '';
            document.getElementById('langCode').value = lang.code;
            document.getElementById('langName').value = lang.name;
            document.getElementById('langNativeName').value = lang.native_name || '';
            document.getElementById('langSort').value = lang.sort_order || 1;
            document.getElementById('langIsDefault').checked = lang.is_default || false;
            document.getElementById('langIsEnabled').checked = lang.is_active !== false;
            document.getElementById('langDirection').value = lang.direction || 'ltr';
            
            document.getElementById('languageModalTitle').textContent = '编辑语言';
            adminCore.openModal('addLanguageModal');
        }
    } catch (error) {
        alert('加载语言失败');
    }
}

// 同步翻译
const syncTranslations = async () => {
    if (!confirm('确定要同步翻译吗？这将扫描所有页面并添加缺失的翻译键。')) return;
    
    try {
        const token = localStorage.getItem('token');
        
        const btn = document.getElementById('syncTranslationsBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 同步中...';
        btn.disabled = true;
        
        const response = await fetch(`${API_BASE}/translations/sync`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        const data = await response.json();
        
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        if (data.success) {
            alert(`同步成功！新增了 ${data.added} 个翻译键，更新了 ${data.updated} 个。`);
            loadTranslationKeys();
        } else {
            alert('同步失败：' + (data.error || '未知错误'));
        }
    } catch (error) {
        console.error('同步翻译失败:', error);
        alert('网络错误，请重试');
        
        const btn = document.getElementById('syncTranslationsBtn');
        if (btn) {
            btn.innerHTML = '<i class="fas fa-sync-alt"></i> 同步翻译';
            btn.disabled = false;
        }
    }
};

// 导出翻译
const exportTranslations = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${API_BASE}/translations/export`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `translations_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
    } catch (error) {
        alert('导出失败');
    }
};

// 添加翻译键
const addTranslationKey = async () => {
    const key = document.getElementById('newKey').value.trim();
    const description = document.getElementById('newKeyDescription').value.trim();
    
    if (!key) {
        alert('键名不能为空');
        return;
    }

    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${API_BASE}/translations/keys`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ key, description })
        });
        const data = await response.json();
        
        if (data.success) {
            adminCore.closeModal('addTranslationKeyModal');
            loadTranslationKeys();
        } else {
            alert('添加失败：' + data.error);
        }
    } catch (error) {
        alert('网络错误');
    }
};

// 编辑翻译键
const editTranslationKey = async (key) => {
    const translations = window._cachedTranslations || [];
    const trans = translations.find(t => t.key === key) || {};
    
    document.getElementById('translationKey').value = key;
    document.getElementById('translationKeyDisplay').value = key;
    document.getElementById('translationValue').value = trans.zh || '';
    document.getElementById('translationLangLabel').textContent = '中文';
    adminCore.openModal('editTranslationModal');
};

// 删除翻译键
const deleteTranslationKey = async (key) => {
    if (!confirm('确定要删除该翻译键吗？')) return;
    
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${API_BASE}/translations/keys/${key}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (data.success) {
            loadTranslationKeys();
        } else {
            alert('删除失败：' + data.error);
        }
    } catch (error) {
        alert('网络错误');
    }
};

// 保存翻译
const saveTranslation = async () => {
    const key = document.getElementById('translationKey').value;
    const value = document.getElementById('translationValue').value;
    const lang = document.getElementById('translationLang').value || 'zh-CN';
    
    if (!value) {
        alert('翻译内容不能为空');
        return;
    }

    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${API_BASE}/translations/${key}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ 
                lang_code: lang,
                value: value 
            })
        });
        const data = await response.json();
        
        if (data.success) {
            adminCore.closeModal('editTranslationModal');
            loadTranslationKeys();
        } else {
            alert('保存失败：' + data.error);
        }
    } catch (error) {
        alert('网络错误');
    }
};

// 编辑翻译（语言维度）
const editTranslations = async (langCode) => {
    const token = localStorage.getItem('token');
    
    try {
        const response = await fetch(`${API_BASE}/translations?lang=${langCode}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        
        if (data.success) {
            alert(`编辑 ${langCode} 翻译功能将在后续版本完善`);
        }
    } catch (error) {
        alert('加载失败');
    }
};

// 切换语言状态
const toggleLanguage = async (code) => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE}/languages/${code}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (data.success) {
            const lang = data.data;
            const newStatus = !lang.is_active;
            const action = newStatus ? '启用' : '禁用';
            
            if (!confirm(`确定要${action}该语言吗？`)) return;

            const updateRes = await fetch(`${API_BASE}/languages/${code}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    ...lang,
                    is_active: newStatus 
                })
            });
            const updateData = await updateRes.json();

            if (updateData.success) {
                loadLanguages();
            } else {
                alert('操作失败：' + updateData.error);
            }
        }
    } catch (error) {
        alert('操作失败');
    }
};

// 删除语言
const deleteLanguage = async (code) => {
    if (!confirm('确定要删除该语言吗？此操作不可撤销。')) return;
    
    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE}/languages/${code}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (data.success) {
            loadLanguages();
        } else {
            alert('删除失败：' + data.error);
        }
    } catch (error) {
        alert('网络错误，请重试');
    }
};

// 保存区域设置
const saveRegionSettings = async () => {
    const token = localStorage.getItem('token');
    const settings = {
        default_language: document.getElementById('defaultLanguageSelect').value,
        default_currency: document.getElementById('defaultCurrency').value,
        date_format: document.getElementById('dateFormat').value,
        time_format: document.getElementById('timeFormat').value,
        timezone: document.getElementById('timezone').value,
        number_format: document.getElementById('numberFormat').value
    };
    
    try {
        const response = await fetch(`${API_BASE}/settings/region`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(settings)
        });
        const data = await response.json();
        if (data.success) alert('保存成功');
        else alert('保存失败：' + data.error);
    } catch (error) {
        alert('保存失败');
    }
};

// 保存语言
const saveLanguage = async () => {
    const token = localStorage.getItem('token');
    const languageId = document.getElementById('languageId').value;

    const formData = {
        code: document.getElementById('langCode').value,
        name: document.getElementById('langName').value,
        native_name: document.getElementById('langNativeName').value,
        sort_order: parseInt(document.getElementById('langSort').value) || 1,
        is_default: document.getElementById('langIsDefault').checked,
        is_active: document.getElementById('langIsEnabled').checked,
        direction: document.getElementById('langDirection').value
    };

    if (!formData.code || !formData.name) {
        alert('语言代码和名称不能为空');
        return;
    }

    const url = languageId ? `${API_BASE}/languages/${languageId}` : `${API_BASE}/languages`;
    const method = languageId ? 'PUT' : 'POST';

    try {
        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();

        if (data.success) {
            adminCore.closeModal('addLanguageModal');
            loadLanguages();
        } else {
            alert('保存失败：' + data.error);
        }
    } catch (error) {
        alert('网络错误，请重试');
    }
};

    // ---------- VIP套餐管理 ----------
    async function loadVipPlans() {
        const tbody = document.getElementById('vipPlanTableBody');
        if (!tbody) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/vip-plans`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data && data.data.length > 0) {
                renderVipPlans(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="9" class="empty-placeholder">暂无VIP套餐</td></tr>';
            }
        } catch (error) {
            console.error('加载VIP套餐失败:', error);
            tbody.innerHTML = '<tr><td colspan="9" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderVipPlans(plans) {
        const tbody = document.getElementById('vipPlanTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        plans.forEach(plan => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${plan.id || ''}</td>
                <td>${plan.name || '-'}</td>
                <td>${plan.duration_days || 0} 天</td>
                <td>$${plan.price_usd || 0}</td>
                <td>$${plan.original_price || 0}</td>
                <td>${plan.tag || '-'}</td>
                <td>${plan.sort_order || 0}</td>
                <td><span class="status-badge ${plan.is_active ? 'status-active' : 'status-inactive'}">${plan.is_active ? '启用' : '禁用'}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="adminSystem.editVipPlan('${plan.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="adminSystem.deleteVipPlan('${plan.id}')">删除</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    async function editVipPlan(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/vip-plans/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data) {
                const plan = data.data;
                document.getElementById('planId').value = plan.id || '';
                document.getElementById('planName').value = plan.name || '';
                document.getElementById('planDays').value = plan.duration_days || 30;
                document.getElementById('planPrice').value = plan.price_usd || 0;
                document.getElementById('planOriginalPrice').value = plan.original_price || 0;
                document.getElementById('planTag').value = plan.tag || '';
                document.getElementById('planSort').value = plan.sort_order || 1;
                document.getElementById('planStatus').value = plan.is_active ? 'active' : 'inactive';
                document.getElementById('planBenefits').value = plan.features ? plan.features.join('\n') : '';
                
                document.getElementById('vipPlanModalTitle').textContent = '编辑VIP套餐';
                if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                    adminCore.openModal('addVipPlanModal');
                }
            }
        } catch (error) {
            console.error('加载VIP套餐失败:', error);
            alert('加载VIP套餐失败');
        }
    }

    async function deleteVipPlan(id) {
        if (!confirm('确定要删除该VIP套餐吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/vip-plans/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success) {
                loadVipPlans();
            } else {
                alert('删除失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('删除VIP套餐失败:', error);
            alert('网络错误，请重试');
        }
    }

    // ---------- 金币套餐管理 ----------
    async function loadCoinPackages() {
        const tbody = document.getElementById('coinPackageTableBody');
        if (!tbody) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/coin-packages`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data && data.data.length > 0) {
                renderCoinPackages(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="9" class="empty-placeholder">暂无金币套餐</td></tr>';
            }
        } catch (error) {
            console.error('加载金币套餐失败:', error);
            tbody.innerHTML = '<tr><td colspan="9" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderCoinPackages(packages) {
        const tbody = document.getElementById('coinPackageTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        packages.forEach(pkg => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pkg.id || ''}</td>
                <td>${pkg.name || '-'}</td>
                <td>${pkg.base_coins || 0}</td>
                <td>${pkg.bonus_coins || 0}</td>
                <td>$${pkg.price_usd || 0}</td>
                <td>${pkg.tag || '-'}</td>
                <td>${pkg.sort_order || 0}</td>
                <td><span class="status-badge ${pkg.is_active ? 'status-active' : 'status-inactive'}">${pkg.is_active ? '启用' : '禁用'}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="adminSystem.editCoinPackage('${pkg.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="adminSystem.deleteCoinPackage('${pkg.id}')">删除</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    async function editCoinPackage(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/coin-packages/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data) {
                const pkg = data.data;
                document.getElementById('packageId').value = pkg.id || '';
                document.getElementById('packageName').value = pkg.name || '';
                document.getElementById('baseCoins').value = pkg.base_coins || 0;
                document.getElementById('bonusCoins').value = pkg.bonus_coins || 0;
                document.getElementById('packagePrice').value = pkg.price_usd || 0;
                document.getElementById('packageTag').value = pkg.tag || '';
                document.getElementById('packageSort').value = pkg.sort_order || 1;
                document.getElementById('packageStatus').value = pkg.is_active ? 'active' : 'inactive';
                
                document.getElementById('coinPackageModalTitle').textContent = '编辑金币套餐';
                if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                    adminCore.openModal('addCoinPackageModal');
                }
            }
        } catch (error) {
            console.error('加载金币套餐失败:', error);
            alert('加载金币套餐失败');
        }
    }

    async function deleteCoinPackage(id) {
        if (!confirm('确定要删除该金币套餐吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/coin-packages/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success) {
                loadCoinPackages();
            } else {
                alert('删除失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('删除金币套餐失败:', error);
            alert('网络错误，请重试');
        }
    }

    // ---------- 广告位管理 ----------
    async function loadAdPositions() {
        const tbody = document.getElementById('adPositionTableBody');
        if (!tbody) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/ad-positions`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data && data.data.length > 0) {
                renderAdPositions(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="7" class="empty-placeholder">暂无广告位</td></tr>';
            }
        } catch (error) {
            console.error('加载广告位失败:', error);
            tbody.innerHTML = '<tr><td colspan="7" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderAdPositions(positions) {
        const tbody = document.getElementById('adPositionTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        positions.forEach(pos => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pos.id || ''}</td>
                <td>${pos.name || '-'}</td>
                <td>${pos.code || '-'}</td>
                <td>${pos.width || 0}x${pos.height || 0}</td>
                <td>${pos.impressions || 0}</td>
                <td><span class="status-badge ${pos.is_active ? 'status-active' : 'status-inactive'}">${pos.is_active ? '启用' : '禁用'}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="adminSystem.editAdPosition('${pos.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="adminSystem.deleteAdPosition('${pos.id}')">删除</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    async function editAdPosition(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/ad-positions/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data) {
                const pos = data.data;
                document.getElementById('adId').value = pos.id || '';
                document.getElementById('adName').value = pos.name || '';
                document.getElementById('adCode').value = pos.code || '';
                document.getElementById('adWidth').value = pos.width || 0;
                document.getElementById('adHeight').value = pos.height || 0;
                document.getElementById('adStatus').value = pos.is_active ? 'active' : 'inactive';
                
                document.getElementById('adModalTitle').textContent = '编辑广告位';
                if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                    adminCore.openModal('addAdModal');
                }
            }
        } catch (error) {
            console.error('加载广告位失败:', error);
            alert('加载广告位失败');
        }
    }

    async function deleteAdPosition(id) {
        if (!confirm('确定要删除该广告位吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/ad-positions/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success) {
                loadAdPositions();
            } else {
                alert('删除失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('删除广告位失败:', error);
            alert('网络错误，请重试');
        }
    }

    // ---------- 支付接口管理 ----------
    async function loadPaymentGateways() {
        const container = document.getElementById('paymentGatewayList');
        if (!container) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/payment-gateways`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data && data.data.length > 0) {
                renderPaymentGateways(data.data);
            } else {
                container.innerHTML = '<div class="empty-placeholder">暂无支付接口配置</div>';
            }
        } catch (error) {
            console.error('加载支付接口失败:', error);
            container.innerHTML = '<div class="empty-placeholder">加载失败</div>';
        }
    }

    function renderPaymentGateways(gateways) {
        const container = document.getElementById('paymentGatewayList');
        if (!container) return;
        
        container.innerHTML = '';
        
        gateways.forEach(gateway => {
            const card = document.createElement('div');
            card.style.cssText = 'border:1px solid var(--border); border-radius:8px; padding:16px; margin-bottom:12px;';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                    <h4 style="font-weight:600;">${gateway.name || '-'}</h4>
                    <span class="status-badge ${gateway.is_active ? 'status-active' : 'status-inactive'}">${gateway.is_active ? '启用' : '禁用'}</span>
                </div>
                <p style="color:var(--gray); font-size:13px; margin-bottom:8px;">商户号: ${gateway.merchant_id || '-'}</p>
                <p style="color:var(--gray); font-size:13px; margin-bottom:12px;">支付方式: ${gateway.type || '-'}</p>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-sm btn-secondary" onclick="adminSystem.editPaymentGateway('${gateway.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="adminSystem.togglePaymentGateway('${gateway.id}')">${gateway.is_active ? '禁用' : '启用'}</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    async function editPaymentGateway(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/payment-gateways/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success && data.data) {
                const gateway = data.data;
                document.getElementById('paymentId').value = gateway.id || '';
                document.getElementById('paymentName').value = gateway.name || '';
                document.getElementById('paymentType').value = gateway.type || '';
                document.getElementById('paymentMerchantId').value = gateway.merchant_id || '';
                document.getElementById('paymentSecret').value = gateway.secret_key || '';
                document.getElementById('paymentPublicKey').value = gateway.public_key || '';
                document.getElementById('paymentGatewayUrl').value = gateway.gateway_url || '';
                document.getElementById('paymentSort').value = gateway.sort_order || 1;
                document.getElementById('paymentStatus').value = gateway.is_active ? 'active' : 'inactive';
                
                document.getElementById('paymentModalTitle').textContent = '编辑支付接口';
                if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                    adminCore.openModal('addPaymentModal');
                }
            }
        } catch (error) {
            console.error('加载支付接口失败:', error);
            alert('加载支付接口失败');
        }
    }

    async function togglePaymentGateway(id) {
        try {
            const token = localStorage.getItem('token');
            // 先获取当前状态
            const getRes = await fetch(`${API_BASE}/payment-gateways/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!getRes.ok) throw new Error(`HTTP error! status: ${getRes.status}`);
            
            const getData = await getRes.json();
            
            if (getData.success && getData.data) {
                const currentStatus = getData.data.is_active;
                const action = currentStatus ? '禁用' : '启用';
                
                if (!confirm(`确定要${action}该支付接口吗？`)) return;
                
                const res = await fetch(`${API_BASE}/payment-gateways/${id}`, {
                    method: 'PUT',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ is_active: !currentStatus })
                });
                
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                
                const data = await res.json();
                
                if (data.success) {
                    loadPaymentGateways();
                } else {
                    alert('操作失败：' + (data.error || '未知错误'));
                }
            }
        } catch (error) {
            console.error('切换支付接口状态失败:', error);
            alert('网络错误，请重试');
        }
    }

    async function savePaymentGateway() {
        const formData = {
            name: document.getElementById('paymentName')?.value,
            type: document.getElementById('paymentType')?.value,
            merchant_id: document.getElementById('paymentMerchantId')?.value,
            secret_key: document.getElementById('paymentSecret')?.value,
            public_key: document.getElementById('paymentPublicKey')?.value,
            gateway_url: document.getElementById('paymentGatewayUrl')?.value,
            sort_order: parseInt(document.getElementById('paymentSort')?.value) || 1,
            is_active: document.getElementById('paymentStatus')?.value === 'active'
        };
        
        // 表单验证
        if (!formData.name) {
            alert('接口名称不能为空');
            return;
        }
        
        const gatewayId = document.getElementById('paymentId')?.value;
        const url = gatewayId ? `${API_BASE}/payment-gateways/${gatewayId}` : `${API_BASE}/payment-gateways`;
        const method = gatewayId ? 'PUT' : 'POST';
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(url, {
                method: method,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
            
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            
            if (data.success) {
                loadPaymentGateways();
                if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                    adminCore.closeModal('addPaymentModal');
                }
            } else {
                alert('保存失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('保存支付接口失败:', error);
            alert('网络错误，请重试');
        }
    }

    function bindPaymentEvents() {
        document.getElementById('addPaymentBtn')?.addEventListener('click', () => {
            document.getElementById('paymentForm')?.reset();
            document.getElementById('paymentId').value = '';
            document.getElementById('paymentModalTitle').textContent = '添加支付接口';
            if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                adminCore.openModal('addPaymentModal');
            }
        });

        document.getElementById('closePaymentModal')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addPaymentModal');
            }
        });

        document.getElementById('cancelPaymentBtn')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addPaymentModal');
            }
        });

        document.getElementById('savePaymentBtn')?.addEventListener('click', savePaymentGateway);
    }

    // ---------- 角色管理 ----------
    function editRole(id) {
        alert('编辑角色 ' + id);
    }

    function deleteRole(id) {
        alert('删除角色 ' + id);
    }

    // ---------- 初始化函数 ----------
    function initialize() {
        // 管理员管理
        if (document.getElementById('adminListPage')) {
            loadAdmins();
            bindAdminEvents();
        }
        
        // 语言管理
        if (document.getElementById('languagesPage')) {
            loadLanguages();
            bindLanguageEvents();
        }
        
        // VIP套餐管理
        if (document.getElementById('vipPlansPage')) {
            loadVipPlans();
            bindVipPlanEvents();
        }
        
        // 金币套餐管理
        if (document.getElementById('coinPackagesPage')) {
            loadCoinPackages();
            bindCoinPackageEvents();
        }
        
        // 广告位管理
        if (document.getElementById('adPositionsPage')) {
            loadAdPositions();
            bindAdPositionEvents();
        }
        
        // 支付接口管理
        if (document.getElementById('paymentGatewaysPage')) {
            loadPaymentGateways();
            bindPaymentEvents();
        }
        
        // 系统设置
        if (document.getElementById('systemSettingsPage')) {
            loadSystemSettings();
        }
    }

    // 绑定事件函数
    function bindAdminEvents() {
        document.getElementById('addAdminBtn')?.addEventListener('click', () => {
            document.getElementById('adminForm')?.reset();
            document.getElementById('adminId').value = '';
            document.getElementById('adminModalTitle').textContent = '添加管理员';
            if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                adminCore.openModal('addAdminModal');
            }
        });

        document.getElementById('closeAdminModal')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addAdminModal');
            }
        });

        document.getElementById('cancelAdminBtn')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addAdminModal');
            }
        });

        document.getElementById('saveAdminBtn')?.addEventListener('click', saveAdmin);
    }

    function bindLanguageEvents() {
        document.getElementById('addLanguageBtn')?.addEventListener('click', () => {
            document.getElementById('languageForm')?.reset();
            document.getElementById('languageId').value = '';
            document.getElementById('languageModalTitle').textContent = '添加语言';
            if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                adminCore.openModal('addLanguageModal');
            }
        });

        document.getElementById('closeLanguageModal')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addLanguageModal');
            }
        });

        document.getElementById('cancelLanguageBtn')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addLanguageModal');
            }
        });

        document.getElementById('saveLanguageBtn')?.addEventListener('click', saveLanguage);
    }

    function bindVipPlanEvents() {
        document.getElementById('addVipPlanBtn')?.addEventListener('click', () => {
            document.getElementById('vipPlanForm')?.reset();
            document.getElementById('planId').value = '';
            document.getElementById('vipPlanModalTitle').textContent = '添加VIP套餐';
            if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                adminCore.openModal('addVipPlanModal');
            }
        });

        document.getElementById('closeVipPlanModal')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addVipPlanModal');
            }
        });

        document.getElementById('cancelVipPlanBtn')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addVipPlanModal');
            }
        });

        document.getElementById('saveVipPlanBtn')?.addEventListener('click', saveVipPlan);
    }

    function bindCoinPackageEvents() {
        document.getElementById('addCoinPackageBtn')?.addEventListener('click', () => {
            document.getElementById('coinPackageForm')?.reset();
            document.getElementById('packageId').value = '';
            document.getElementById('coinPackageModalTitle').textContent = '添加金币套餐';
            if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                adminCore.openModal('addCoinPackageModal');
            }
        });

        document.getElementById('closeCoinPackageModal')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addCoinPackageModal');
            }
        });

        document.getElementById('cancelCoinPackageBtn')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addCoinPackageModal');
            }
        });

        document.getElementById('saveCoinPackageBtn')?.addEventListener('click', saveCoinPackage);
    }

    function bindAdPositionEvents() {
        document.getElementById('addAdPositionBtn')?.addEventListener('click', () => {
            document.getElementById('adPositionForm')?.reset();
            document.getElementById('adId').value = '';
            document.getElementById('adModalTitle').textContent = '添加广告位';
            if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                adminCore.openModal('addAdModal');
            }
        });

        document.getElementById('closeAdModal')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addAdModal');
            }
        });

        document.getElementById('cancelAdBtn')?.addEventListener('click', () => {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addAdModal');
            }
        });

        document.getElementById('saveAdBtn')?.addEventListener('click', saveAdPosition);
    }

   async function saveAdmin() {
    const token = localStorage.getItem('token');
    const adminId = document.getElementById('adminId').value;

    const formData = {
        username: document.getElementById('adminUsername').value,
        email: document.getElementById('adminEmail').value,
        full_name: document.getElementById('adminFullName')?.value || '',
        role: document.getElementById('adminRole').value,
        is_active: document.getElementById('adminStatus').value === 'active'
    };

    // 如果是新增，需要密码
    if (!adminId) {
        const password = document.getElementById('adminPassword').value;
        if (!password) {
            alert('密码不能为空');
            return;
        }
        formData.password = password;
    }

    // 验证必填字段
    if (!formData.username || !formData.email) {
        alert('用户名和邮箱不能为空');
        return;
    }

    const url = adminId ? `${API_BASE}/admins/${adminId}` : `${API_BASE}/admins`;
    const method = adminId ? 'PUT' : 'POST';

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addAdminModal');
            }
            // 重新加载管理员列表
            if (typeof loadAdmins === 'function') {
                loadAdmins();
            }
        } else {
            alert('保存失败：' + (data.error || '未知错误'));
        }
    } catch (error) {
        console.error('保存管理员失败:', error);
        alert('网络错误，请重试');
    }
}

    
    async function saveVipPlan() {
    const token = localStorage.getItem('token');
    const planId = document.getElementById('planId').value;

    // 收集表单数据
    const formData = {
        name: document.getElementById('planName').value,
        duration_days: parseInt(document.getElementById('planDays').value),
        price_usd: parseFloat(document.getElementById('planPrice').value),
        original_price: document.getElementById('planOriginalPrice').value ? 
                       parseFloat(document.getElementById('planOriginalPrice').value) : null,
        features: document.getElementById('planBenefits').value,
        sort_order: parseInt(document.getElementById('planSort').value) || 1,
        is_popular: document.getElementById('planTag')?.value === 'popular',
        is_active: document.getElementById('planStatus').value === 'active'
    };

    // 验证必填字段
    if (!formData.name || !formData.duration_days || !formData.price_usd) {
        alert('套餐名称、天数和价格不能为空');
        return;
    }

    const url = planId ? `${API_BASE}/vip-plans/${planId}` : `${API_BASE}/vip-plans`;
    const method = planId ? 'PUT' : 'POST';

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addVipPlanModal');
            }
            // 重新加载列表
            if (typeof loadVipPlans === 'function') {
                loadVipPlans();
            }
        } else {
            alert('保存失败：' + (data.error || '未知错误'));
        }
    } catch (error) {
        console.error('保存VIP套餐失败:', error);
        alert('网络错误，请重试');
    }
}
    async function saveCoinPackage() {
    const token = localStorage.getItem('token');
    const packageId = document.getElementById('packageId').value;

    // 收集表单数据
    const formData = {
        name: document.getElementById('packageName').value,
        base_coins: parseInt(document.getElementById('baseCoins').value) || 0,
        bonus_coins: parseInt(document.getElementById('bonusCoins').value) || 0,
        price_usd: parseFloat(document.getElementById('packagePrice').value) || 0,
        original_price: document.getElementById('originalPrice')?.value ? 
                       parseFloat(document.getElementById('originalPrice').value) : null,
        tag: document.getElementById('packageTag')?.value || '',
        sort_order: parseInt(document.getElementById('packageSort').value) || 1,
        description: document.getElementById('packageDescription')?.value || '',
        is_popular: document.getElementById('packageIsPopular')?.checked || false,
        is_active: document.getElementById('packageStatus').value === 'active'
    };

    // 验证必填字段
    if (!formData.name) {
        alert('套餐名称不能为空');
        return;
    }
    if (!formData.base_coins || formData.base_coins <= 0) {
        alert('基础金币数量必须大于0');
        return;
    }
    if (!formData.price_usd || formData.price_usd <= 0) {
        alert('价格必须大于0');
        return;
    }

    const url = packageId ? `${API_BASE}/coin-packages/${packageId}` : `${API_BASE}/coin-packages`;
    const method = packageId ? 'PUT' : 'POST';

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addCoinPackageModal');
            }
            // 重新加载列表
            if (typeof loadCoinPackages === 'function') {
                loadCoinPackages();
            }
            // 可选：显示成功提示
            alert('保存成功！');
        } else {
            alert('保存失败：' + (data.error || '未知错误'));
        }
    } catch (error) {
        console.error('保存金币套餐失败:', error);
        alert('网络错误，请重试');
    }
}
    async function saveAdPosition() {
    const token = localStorage.getItem('token');
    const adId = document.getElementById('adId').value;

    // 收集表单数据
    const formData = {
        name: document.getElementById('adName').value,
        code: document.getElementById('adCode').value,
        width: parseInt(document.getElementById('adWidth').value) || 0,
        height: parseInt(document.getElementById('adHeight').value) || 0,
        duration: document.getElementById('adDuration')?.value ? 
                 parseInt(document.getElementById('adDuration').value) : null,
        type: document.getElementById('adType').value,
        description: document.getElementById('adDescription')?.value || '',
        pricing: document.getElementById('adPricing')?.value || 'cpm',
        price: document.getElementById('adPrice')?.value ? 
               parseFloat(document.getElementById('adPrice').value) : null,
        is_active: document.getElementById('adStatus').value === 'active'
    };

    // 验证必填字段
    if (!formData.name) {
        alert('广告位名称不能为空');
        return;
    }
    if (!formData.code) {
        alert('广告位代码不能为空');
        return;
    }
    if (!formData.width || formData.width <= 0) {
        alert('宽度必须大于0');
        return;
    }
    if (!formData.height || formData.height <= 0) {
        alert('高度必须大于0');
        return;
    }

    const url = adId ? `${API_BASE}/ad-positions/${adId}` : `${API_BASE}/ad-positions`;
    const method = adId ? 'PUT' : 'POST';

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                adminCore.closeModal('addAdModal');
            }
            // 重新加载列表
            if (typeof loadAdPositions === 'function') {
                loadAdPositions();
            }
            // 可选：显示成功提示
            alert('保存成功！');
        } else {
            alert('保存失败：' + (data.error || '未知错误'));
        }
    } catch (error) {
        console.error('保存广告位失败:', error);
        alert('网络错误，请重试');
    }
}

    async function loadSystemSettings() {
        console.log('加载系统设置');
    }

    // 确保DOM加载完成后再执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

 // 暴露给全局，供 onclick 调用
window.adminSystem = {
    // 原有的
    loadAdmins,
    loadLanguages,
    loadPaymentGateways,
    loadVipPlans,
    loadCoinPackages,
    loadAdPositions,
    editAdmin,
    deleteAdmin,
    editLanguage,
    deleteLanguage,
    editPaymentGateway,
    togglePaymentGateway,
    editVipPlan,
    deleteVipPlan,
    editCoinPackage,
    deleteCoinPackage,
    editAdPosition,
    deleteAdPosition,
    editRole,
    deleteRole,
    
    // 语言管理方法（已全部实现）
    saveLanguage,
    saveRegionSettings,
    syncTranslations,
    exportTranslations,
    addTranslationKey,
    editTranslationKey,
    deleteTranslationKey,
    saveTranslation,
    editTranslations,
    toggleLanguage  // 注意：这个也要加上
};
})();