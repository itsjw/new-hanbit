import { initialState } from './selectors'
import {
  UPDATE_MESSAGE,
  MESSAGE_READ_REQUEST,
  MESSAGE_READ_SUCCESS,
} from './actions'

export default (state = initialState, { type, payload, meta }) => {
  switch (type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: payload.message,
      }
    case MESSAGE_READ_REQUEST:
      return {
        ...state,
      }
    case MESSAGE_READ_SUCCESS:
      return {
        ...state,
        message: payload,
      }
    default:
      return state
  }
}
