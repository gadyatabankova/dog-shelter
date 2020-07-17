import React from 'react'
import { fakeAuth } from '../src/fakeAuth'
import { withRouter } from 'react-router-dom';

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated === true
    ? <p>
        Welcome! <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>Sign Out</button>
      </p>
    : <p>You are not logged in</p>
))

export default AuthButton;
