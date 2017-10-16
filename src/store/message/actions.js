export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

export const updateMessage = message => ({
  type: UPDATE_MESSAGE,
  payload: {
    message,
  },
})

// async actions
export const MESSAGE_READ_REQUEST = 'MESSAGE_READ_REQUEST'
export const MESSAGE_READ_SUCCESS = 'MESSAGE_READ_SUCCESS'
export const MESSAGE_READ_FAILURE = 'MESSAGE_READ_FAILURE'

export const messageReadRequest = () => ({
  type: MESSAGE_READ_REQUEST,
  payload: null,
  meta: {
    thunk: 'r',
  },
})

export const messageReadSuccess = (message, thunk) => ({
  type: MESSAGE_READ_SUCCESS,
  payload: message,
  meta: {
    thunk,
  },
})

export const messageReadFailure = (error, thunk) => ({
  type: MESSAGE_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    thunk,
  },
})
