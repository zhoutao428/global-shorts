// admin-language.js - 区域语言管理专用逻辑

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

(function() {
    const API_BASE = '/api';
    let languages = [];
    let translationKeys = [];
    let currentLanguageFilter = 'all';
    let selectedKeys = new Set();
    let currentPage = 1;
    let searchKeyword = ''; // (1) 添加搜索关键词变量

    // ==================== 初始化 ====================
    document.addEventListener('DOMContentLoaded', async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login.html';
            return;
        }

        await loadLanguages();
        await loadTranslationKeys();
        bindEvents();
    });

    function bindEvents() {
        // 语言管理
        document.getElementById('addLanguageBtn')?.addEventListener('click', () => openAddLanguageModal());
        document.getElementById('closeLanguageModalBtn')?.addEventListener('click', () => window.adminCore.closeModal('addLanguageModal'));
        document.getElementById('cancelLanguageBtn')?.addEventListener('click', () => window.adminCore.closeModal('addLanguageModal'));
        document.getElementById('saveLanguageBtn')?.addEventListener('click', saveLanguage);
        document.getElementById('refreshLanguagesBtn')?.addEventListener('click', () => {
            currentPage = 1;
            loadLanguages();
        });

        // 翻译管理
        document.getElementById('syncTranslationsBtn')?.addEventListener('click', syncTranslations);
        document.getElementById('exportTranslationsBtn')?.addEventListener('click', exportTranslations);
        document.getElementById('importTranslationsBtn')?.addEventListener('click', () => {
            const select = document.getElementById('importLangCode');
            if (select) {
                select.innerHTML = '<option value="">请选择语言</option>';
                languages.filter(l => l.is_active).forEach(lang => {
                    const option = document.createElement('option');
                    option.value = lang.code;
                    option.textContent = `${lang.name} (${lang.code})`;
                    select.appendChild(option);
                });
            }
            window.adminCore.openModal('importTranslationsModal');
        });
        document.getElementById('addTranslationKeyBtn')?.addEventListener('click', () => openAddKeyModal());

        // 批量操作
        document.getElementById('batchEditBtn')?.addEventListener('click', batchEdit);
        document.getElementById('batchFillBtn')?.addEventListener('click', () => {
            try {
                const select = document.getElementById('batchFillLanguage');
                if (select) {
                    select.innerHTML = '';
                    languages.filter(lang => lang.is_active).forEach(lang => {
                        const option = document.createElement('option');
                        option.value = lang.code;
                        option.textContent = `${lang.name} (${lang.code})`;
                        select.appendChild(option);
                    });
                } else {
                    console.error('batchFillLanguage 下拉框不存在');
                }

                const modal = document.getElementById('batchFillModal');
                if (modal) {
                    modal.classList.add('active');
                } else {
                    console.error('batchFillModal 不存在');
                }
            } catch (error) {
                console.error('打开批量填充模态框出错:', error);
            }
        });
        document.getElementById('selectAllKeys')?.addEventListener('change', toggleSelectAll);

        // 模态框关闭
        document.getElementById('closeAddKeyModal')?.addEventListener('click', () => window.adminCore.closeModal('addTranslationKeyModal'));
        document.getElementById('cancelAddKeyBtn')?.addEventListener('click', () => window.adminCore.closeModal('addTranslationKeyModal'));
        document.getElementById('saveAddKeyBtn')?.addEventListener('click', addTranslationKey);

        document.getElementById('closeTranslationModal')?.addEventListener('click', () => window.adminCore.closeModal('editTranslationModal'));
        document.getElementById('cancelTranslationBtn')?.addEventListener('click', () => window.adminCore.closeModal('editTranslationModal'));
        document.getElementById('saveTranslationBtn')?.addEventListener('click', saveTranslation);

        document.getElementById('closeImportModal')?.addEventListener('click', () => window.adminCore.closeModal('importTranslationsModal'));
        document.getElementById('cancelImportBtn')?.addEventListener('click', () => window.adminCore.closeModal('importTranslationsModal'));
        document.getElementById('confirmImportBtn')?.addEventListener('click', importTranslations);

        document.getElementById('closeBatchFillModal')?.addEventListener('click', () => window.adminCore.closeModal('batchFillModal'));
        document.getElementById('cancelBatchFillBtn')?.addEventListener('click', () => window.adminCore.closeModal('batchFillModal'));
        document.getElementById('confirmBatchFillBtn')?.addEventListener('click', batchFill);

        document.getElementById('saveRegionSettingsBtn')?.addEventListener('click', saveRegionSettings);

        // 上传区域事件
        const dropZone = document.getElementById('importDropZone');
        const fileInput = document.getElementById('importFileInput');
        if (dropZone && fileInput) {
            dropZone.addEventListener('click', () => fileInput.click());
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('dragover');
            });
            dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.classList.remove('dragover');
                const file = e.dataTransfer.files[0];
                if (file) handleImportFile(file);
            });
            fileInput.addEventListener('change', (e) => {
                if (e.target.files[0]) handleImportFile(e.target.files[0]);
            });
        }

        // 分页点击
        document.querySelectorAll('.page-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const page = parseInt(e.target.dataset.page);
                if (page && page !== currentPage) {
                    currentPage = page;
                    loadLanguages();

                    document.querySelectorAll('.page-item').forEach(p => p.classList.remove('active'));
                    e.target.classList.add('active');
                }
            });
        });

        // (3) 搜索输入事件
        const searchInput = document.getElementById('keySearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchKeyword = e.target.value;
                renderTranslationKeys(translationKeys);
            });
        }
    }

    // ==================== 语言管理 ====================
    async function loadLanguages() {
        const tbody = document.getElementById('languageTableBody');
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${API_BASE}/languages?page=${currentPage}&limit=10`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();

            if (data.success) {
                languages = data.data || [];
                renderLanguages(languages);
                updateLanguageStats(languages);
                updateLanguageSelect(languages);
                updateTranslationProgress(languages);
                renderLanguageFilter(languages);

                if (data.pagination) {
                    updatePagination(data.pagination);
                }
            } else {
                tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">加载失败</td></tr>';
            }
        } catch (error) {
            console.error('加载语言失败:', error);
            tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">加载失败</td></tr>';
        }
    }

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
            const progressClass = progress >= 80 ? 'success' : (progress >= 50 ? 'warning' : 'error');

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
                            <div class="lang-progress-fill ${progressClass}" style="width:${progress}%;"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="window.adminLanguage.editLanguage('${lang.code}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-${lang.is_active ? 'warning' : 'success'}" onclick="window.adminLanguage.toggleLanguage('${lang.code}')">
                        <i class="fas fa-${lang.is_active ? 'ban' : 'check'}"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="window.adminLanguage.deleteLanguage('${lang.code}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    function updateLanguageStats(languages) {
        const total = languages.length;
        const enabled = languages.filter(l => l.is_active).length;
        const defaultLang = languages.find(l => l.is_default);

        document.getElementById('totalLanguages').textContent = total;
        document.getElementById('enabledLanguages').textContent = enabled;
        document.getElementById('defaultLanguage').textContent = defaultLang ? defaultLang.name : '-';
    }

    function updateLanguageSelect(languages) {
        const select = document.getElementById('defaultLanguageSelect');
        if (!select) return;

        select.innerHTML = '';
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.code;
            option.textContent = `${lang.name} (${lang.code})`;
            option.selected = lang.is_default;
            select.appendChild(option);
        });
    }

    function renderLanguageFilter(languages) {
        const container = document.getElementById('languageFilter');
        if (!container) return;

        const activeLanguages = languages.filter(l => l.is_active);

        let html = '<button class="filter-btn active" data-lang="all">全部</button>';
        activeLanguages.forEach(lang => {
            html += `<button class="filter-btn" data-lang="${lang.code}">${lang.name}</button>`;
        });

        container.innerHTML = html;

        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentLanguageFilter = btn.dataset.lang;
                
                // (4) 清空搜索框和关键词
                const searchInput = document.getElementById('keySearchInput');
                if (searchInput) {
                    searchInput.value = '';
                }
                searchKeyword = '';
                
                renderTranslationKeys(translationKeys);
            });
        });
    }

    // ==================== 翻译管理 ====================
    async function loadTranslationKeys() {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${API_BASE}/translations/keys`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();

            if (data.success) {
                translationKeys = data.data || [];
                renderTranslationKeys(translationKeys);
                updateTranslationProgress(languages);
            }
        } catch (error) {
            console.error('加载翻译键值失败:', error);
        }
    }

   function renderTranslationKeys(keys) {
    const tbody = document.getElementById('translationKeysBody');
    const thead = document.getElementById('translationKeysHeader');
    if (!tbody || !thead) return;

    // 获取启用的语言
    const activeLanguages = languages.filter(l => l.is_active);
    
    // 设置表格最小宽度，防止列挤压（新增操作列，宽度增加 80px）
    const table = document.getElementById('translationKeysTable');
    if (table) {
        // 基础宽度：复选框(30px) + 键名(150px) + 每列翻译(180px) * 语言数量 + 操作列(80px)
        const minWidth = 30 + 150 + activeLanguages.length * 180 + 80;
        table.style.minWidth = minWidth + 'px';
    }

    // 重新生成表头（新增操作列）
    let headerHtml = '<tr><th style="width:30px;"><input type="checkbox" id="selectAllKeys"></th><th>键名</th>';
    activeLanguages.forEach(lang => {
        headerHtml += `<th>${lang.name}<span class="lang-code-badge">${lang.code}</span></th>`;
    });
    headerHtml += '<th style="width:80px;">操作</th></tr>'; // 新增操作列
    thead.innerHTML = headerHtml;

    // 重新绑定全选事件
    document.getElementById('selectAllKeys')?.addEventListener('change', toggleSelectAll);

    // 过滤键（先按语言筛选，再按关键词搜索）
    let filteredKeys = keys;

    if (currentLanguageFilter !== 'all') {
        filteredKeys = filteredKeys.filter(key => key[currentLanguageFilter] && key[currentLanguageFilter].trim() !== '');
    }

    if (searchKeyword.trim() !== '') {
        const keyword = searchKeyword.toLowerCase().trim();
        filteredKeys = filteredKeys.filter(key => key.key.toLowerCase().includes(keyword));
    }

    if (filteredKeys.length === 0) {
        tbody.innerHTML = '<tr><td colspan="' + (activeLanguages.length + 3) + '" class="empty-placeholder">暂无翻译键值</td></tr>';
        return;
    }

    tbody.innerHTML = '';

    filteredKeys.forEach(key => {
        const row = document.createElement('tr');
        row.dataset.key = key.key;

        let cells = `<td><input type="checkbox" class="key-select" value="${key.key}"></td>`;
        cells += `<td><code class="key-name">${key.key}</code></td>`;

        activeLanguages.forEach(lang => {
            const value = key[lang.code] || '';
            cells += `
                <td class="translation-cell">
                    <input type="text" 
                           class="translation-input ${value ? '' : 'empty'}" 
                           value="${escapeHtml(value)}" 
                           placeholder="输入 ${lang.code} 翻译"
                           data-key="${key.key}"
                           data-lang="${lang.code}">
                </td>
            `;
        });

        // 新增删除按钮列
        cells += `<td><button class="btn btn-sm btn-danger delete-key" data-key="${key.key}">删除</button></td>`;

        row.innerHTML = cells;
        tbody.appendChild(row);
    });

    // 绑定输入事件
    tbody.querySelectorAll('.translation-input').forEach(input => {
        input.addEventListener('blur', (e) => {
            const key = e.target.dataset.key;
            const lang = e.target.dataset.lang;
            const value = e.target.value;

            // 实时更新内存中的数据
            const trans = translationKeys.find(t => t.key === key);
            if (trans) {
                trans[lang] = value;
            }

            // 更新空状态样式
            if (value.trim() === '') {
                e.target.classList.add('empty');
            } else {
                e.target.classList.remove('empty');
            }
        });
    });

    // 为每个复选框绑定 change 事件，以更新选中状态
    tbody.querySelectorAll('.key-select').forEach(cb => {
        cb.addEventListener('change', updateBatchButtons);
    });

    // 为删除按钮绑定事件
    tbody.querySelectorAll('.delete-key').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const key = btn.dataset.key;
            if (!confirm(`确定要删除翻译键 "${key}" 吗？此操作不可撤销。`)) return;

            const token = localStorage.getItem('token');
            try {
                const response = await fetch(`${API_BASE}/translations/keys/${key}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await response.json();
                if (data.success) {
                    // 从本地数据中移除
                    translationKeys = translationKeys.filter(k => k.key !== key);
                    renderTranslationKeys(translationKeys); // 重新渲染
                    updateTranslationProgress(languages);
                } else {
                    alert('删除失败：' + data.error);
                }
            } catch (error) {
                console.error('删除失败:', error);
                alert('网络错误，请重试');
            }
        });
    });

    // 更新批量操作按钮状态
    updateBatchButtons();
}

    function updateTranslationProgress(languages) {
        const container = document.getElementById('translationProgressList');
        if (!container) return;

        if (translationKeys.length === 0) {
            container.innerHTML = '<div class="empty-placeholder">暂无翻译数据</div>';
            return;
        }

        const flags = {
            'zh-CN': '🇨🇳', 'zh': '🇨🇳',
            'en-US': '🇺🇸', 'en': '🇺🇸',
            'es-ES': '🇪🇸', 'es': '🇪🇸',
            'fr-FR': '🇫🇷', 'fr': '🇫🇷',
            'ja-JP': '🇯🇵', 'ja': '🇯🇵',
            'ko-KR': '🇰🇷', 'ko': '🇰🇷'
        };

        container.innerHTML = '';

        languages.forEach(lang => {
            const progress = calculateTranslationProgress(lang.code);
            const progressClass = progress >= 80 ? 'success' : (progress >= 50 ? 'warning' : 'error');

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
                    <div class="progress-fill ${progressClass}" style="width:${progress}%;"></div>
                </div>
                <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); window.adminLanguage.editTranslations('${lang.code}')">
                    编辑翻译
                </button>
            `;
            container.appendChild(card);
        });
    }

    function calculateTranslationProgress(langCode) {
        if (translationKeys.length === 0) return 0;

        const totalKeys = translationKeys.length;
        const translatedKeys = translationKeys.filter(t => t[langCode] && t[langCode].trim() !== '').length;

        return Math.round((translatedKeys / totalKeys) * 100);
    }

    // ==================== 语言操作 ====================
    window.adminLanguage = {
        editLanguage: async function(code) {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`${API_BASE}/languages/${code}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await res.json();

                if (data.success) {
                    const lang = data.data;
                    document.getElementById('languageId').value = lang.code;
                    document.getElementById('langCode').value = lang.code;
                    document.getElementById('langCode').readOnly = true;
                    document.getElementById('langName').value = lang.name;
                    document.getElementById('langNativeName').value = lang.native_name || '';
                    document.getElementById('langSort').value = lang.sort_order || 1;
                    document.getElementById('langIsDefault').checked = lang.is_default || false;
                    document.getElementById('langIsEnabled').checked = lang.is_active !== false;
                    document.getElementById('langDirection').value = lang.direction || 'ltr';

                    document.getElementById('languageModalTitle').textContent = '编辑语言';
                    window.adminCore.openModal('addLanguageModal');
                }
            } catch (error) {
                alert('加载语言失败');
            }
        },

        toggleLanguage: async function(code) {
            const lang = languages.find(l => l.code === code);
            if (!lang) return;

            const newStatus = !lang.is_active;
            const action = newStatus ? '启用' : '禁用';

            if (!confirm(`确定要${action}该语言吗？`)) return;

            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`${API_BASE}/languages/${code}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ is_active: newStatus })
                });
                const data = await res.json();

                if (data.success) {
                    await loadLanguages();
                    await loadTranslationKeys();
                } else {
                    alert('操作失败：' + data.error);
                }
            } catch (error) {
                alert('操作失败');
            }
        },

        deleteLanguage: async function(code) {
            const defaultLang = languages.find(l => l.is_default);
            if (defaultLang && defaultLang.code === code) {
                alert('不能删除默认语言');
                return;
            }

            if (!confirm('确定要删除该语言吗？此操作不可撤销。')) return;

            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`${API_BASE}/languages/${code}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await res.json();

                if (data.success) {
                    await loadLanguages();
                    await loadTranslationKeys();
                } else {
                    alert('删除失败：' + data.error);
                }
            } catch (error) {
                alert('网络错误，请重试');
            }
        },

        editTranslations: function(langCode) {
            currentLanguageFilter = langCode;
            
            // 清空搜索框和关键词
            const searchInput = document.getElementById('keySearchInput');
            if (searchInput) {
                searchInput.value = '';
            }
            searchKeyword = '';
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === langCode) {
                    btn.classList.add('active');
                }
            });
            renderTranslationKeys(translationKeys);
            document.getElementById('translationKeysTable').scrollIntoView({ behavior: 'smooth' });
        }
    };

    async function saveLanguage() {
        const token = localStorage.getItem('token');
        const languageId = document.getElementById('languageId').value;

        const formData = {
            code: document.getElementById('langCode').value,
            name: document.getElementById('langName').value,
            native_name: document.getElementById('langNativeName').value,
            flag: document.getElementById('langFlag')?.value || '🌐',
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
                window.adminCore.closeModal('addLanguageModal');
                await loadLanguages();
                await loadTranslationKeys();
            } else {
                alert('保存失败：' + data.error);
            }
        } catch (error) {
            alert('网络错误，请重试');
        }
    }

    // ==================== 翻译键操作 ====================
    async function addTranslationKey() {
        const key = document.getElementById('newKey').value.trim();
        const description = document.getElementById('newKeyDescription').value.trim();

        if (!key) {
            alert('键名不能为空');
            return;
        }

        const token = localStorage.getItem('token');

        try {
            // 1. 创建翻译键
            const createRes = await fetch(`${API_BASE}/translations/keys`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ key, description })
            });
            const createData = await createRes.json();

            if (!createData.success) {
                alert('添加键失败：' + (createData.error || '未知错误'));
                return;
            }

            // 2. 收集初始翻译（模态框中的各语言输入框）
           // 2. 收集所有语言的翻译（包括空值也要保存，否则其他语言会丢失）
const translations = {};
const initialInputs = document.querySelectorAll('#initialTranslations input');
initialInputs.forEach(input => {
    const langCode = input.id.replace('init_', '');
    translations[langCode] = input.value.trim(); // 收集所有语言，包括空值
});

// 3. 一次性保存所有语言的翻译
const saveResponse = await fetch(`${API_BASE}/translations/${key}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ translations: translations }) // ✅ 发送所有语言
});

