import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPath from './IndexPath'
import IndexPage from './IndexPage'

import PopMotion from './PopMotion/routes'
import ReactD3 from './ReactD3/routes'
import Velocity from './Velocity/routes'
import ReactMotion from './ReactMotion/routes'

export default (
  <Route path='/' component={IndexPath}>
    <IndexRoute component={IndexPage} />
    {PopMotion}
    {ReactD3}
    {ReactMotion}
    {Velocity}
  </Route>
)
