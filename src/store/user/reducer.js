import { initialState } from './selectors'
import {
  SIGN_UP_SUCCESS,
  CHECK_USER,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload.result.message ?
        null : { email: payload.result.email },
      }
    case CHECK_USER:
      return {
        ...state,
        currentUser: payload.email && { email: payload.email },
      }
    default:
      return state
  }
}
