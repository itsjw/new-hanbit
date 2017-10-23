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

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED'

export const signInRequest = (email, password) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    email,
    password,
  },
  meta: {
    thunk: 'signup',
  },
})
export const signInSuccess = (result, thunk) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    result,
  },
  meta: {
    thunk,
  },
})
export const signInFailed = (error, thunk) => ({
  type: SIGN_IN_FAILED,
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
