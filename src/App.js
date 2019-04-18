import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './components/Navigation'
import List from './containers/List'
import styles from './App.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

library.add(faCaretDown, faArrowLeft, faArrowRight)

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navigation />
        <div className={styles.Content}>
          <Switch>
            <Route path='/list/genres/:genre/:type/:page' component={List} />
            <Route path="/list/:year/:season" component={List} />
            <Redirect to="/list/2019/spring" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
