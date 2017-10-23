import { initialState } from './selectors'
import {
  SET_DEFAULT_STEP,
  END_STEP,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DEFAULT_STEP:
      return {
        ...state,
        signup: {
          ...state.signup,
          current: 0,
        },
      }
    case END_STEP: {
      /* eslint-disable no-param-reassign, no-return-assign */
      if (state.signup.names.length > state.signup.current) {
        return {
          ...state,
          signup: {
            ...state.signup,
            current: state.signup.current += 1,
            /* eslint-enable no-param-reassign no-return-assign */
          },
        }
      }
      return state
    }
    default:
      return state
  }
}