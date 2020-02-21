class Auth {
  constructor() {
    this.authenticated = false
  }

  login(params, onLogin) {
    console.log('TODO login', params)
    this.authenticated = true
    onLogin()
  }

  logout(onLogout) {
    this.authenticated = false
    onLogout()
  }

  isAuthenticated = () => this.authenticated
}

export default new Auth()
