import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPath from './IndexPath'
import IndexPage from './IndexPage'
import AreaChartPage from './AreaChartPage'
import LineChartPage from './LineChartPage'
import BarChartPage from './BarChartPage'
import PieChartPage from './PieChartPage'
import ScatterplotChartPage from './ScatterplotChartPage'

export default (
  <Route path='/' component={IndexPath}>
    <IndexRoute component={IndexPage} />
    <Route path='area-chart' component={AreaChartPage} />
    <Route path='line-chart' component={LineChartPage} />
    <Route path='bar-chart' component={BarChartPage} />
    <Route path='pie-chart' component={PieChartPage} />
    <Route path='scatterplot-chart' component={ScatterplotChartPage} />
  </Route>
)
