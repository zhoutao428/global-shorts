// admin-users.js
(function() {
    // ---------- 用户管理 ----------
    const API_BASE_URL = 'https://global-shorts-api.z17756037070.workers.dev/api';

    async function loadUsers() {
        const tbody = document.getElementById('userTableBody');
        if (!tbody) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE_URL}/admin/users`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            if (data.success && data.data && data.data.length > 0) {
                renderUsers(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="9" class="empty-placeholder">暂无用户</td></tr>';
            }
        } catch (error) {
            console.error('加载用户失败:', error);
            tbody.innerHTML = '<tr><td colspan="9" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderUsers(users) {
        const tbody = document.getElementById('userTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id || ''}</td>
                <td>${user.nickname || '-'}</td>
                <td>${user.email || '-'}</td>
                <td>${user.country || '-'}</td>
                <td><span class="status-badge ${user.is_active ? 'status-active' : 'status-inactive'}">${user.is_active ? '活跃' : '禁用'}</span></td>
                <td><span class="status-badge ${user.is_vip ? 'status-vip' : 'status-inactive'}">${user.is_vip ? 'VIP' : '普通'}</span></td>
                <td>${user.coins || 0}</td>
                <td>${user.created_at ? new Date(user.created_at).toLocaleDateString() : '-'}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="editUser('${user.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteUser('${user.id}')">删除</button>
                    ${!user.is_vip ? 
                        `<button class="btn btn-sm btn-success" onclick="setVip('${user.id}')">设为VIP</button>` : 
                        `<button class="btn btn-sm btn-warning" onclick="cancelVip('${user.id}')">取消VIP</button>`
                    }
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    async function loadVipUsers() {
        const tbody = document.getElementById('vipUserTableBody');
        if (!tbody) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE_URL}/admin/users?vip=1`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            if (data.success && data.data && data.data.length > 0) {
                renderVipUsers(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">暂无VIP用户</td></tr>';
            }
        } catch (error) {
            console.error('加载VIP用户失败:', error);
            tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderVipUsers(users) {
        const tbody = document.getElementById('vipUserTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        users.forEach(user => {
            const row = document.createElement('tr');
            const vipExpiresAt = user.vip_expires_at 
                ? new Date(user.vip_expires_at).toLocaleDateString() 
                : '永久';
            
            row.innerHTML = `
                <td>${user.id || ''}</td>
                <td>${user.nickname || '-'}</td>
                <td>${user.email || '-'}</td>
                <td>${vipExpiresAt}</td>
                <td>${user.coins || 0}</td>
                <td>${user.created_at ? new Date(user.created_at).toLocaleDateString() : '-'}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="editUser('${user.id}')">编辑</button>
                    <button class="btn btn-sm btn-warning" onclick="cancelVip('${user.id}')">取消VIP</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    window.editUser = async function(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            if (data.success && data.data) {
                const user = data.data;
                document.getElementById('userId').value = user.id || '';
                document.getElementById('userNickname').value = user.nickname || '';
                document.getElementById('userEmail').value = user.email || '';
                document.getElementById('userCoins').value = user.coins || 0;
                document.getElementById('userStatus').value = user.is_active ? 'active' : 'inactive';
                
                document.getElementById('userModalTitle').textContent = '编辑用户';
                if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                    adminCore.openModal('addUserModal');
                }
            } else {
                alert('加载用户失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('加载用户失败:', error);
            alert('加载用户失败，请重试');
        }
    };

    window.deleteUser = async function(id) {
        if (!confirm('确定要删除该用户吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            if (data.success) {
                await loadUsers();
                if (document.getElementById('vipUserTableBody')) {
                    await loadVipUsers();
                }
            } else {
                alert('删除失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('删除用户失败:', error);
            alert('网络错误，请重试');
        }
    };

    window.setVip = async function(id) {
        const expiresAt = prompt('设置VIP到期时间 (YYYY-MM-DD)，留空为永久', '');
        
        // 验证日期格式（如果输入了内容）
        if (expiresAt && !/^\d{4}-\d{2}-\d{2}$/.test(expiresAt)) {
            alert('日期格式不正确，请使用 YYYY-MM-DD 格式');
            return;
        }
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    is_vip: true, 
                    vip_expires_at: expiresAt || null 
                })
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            if (data.success) {
                await loadUsers();
                if (document.getElementById('vipUserTableBody')) {
                    await loadVipUsers();
                }
            } else {
                alert('操作失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('设置VIP失败:', error);
            alert('网络错误，请重试');
        }
    };

    window.cancelVip = async function(id) {
        if (!confirm('确定要取消该用户的VIP资格吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    is_vip: false, 
                    vip_expires_at: null 
                })
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            if (data.success) {
                await loadUsers();
                if (document.getElementById('vipUserTableBody')) {
                    await loadVipUsers();
                }
            } else {
                alert('操作失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('取消VIP失败:', error);
            alert('网络错误，请重试');
        }
    };

    async function saveUser() {
        const userId = document.getElementById('userId')?.value;
        
        if (!userId) {
            alert('新增用户功能待完善');
            return;
        }
        
        const nickname = document.getElementById('userNickname')?.value;
        const email = document.getElementById('userEmail')?.value;
        const coins = parseInt(document.getElementById('userCoins')?.value) || 0;
        const is_active = document.getElementById('userStatus')?.value === 'active';
        
        // 表单验证
        if (!email) {
            alert('邮箱不能为空');
            return;
        }
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ nickname, email, coins, is_active })
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            if (data.success) {
                await loadUsers();
                if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                    adminCore.closeModal('addUserModal');
                }
            } else {
                alert('保存失败：' + (data.error || '未知错误'));
            }
        } catch (error) {
            console.error('保存用户失败:', error);
            alert('网络错误，请重试');
        }
    }

    function initUserAnalysis() {
        console.log('用户分析页面初始化');
        // 这里可以初始化图表库
    }

    function bindUserEvents() {
        const addUserBtn = document.getElementById('addUserBtn');
        if (addUserBtn) {
            addUserBtn.addEventListener('click', () => {
                const userIdInput = document.getElementById('userId');
                const userForm = document.getElementById('userForm');
                const modalTitle = document.getElementById('userModalTitle');
                
                if (userIdInput) userIdInput.value = '';
                if (userForm) userForm.reset();
                if (modalTitle) modalTitle.textContent = '添加用户';
                
                if (typeof adminCore !== 'undefined' && adminCore.openModal) {
                    adminCore.openModal('addUserModal');
                }
            });
        }

        const closeModalBtn = document.getElementById('closeAddUserModal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                    adminCore.closeModal('addUserModal');
                }
            });
        }

        const cancelBtn = document.getElementById('cancelAddUserBtn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                if (typeof adminCore !== 'undefined' && adminCore.closeModal) {
                    adminCore.closeModal('addUserModal');
                }
            });
        }

        const saveBtn = document.getElementById('saveUserBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', saveUser);
        }

        const exportBtn = document.getElementById('exportUsers');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                alert('导出用户列表功能待对接API');
            });
        }
    }

    // 页面加载完成后初始化
    function initialize() {
        if (document.getElementById('userListPage')) {
            loadUsers();
            bindUserEvents();
        }
        if (document.getElementById('vipUsersPage')) {
            loadVipUsers();
        }
        if (document.getElementById('userAnalysisPage')) {
            initUserAnalysis();
        }
    }

    // 确保DOM加载完成后再执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    // 导出公共API
    window.adminUsers = {
        loadUsers,
        loadVipUsers,
        editUser: window.editUser,
        deleteUser: window.deleteUser,
        setVip: window.setVip,
        cancelVip: window.cancelVip
    };
})();