import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

// worker saga
export function* readMessage(api, { thunk }) {
  try {
    yield call(delay, 2000)
    const { message } = yield call([api, api.get], '/api/x')
    yield put(actions.messageReadSuccess(message, thunk))
  } catch (e) {
    yield put(actions.messageReadFailure(e, thunk))
  }
}

// watcher
export function* readMessageSaga(api, { meta }) {
  yield call(readMessage, api, meta)
}

// root saga
export default function* ({ api }) {
  yield takeEvery(actions.MESSAGE_READ_REQUEST, readMessageSaga, api)
}
