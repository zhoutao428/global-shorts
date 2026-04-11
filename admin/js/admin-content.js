// admin-content.js
(function() {
    const API_BASE = '/api/admin';

    // ---------- 剧集管理 ----------
    async function loadDramas() {
        const tbody = document.getElementById('dramaTableBody');
        if (!tbody) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/dramas`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success && data.data.length > 0) {
                renderDramas(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="9" class="empty-placeholder">暂无剧集</td></tr>';
            }
        } catch (error) {
            console.error('加载剧集失败:', error);
            tbody.innerHTML = '<tr><td colspan="9" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderDramas(dramas) {
        const tbody = document.getElementById('dramaTableBody');
        tbody.innerHTML = '';
        
        dramas.forEach(drama => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${drama.id}</td>
                <td>${drama.title}</td>
                <td>${drama.category || '-'}</td>
                <td>${drama.total_episodes || 0}</td>
                <td>${drama.view_count || 0}</td>
                <td>${drama.like_count || 0}</td>
                <td><span class="status-badge ${drama.is_active ? 'status-active' : 'status-inactive'}">${drama.is_active ? '已发布' : '草稿'}</span></td>
                <td>${drama.is_vip ? '<span class="status-badge status-vip">VIP</span>' : '免费'}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="adminContent.editDrama('${drama.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="adminContent.deleteDrama('${drama.id}')">删除</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    async function saveDrama() {
        const formData = {
            title: document.getElementById('dramaTitle')?.value,
            description: document.getElementById('dramaDescription')?.value,
            cover_url: document.getElementById('dramaCover')?.value,
            category: document.getElementById('dramaCategory')?.value,
            total_episodes: parseInt(document.getElementById('totalEpisodes')?.value) || 0,
            is_vip: document.getElementById('isVip')?.checked || false
        };
        
        const dramaId = document.getElementById('dramaId')?.value;
        const url = dramaId ? `${API_BASE}/dramas/${dramaId}` : `${API_BASE}/dramas`;
        const method = dramaId ? 'PUT' : 'POST';
        
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
            const data = await res.json();
            
            if (data.success) {
                loadDramas();
                adminCore.closeModal('addDramaModal');
            } else {
                alert('保存失败：' + data.error);
            }
        } catch (error) {
            alert('网络错误，请重试');
        }
    }

    async function editDrama(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/dramas/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success) {
                const drama = data.data;
                document.getElementById('dramaId').value = drama.id;
                document.getElementById('dramaTitle').value = drama.title;
                document.getElementById('dramaDescription').value = drama.description || '';
                document.getElementById('dramaCover').value = drama.cover_url || '';
                document.getElementById('dramaCategory').value = drama.category || '';
                document.getElementById('totalEpisodes').value = drama.total_episodes || 0;
                document.getElementById('isVip').checked = drama.is_vip || false;
                
                document.getElementById('modalTitle').textContent = '编辑剧集';
                adminCore.openModal('addDramaModal');
            }
        } catch (error) {
            alert('加载剧集失败');
        }
    }

    async function deleteDrama(id) {
        if (!confirm('确定要删除该剧集吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/dramas/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success) {
                loadDramas();
            } else {
                alert('删除失败：' + data.error);
            }
        } catch (error) {
            alert('网络错误，请重试');
        }
    }

    function bindDramaEvents() {
        document.getElementById('addDramaBtn')?.addEventListener('click', () => {
            document.getElementById('dramaId').value = '';
            document.getElementById('dramaForm').reset();
            document.getElementById('modalTitle').textContent = '添加剧集';
            adminCore.openModal('addDramaModal');
        });
        
        document.getElementById('closeDramaModal')?.addEventListener('click', () => {
            adminCore.closeModal('addDramaModal');
        });
        
        document.getElementById('cancelDramaBtn')?.addEventListener('click', () => {
            adminCore.closeModal('addDramaModal');
        });
        
        document.getElementById('saveDramaBtn')?.addEventListener('click', saveDrama);
    }

    // ---------- 分集管理 ----------
    async function loadEpisodes() {
        const tbody = document.getElementById('episodeTableBody');
        if (!tbody) return;
        
        const dramaId = document.getElementById('dramaSelect')?.value;
        if (!dramaId || dramaId === '') {
            tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">请先选择剧集</td></tr>';
            return;
        }
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/episodes?drama_id=${dramaId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success && data.data.length > 0) {
                renderEpisodes(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">暂无分集</td></tr>';
            }
        } catch (error) {
            console.error('加载分集失败:', error);
            tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderEpisodes(episodes) {
        const tbody = document.getElementById('episodeTableBody');
        tbody.innerHTML = '';
        
        episodes.forEach(ep => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${ep.episode_number}</td>
                <td>${ep.title}</td>
                <td><a href="${ep.video_url}" target="_blank" style="color:var(--primary);">查看链接</a></td>
                <td>${ep.duration ? Math.floor(ep.duration/60) + ':' + (ep.duration%60).toString().padStart(2,'0') : '-'}</td>
                <td>${ep.is_free ? '是' : '否'}</td>
                <td><span class="status-badge ${ep.is_active ? 'status-active' : 'status-inactive'}">${ep.is_active ? '启用' : '禁用'}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="adminContent.editEpisode('${ep.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="adminContent.deleteEpisode('${ep.id}')">删除</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    async function saveEpisode() {
        const dramaId = document.getElementById('dramaSelect')?.value;
        if (!dramaId || dramaId === '') {
            alert('请先选择剧集');
            return;
        }
        
        const formData = {
            drama_id: dramaId,
            episode_number: parseInt(document.getElementById('episodeNumber')?.value) || 1,
            title: document.getElementById('episodeTitle')?.value,
            video_url: document.getElementById('videoUrl')?.value,
            duration: parseInt(document.getElementById('episodeDuration')?.value) || 0,
            is_free: document.getElementById('isFree')?.checked || true
        };
        
        const episodeId = document.getElementById('episodeId')?.value;
        const url = episodeId ? `${API_BASE}/episodes/${episodeId}` : `${API_BASE}/episodes`;
        const method = episodeId ? 'PUT' : 'POST';
        
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
            const data = await res.json();
            
            if (data.success) {
                loadEpisodes();
                adminCore.closeModal('addEpisodeModal');
            } else {
                alert('保存失败：' + data.error);
            }
        } catch (error) {
            alert('网络错误，请重试');
        }
    }

    async function editEpisode(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/episodes/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success) {
                const ep = data.data;
                document.getElementById('episodeId').value = ep.id;
                document.getElementById('episodeNumber').value = ep.episode_number;
                document.getElementById('episodeTitle').value = ep.title;
                document.getElementById('videoUrl').value = ep.video_url;
                document.getElementById('episodeDuration').value = ep.duration || 0;
                document.getElementById('isFree').checked = ep.is_free || true;
                
                document.getElementById('episodeModalTitle').textContent = '编辑分集';
                adminCore.openModal('addEpisodeModal');
            }
        } catch (error) {
            alert('加载分集失败');
        }
    }

    async function deleteEpisode(id) {
        if (!confirm('确定要删除该分集吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/episodes/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success) {
                loadEpisodes();
            } else {
                alert('删除失败：' + data.error);
            }
        } catch (error) {
            alert('网络错误，请重试');
        }
    }

    function bindEpisodeEvents() {
        document.getElementById('addEpisodeBtn')?.addEventListener('click', () => {
            const dramaId = document.getElementById('dramaSelect')?.value;
            if (!dramaId || dramaId === '') {
                alert('请先选择剧集');
                return;
            }
            
            document.getElementById('episodeId').value = '';
            document.getElementById('episodeForm').reset();
            document.getElementById('episodeModalTitle').textContent = '添加分集';
            adminCore.openModal('addEpisodeModal');
        });

        document.getElementById('dramaSelect')?.addEventListener('change', (e) => {
    const newDramaFields = document.getElementById('newDramaFields');
    if (newDramaFields) {
        if (e.target.value === '') {
            newDramaFields.style.display = 'block';
        } else {
            newDramaFields.style.display = 'none';
            loadEpisodes();
        }
    }
});

        document.getElementById('closeEpisodeModal')?.addEventListener('click', () => {
            adminCore.closeModal('addEpisodeModal');
        });

        document.getElementById('cancelEpisodeBtn')?.addEventListener('click', () => {
            adminCore.closeModal('addEpisodeModal');
        });

        document.getElementById('saveEpisodeBtn')?.addEventListener('click', saveEpisode);
    }

    // ---------- 批量上传 ----------
    function initBatchUpload() {
        const uploadArea = document.getElementById('videoUploadArea');
        if (uploadArea) {
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.style.borderColor = 'var(--primary)';
            });
            uploadArea.addEventListener('dragleave', () => {
                uploadArea.style.borderColor = 'var(--border)';
            });
            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.style.borderColor = 'var(--border)';
                const files = e.dataTransfer.files;
                handleVideoFiles(files);
            });
        }
        
        document.getElementById('browseVideosBtn')?.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.multiple = true;
            input.accept = 'video/mp4,video/avi,video/mov';
            input.onchange = (e) => handleVideoFiles(e.target.files);
            input.click();
        });

        document.getElementById('startUploadBtn')?.addEventListener('click', startUpload);
    }

    function handleVideoFiles(files) {
        const fileList = document.getElementById('videoFileList');
        fileList.innerHTML = '';
        
        Array.from(files).forEach(file => {
            const item = document.createElement('div');
            item.className = 'file-item';
            item.innerHTML = `
                <div class="file-info">
                    <i class="fas fa-file-video file-icon"></i>
                    <span>${file.name}</span>
                </div>
                <span>${(file.size / 1024 / 1024).toFixed(2)} MB</span>
            `;
            fileList.appendChild(item);
        });
    }

    async function startUpload() {
        alert('上传功能待对接API');
    }

    // ---------- 分类管理 ----------
    async function loadCategories() {
        const tbody = document.getElementById('categoryTableBody');
        if (!tbody) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/categories`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success && data.data.length > 0) {
                renderCategories(data.data);
            } else {
                tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">暂无分类</td></tr>';
            }
        } catch (error) {
            console.error('加载分类失败:', error);
            tbody.innerHTML = '<tr><td colspan="8" class="empty-placeholder">加载失败</td></tr>';
        }
    }

    function renderCategories(categories) {
        const tbody = document.getElementById('categoryTableBody');
        tbody.innerHTML = '';
        
        categories.forEach(cat => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cat.id}</td>
                <td>${cat.name}</td>
                <td>${cat.slug || '-'}</td>
                <td>${cat.description || '-'}</td>
                <td>${cat.drama_count || 0}</td>
                <td>${cat.sort_order || 0}</td>
                <td><span class="status-badge ${cat.is_active ? 'status-active' : 'status-inactive'}">${cat.is_active ? '启用' : '禁用'}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="adminContent.editCategory('${cat.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="adminContent.deleteCategory('${cat.id}')">删除</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    async function saveCategory() {
        const formData = {
            name: document.getElementById('categoryName')?.value,
            slug: document.getElementById('categorySlug')?.value,
            description: document.getElementById('categoryDescription')?.value,
            sort_order: parseInt(document.getElementById('categorySort')?.value) || 0,
            is_active: document.getElementById('categoryStatus')?.value === 'active'
        };
        
        const categoryId = document.getElementById('categoryId')?.value;
        const url = categoryId ? `${API_BASE}/categories/${categoryId}` : `${API_BASE}/categories`;
        const method = categoryId ? 'PUT' : 'POST';
        
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
            const data = await res.json();
            
            if (data.success) {
                loadCategories();
                adminCore.closeModal('addCategoryModal');
            } else {
                alert('保存失败：' + data.error);
            }
        } catch (error) {
            alert('网络错误，请重试');
        }
    }

    async function editCategory(id) {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/categories/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success) {
                const cat = data.data;
                document.getElementById('categoryId').value = cat.id;
                document.getElementById('categoryName').value = cat.name;
                document.getElementById('categorySlug').value = cat.slug || '';
                document.getElementById('categoryDescription').value = cat.description || '';
                document.getElementById('categorySort').value = cat.sort_order || 0;
                document.getElementById('categoryStatus').value = cat.is_active ? 'active' : 'inactive';
                
                document.getElementById('categoryModalTitle').textContent = '编辑分类';
                adminCore.openModal('addCategoryModal');
            }
        } catch (error) {
            alert('加载分类失败');
        }
    }

    async function deleteCategory(id) {
        if (!confirm('确定要删除该分类吗？')) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/categories/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success) {
                loadCategories();
            } else {
                alert('删除失败：' + data.error);
            }
        } catch (error) {
            alert('网络错误，请重试');
        }
    }

    function bindCategoryEvents() {
        document.getElementById('addCategoryBtn')?.addEventListener('click', () => {
            document.getElementById('categoryId').value = '';
            document.getElementById('categoryForm').reset();
            document.getElementById('categoryModalTitle').textContent = '添加分类';
            adminCore.openModal('addCategoryModal');
        });

        document.getElementById('closeCategoryModal')?.addEventListener('click', () => {
            adminCore.closeModal('addCategoryModal');
        });

        document.getElementById('cancelCategoryBtn')?.addEventListener('click', () => {
            adminCore.closeModal('addCategoryModal');
        });

        document.getElementById('saveCategoryBtn')?.addEventListener('click', saveCategory);
    }

    // ---------- 剧集下拉框 ----------
    async function loadDramaSelect() {
        const select = document.getElementById('dramaSelect');
        if (!select) return;
        
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/dramas`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            
            if (data.success) {
                select.innerHTML = '<option value="">选择剧集</option>';
                data.data.forEach(drama => {
                    const option = document.createElement('option');
                    option.value = drama.id;
                    option.textContent = drama.title;
                    select.appendChild(option);
                });
            }
        } catch (error) {
            console.error('加载剧集列表失败:', error);
        }
    }

    // ---------- 统一初始化 ----------
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('dramaListPage')) {
            loadDramas();
            bindDramaEvents();
        }
        if (document.getElementById('episodeListPage')) {
            loadDramaSelect();
            bindEpisodeEvents();
        }
        if (document.getElementById('batchUploadPage')) {
            initBatchUpload();
        }
        if (document.getElementById('categoriesPage')) {
            loadCategories();
            bindCategoryEvents();
        }
    });

    // 暴露给全局，供 onclick 调用
    window.adminContent = {
        loadDramas,
        loadEpisodes,
        loadCategories,
        loadDramaSelect,
        editDrama,
        deleteDrama,
        editEpisode,
        deleteEpisode,
        editCategory,
        deleteCategory
    };
})();