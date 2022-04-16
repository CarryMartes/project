export const authState = {
  signup: {
    isStudent: true
  },
  login: {
    isStudent: true
  },
  isAuth: window.localStorage.getItem('token')
};
