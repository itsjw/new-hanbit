import { delay } from 'redux-saga'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'

export function* signUp(api, payload, { thunk }) {
  try {
    const { email, password } = payload
    yield call(delay, 1000)
    const result = yield call([api, api.post], '/user/signup', { email, password })

    yield put(actions.signUpSuccess(result, thunk))
  } catch (e) {
    yield put(actions.signUpFailed(e, thunk))
  }
}

export function* signUpSaga(api, { payload, meta }) {
  yield call(signUp, api, payload, meta)
}

export default function* ({ api }) {
  yield takeLatest(actions.SIGN_UP_REQUEST, signUpSaga, api)
}
