import PageOne from './PageOne'
import reducer from './reducer'
import sagas from './sagas'

export default {
  Component: PageOne,
  reducer: {
    name: 'pageOneAuthor',
    reducer
  },
  sagas: {
    name: 'pageOneAuthor',
    sagas  
  }
}
