import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById('root')

ReactDOM.render(<Provider store={store}><App /></Provider>, rootEl)
registerServiceWorker()

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App', () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, rootEl)
  })
}
