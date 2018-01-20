import { all } from 'redux-saga/effects'
import authorSagas from 'stores/author/sagas'

const run = sagas => sagas.map(saga => saga())

export default function* rootSaga() {
  yield all([
    ...run(authorSagas)
  ])
}
