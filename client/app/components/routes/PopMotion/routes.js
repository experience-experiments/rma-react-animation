import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPage from './IndexPage'
import TweenPage from './TweenPage'

export default (
  <Route path='pop-motion'>
    <IndexRoute component={IndexPage} />
    <Route path='tween' component={TweenPage} />
  </Route>
)
