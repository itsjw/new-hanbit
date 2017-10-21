export const initialState = {
  currentUser: null,
}

export const isLoggedIn = (state = initialState) => !!state.currentUser