const saveData = await saveResponse.json();
if (!saveData.success) {
    alert('保存翻译失败：' + (saveData.error || '未知错误'));
    return;
}

            // 3. 等待所有翻译保存完成
            if (translationPromises.length > 0) {
                const results = await Promise.all(translationPromises);
                const failed = results.filter(r => !r.success);
                if (failed.length > 0) {
                    console.error('部分翻译保存失败:', failed);
                    alert(`键创建成功，但有 ${failed.length} 个语言翻译保存失败，请稍后手动编辑。`);
                } else {
                    alert('键和所有翻译添加成功');
                }
            } else {
                alert('键创建成功（未填写任何初始翻译）');
            }

            // 4. 关闭模态框，刷新列表
            window.adminCore.closeModal('addTranslationKeyModal');
            await loadTranslationKeys();
        } catch (error) {
            console.error('添加翻译键错误:', error);
            alert('网络错误，请重试');
        }
    }

    async function saveTranslation() {
    const key = document.getElementById('translationKey').value;
    const inputs = document.querySelectorAll('#translationInputs input');
    
    // 收集所有语言的翻译（包括空值）
    const translations = {};
    inputs.forEach(input => {
        const langCode = input.dataset.lang;
        translations[langCode] = input.value.trim(); // 保存所有语言，空值也要保存（表示删除）
    });

    const token = localStorage.getItem('token');
    try {
        // 一次性发送所有语言的翻译
        const response = await fetch(`${API_BASE}/translations/${key}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ translations: translations }) // ✅ 发送所有语言
        });
        
        const data = await response.json();
        if (data.success) {
            window.adminCore.closeModal('editTranslationModal');
            await loadTranslationKeys();
            alert('保存成功');
        } else {
            alert('保存失败：' + (data.error || '未知错误'));
        }
    } catch (error) {
        console.error('保存错误:', error);
        alert('保存失败');
    }
}
    // ==================== 批量操作 ====================
    function toggleSelectAll(e) {
        const checkboxes = document.querySelectorAll('.key-select');
        checkboxes.forEach(cb => cb.checked = e.target.checked);

        selectedKeys.clear();
        if (e.target.checked) {
            checkboxes.forEach(cb => selectedKeys.add(cb.value));
        }

        updateBatchButtons();
    }

    function updateBatchButtons() {
        selectedKeys.clear();
        document.querySelectorAll('.key-select:checked').forEach(cb => {
            selectedKeys.add(cb.value);
        });

        const hasSelection = selectedKeys.size > 0;
        document.getElementById('batchEditBtn').disabled = !hasSelection;
        document.getElementById('batchFillBtn').disabled = !hasSelection;
        document.getElementById('selectedKeysCount').textContent = selectedKeys.size;
    }

    function batchEdit() {
        try {
            if (selectedKeys.size === 0) return;

            const firstKey = Array.from(selectedKeys)[0];
            const trans = translationKeys.find(t => t.key === firstKey);
            if (!trans) {
                console.error('找不到翻译键:', firstKey);
                return;
            }

            const keyInput = document.getElementById('translationKey');
            const keyDisplay = document.getElementById('translationKeyDisplay');
            const editKeyDisplay = document.getElementById('editTranslationKeyDisplay');
            if (!keyInput || !keyDisplay || !editKeyDisplay) {
                console.error('编辑翻译模态框元素缺失 (translationKey/translationKeyDisplay/editTranslationKeyDisplay)');
                return;
            }
            keyInput.value = firstKey;
            keyDisplay.value = firstKey;
            editKeyDisplay.textContent = firstKey;

            const container = document.getElementById('translationInputs');
            if (!container) {
                console.error('translationInputs 容器不存在');
                return;
            }

            const activeLanguages = languages.filter(l => l.is_active);
            let html = '';
            activeLanguages.forEach(lang => {
                const value = trans[lang.code] || '';
                html += `
                    <div class="form-group">
                        <label class="form-label">${lang.name} (${lang.code})</label>
                        <input type="text" class="form-control" data-lang="${lang.code}" value="${escapeHtml(value)}">
                    </div>
                `;
            });
            container.innerHTML = html;

            const modal = document.getElementById('editTranslationModal');
            if (modal) {
                modal.classList.add('active');
            } else {
                console.error('editTranslationModal 不存在');
            }
        } catch (error) {
            console.error('batchEdit 出错:', error);
        }
    }

    async function batchFill() {
        const language = document.getElementById('batchFillLanguage').value;
        const value = document.getElementById('batchFillValue').value;
        const overwrite = document.getElementById('batchFillOverwrite').checked;

        if (!language || !value) {
            alert('请选择语言并填写内容');
            return;
        }

        if (selectedKeys.size === 0) return;

        const token = localStorage.getItem('token');
        let successCount = 0;

        for (let key of selectedKeys) {
            const trans = translationKeys.find(t => t.key === key);
            if (!trans) continue;

            if (trans[language] && !overwrite) continue;

            try {
                const response = await fetch(`${API_BASE}/translations/${key}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ lang_code: language, value: value })
                });
                const data = await response.json();
                if (data.success) {
                    successCount++;
                } else {
                    console.error(`填充失败: ${key}`, data.error);
                }
            } catch (error) {
                console.error(`填充失败: ${key}`, error);
            }
        }

        alert(`成功填充 ${successCount} 个翻译键`);
        window.adminCore.closeModal('batchFillModal');
        await loadTranslationKeys();
    }

    // ==================== 导入导出 ====================
    async function syncTranslations() {
        if (!confirm('确定要同步翻译吗？这将扫描所有页面并添加缺失的翻译键。')) return;

        const token = localStorage.getItem('token');

        const btn = document.getElementById('syncTranslationsBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 同步中...';
        btn.disabled = true;

        try {
            const response = await fetch(`${API_BASE}/translations/sync`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            const data = await response.json();

            if (data.success) {
                alert(`同步成功！新增了 ${data.added} 个翻译键，更新了 ${data.updated} 个。`);
                await loadTranslationKeys();
            } else {
                alert('同步失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            alert('网络错误，请重试');
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }

    async function exportTranslations() {
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
    }

    function handleImportFile(file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const content = e.target.result;
                let data;

                if (file.name.endsWith('.json')) {
                    data = JSON.parse(content);
                } else {
                    alert('Excel 导入功能需要安装 xlsx 库');
                    return;
                }

                const previewBody = document.getElementById('importPreviewBody');
                let previewHtml = '';
                let count = 0;

                for (let key in data) {
                    if (count++ >= 10) {
                        previewHtml += '<tr><td colspan="3">... 还有更多</td></tr>';
                        break;
                    }
                    previewHtml += `<tr><td>${key}</td><td>多种语言</td><td>${JSON.stringify(data[key]).substring(0, 50)}</td></tr>`;
                }

                previewBody.innerHTML = previewHtml;
                document.getElementById('importPreview').style.display = 'block';
                document.getElementById('confirmImportBtn').disabled = false;

                window.importData = data;

            } catch (error) {
                alert('文件解析失败：' + error.message);
            }
        };

        if (file.name.endsWith('.json')) {
            reader.readAsText(file);
        }
    }

    async function importTranslations() {
        const data = window.importData;
        if (!data) return;

        const langCode = document.getElementById('importLangCode')?.value;
        const mode = document.querySelector('input[name="importMode"]:checked').value;

        if (!langCode) {
            alert('请选择导入的语言');
            return;
        }

        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${API_BASE}/translations/import`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    data,
                    mode,
                    langCode: langCode
                })
            });

            const result = await response.json();

            if (result.success) {
                alert(`导入成功：新增 ${result.added}，更新 ${result.updated}`);
                window.adminCore.closeModal('importTranslationsModal');
                await loadTranslationKeys();
            } else {
                alert('导入失败：' + result.error);
            }
        } catch (error) {
            alert('网络错误');
        }
    }

    // ==================== 区域设置 ====================
    async function saveRegionSettings() {
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

            if (data.success) {
                alert('区域设置保存成功');
            } else {
                alert('保存失败：' + data.error);
            }
        } catch (error) {
            alert('网络错误，请重试');
        }
    }

    // ==================== 工具函数 ====================
    function openAddLanguageModal() {
        document.getElementById('languageId').value = '';
        document.getElementById('languageForm').reset();
        document.getElementById('langCode').readOnly = false;
        document.getElementById('langIsEnabled').checked = true;
        document.getElementById('languageModalTitle').textContent = '新增语言';
        window.adminCore.openModal('addLanguageModal');
    }

    function openAddKeyModal() {
        document.getElementById('newKey').value = '';
        document.getElementById('newKeyDescription').value = '';

        const container = document.getElementById('initialTranslations');
        const activeLanguages = languages.filter(l => l.is_active);

        let html = '<div style="display:grid; grid-template-columns:repeat(2,1fr); gap:10px;">';
        activeLanguages.forEach(lang => {
            html += `
                <div>
                    <label>${lang.name}</label>
                    <input type="text" class="form-control" id="init_${lang.code}" placeholder="可选">
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;

        window.adminCore.openModal('addTranslationKeyModal');
    }

    function updatePagination(pagination) {
        const container = document.getElementById('languagePagination');
        if (!container) return;

        if (pagination.total_pages <= 1) {
            container.style.display = 'none';
            return;
        }

        container.style.display = 'flex';
        let html = '';
        for (let i = 1; i <= pagination.total_pages; i++) {
            const activeClass = i === pagination.current_page ? 'active' : '';
            html += `<div class="page-item ${activeClass}" data-page="${i}">${i}</div>`;
        }
        container.innerHTML = html;
    }
})();