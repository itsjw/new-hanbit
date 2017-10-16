import { initialState } from './selectors'
import {
  EXPAND_NAV,
  COLLAPSE_NAV,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EXPAND_NAV:
      return {
        ...state,
        [payload.name]: true,
      }
    case COLLAPSE_NAV:
      if (payload.name) {
        return {
          ...state,
          [payload.name]: false,
        }
      }
      return initialState
    default:
      return state
  }
}
