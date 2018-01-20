import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import asyncRoute from './asyncRoute'
import Home from 'pages/Home'

const PageOne = asyncRoute(() => import('pages/PageOne'))
const PageTwo = asyncRoute(() => import('pages/PageTwo'))

PageTwo.preload()

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route  path="/home" component={Home} />
          <Route  path="/pageOne" component={PageOne} />
          <Route  path="/pageTwo" component={PageTwo} />
        </Switch>
      </Router>
    )
  }
}

export default App
