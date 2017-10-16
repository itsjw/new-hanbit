import { initialState } from './selectors'
import {
  START_SEARCH,
  CANCEL_SEARCH,
  OPEN_DRAWER,
  CLOSE_DRAWER,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_SEARCH:
      return {
        ...state,
        searching: true,
      }
    case CANCEL_SEARCH:
      return {
        ...state,
        searching: false,
      }
    case OPEN_DRAWER:
      return {
        ...state,
        drawer: true,
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        drawer: false,
      }
    default:
      return state
  }
}
