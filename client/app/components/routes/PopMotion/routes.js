import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPage from './IndexPage'
import SlidePage from './SlidePage'
import ChartPage from './ChartPage'

export default (
  <Route path='pop-motion'>
    <IndexRoute component={IndexPage} />
    <Route path='slide' component={SlidePage} />
    <Route path='chart' component={ChartPage} />
  </Route>
)
