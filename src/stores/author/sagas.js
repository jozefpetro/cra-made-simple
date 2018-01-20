import { takeLatest, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

function* fetchauthor() {
  try {
    yield delay(1000)
    yield put({
      type: 'FETCH_AUTHOR_SUCCESS',
      payload: {
        author: {
          firstName: 'Stores',
          lastName: 'Doe',
        }
      }
    })
  } catch (error) {
    yield put({
      type: 'FETCH_AUTHOR_FAILURE ',
      payload: {
        error
      }
    })
  }
}

function* watchFetchAuthor() {
  yield takeLatest('FETCH_AUTHOR_REQUEST', fetchauthor)
}

export default [
  watchFetchAuthor
]
