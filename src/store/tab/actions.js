export const SET_DEFAULT_TAB = 'SET_DEFAULT_TAB'
export const SELECT_TAB = 'SELECT_TAB'

export const selectTab = (productId, name) => ({
  type: SELECT_TAB,
  payload: {
    productId,
    name,
  },
})

export const setDefaultTab = productId => ({
  type: SET_DEFAULT_TAB,
  payload: {
    productId,
  },
})

