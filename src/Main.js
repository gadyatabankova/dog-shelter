import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Animals from '../src/Animals'
import Today from '../src/Today'
import Home from '../src/Home'
import Login from '../src/Login'

import { fakeAuth } from '../src/fakeAuth'

class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/today' component={Today} />
          <PrivateRoute path='/animals' component={Animals} />
        </Switch>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
      }}/>
  )}/>
)

export default Main;
