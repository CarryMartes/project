export const authState = {
  signup: {
    isStudent: true
  },
  login: {
    isStudent: true
  },
  userProfile: null,
  isAuth: window.localStorage.getItem('token')
};
