export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED'

export const signUpRequest = (email, password) => ({
  type: SIGN_UP_REQUEST,
  payload: {
    email,
    password,
  },
  meta: {
    thunk: 'signup',
  },
})
export const signUpSuccess = (result, thunk) => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    result,
  },
  meta: {
    thunk,
  },
})
export const signUpFailed = (error, thunk) => ({
  type: SIGN_UP_FAILED,
  payload: error,
  meta: {
    thunk,
  },
})

export const CHECK_USER = 'CHECK_USER'

export const checkUser = email => ({
  type: CHECK_USER,
  payload: {
    email,
  },
})
