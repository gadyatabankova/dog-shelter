export const fakeAuth = {
  isAuthenticated: JSON.parse(localStorage.getItem('isAuth')),
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
    localStorage.setItem('isAuth', this.isAuthenticated);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
    localStorage.setItem('isAuth', this.isAuthenticated);
  }
}
