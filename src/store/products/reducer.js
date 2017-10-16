import { initialState } from './selectors'
import {
  CHANGE_PICTURE,
  ADD_AMOUNT,
  REMOVE_AMOUNT,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_PICTURE:
      return {
        list: {
          ...state.list,
          [payload.productId]: {
            ...state.list[payload.productId],
            lookingNthPicture: payload.index,
          },
        },
      }
    case ADD_AMOUNT:
      return {
        list: {
          ...state.list,
          [payload.productId]: {
            ...state.list[payload.productId],
            productAmount: state.list[payload.productId].productAmount + 1,
          },
        },
      }
    case REMOVE_AMOUNT:
      // 하나 이상을 선택했을 때만 뺄 수 있도록!
      if (state.list[payload.productId].productAmount >= 1) {
        return {
          list: {
            ...state.list,
            [payload.productId]: {
              ...state.list[payload.productId],
              productAmount: state.list[payload.productId].productAmount - 1,
            },
          },
        }
      }
      break
    default:
      return state
  }
}
