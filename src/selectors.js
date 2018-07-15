export function getUserName(state) {
    return state.auth.username;
  }

  export function isLoggedIn(state) {
    return !!state.auth.username;
  }
