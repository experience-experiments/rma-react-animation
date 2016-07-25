import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPage from './IndexPage'
import FlipFlapPage from './FlipFlapPage'

export default (
  <Route path='velocity'>
    <IndexRoute component={IndexPage} />
    <Route path='flip-flap' component={FlipFlapPage} />
  </Route>
)
