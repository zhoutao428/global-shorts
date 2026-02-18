class I18n {
    constructor() {
        this.currentLang = 'en';
        this.translations = {};
    }
    
    init(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
    }
    
    t(key) {
        return key; // 简单实现
    }
}

export default new I18n();