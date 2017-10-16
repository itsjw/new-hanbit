import { mockProducts } from 'helpers'

/* eslint-disable no-param-reassign, no-return-assign */
// 큰 프리뷰 이미지는 처음 들어갈 때 항상 첫 사진으로 나옴
mockProducts.map(product => product.lookingNthPicture = 0)

export const initialState = {
  list: mockProducts,
}

export const getLookingNthPicture = (state = initialState, productId) => state.list[productId].lookingNthPicture
export const getPictures = (state = initialState, productId) => state.list[productId].productPictures
export const getName = (state = initialState, productId) => state.list[productId].productName
export const getPrice = (state = initialState, productId) => state.list[productId].productPrice
export const getShortDescription = (state = initialState, productId) => state.list[productId].productShortDescription
export const getAmount = (state = initialState, productId) => state.list[productId].productAmount
export const getOptions = (state = initialState, productId) => state.list[productId].productOptions
export const getNumberOfReviews = (state = initialState, productId) => (state.list[productId].productReviews.length || 0)
export const getFullDescription = (state = initialState, productId) => state.list[productId].productFullDescription
export const getRelated = (state = initialState, productId) => state.list[productId].productRelated

