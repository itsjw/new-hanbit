import { initialState } from './selectors'
import {
  SELECT_TAB,
  SET_DEFAULT_TAB,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_TAB:
      return {
        ...state,
        [`detail-${payload.productId}`]: [
          payload.name,
        ],
      }
    case SET_DEFAULT_TAB:
      return {
        ...state,
        [`detail-${payload.productId}`]: [
          state.detail[0],
        ],
      }
    default:
      return state
  }
}
