class Auth {
    constructor() {
        this.token = localStorage.getItem('token');
        this.user = null;
    }
    
    isLoggedIn() {
        return !!this.token;
    }
    
    isVIP() {
        return this.user?.isVip || false;
    }
    
    setToken(token) {
        this.token = token;
        localStorage.setItem('token', token);
    }
    
    logout() {
        this.token = null;
        this.user = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}

export default new Auth();