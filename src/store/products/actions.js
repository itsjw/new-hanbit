export const CHANGE_PICTURE = 'CHANGE_PICTURE'

export const changePicture = (productId, index) => ({
  type: CHANGE_PICTURE,
  payload: {
    productId,
    index,
  },
})

export const ADD_AMOUNT = 'ADD_AMOUNT'
export const REMOVE_AMOUNT = 'REMOVE_AMOUNT'

export const addAmount = productId => ({
  type: ADD_AMOUNT,
  payload: {
    productId,
  },
})

export const removeAmount = productId => ({
  type: REMOVE_AMOUNT,
  payload: {
    productId,
  },
})
