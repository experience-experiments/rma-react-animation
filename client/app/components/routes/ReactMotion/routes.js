import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPage from './IndexPage'
import SpringPage from './SpringPage'

export default (
  <Route path='react-motion'>
    <IndexRoute component={IndexPage} />
    <Route path='spring' component={SpringPage} />
  </Route>
)
