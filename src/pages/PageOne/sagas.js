import { takeLatest, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

function* fetchauthor() {
  try {
    yield delay(1000)
    yield put({
      type: 'FETCH_PAGE_ONE_AUTHOR_SUCCESS',
      payload: {
        author: {
          firstName: 'PageOne',
          lastName: 'Doe',
        }
      }
    })
  } catch (error) {
    yield put({
      type: 'FETCH_PAGE_ONE_AUTHOR_FAILURE ',
      payload: {
        error
      }
    })
  }
}

function* watchFetchAuthor() {
  yield takeLatest('FETCH_PAGE_ONE_AUTHOR_REQUEST', fetchauthor)
}

export default [
  watchFetchAuthor
]
