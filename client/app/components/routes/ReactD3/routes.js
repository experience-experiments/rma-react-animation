import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPage from './IndexPage'
import BarChartPage from './BarChartPage'
import PieChartHybridPage from './PieChartPage/hybrid'
import PieChartStaticPage from './PieChartPage/static'
import LineChartPage from './LineChartPage'
import BrokenLineChartPage from './BrokenLineChartPage'
import AreaChartPage from './AreaChartPage'
import ScatterplotChartHybridPage from './ScatterplotChartPage/hybrid'
import ScatterplotChartStaticPage from './ScatterplotChartPage/static'
import LegendPage from './LegendPage'

export default (
  <Route path='react-d3'>
    <IndexRoute component={IndexPage} />
    <Route path='bar-chart' component={BarChartPage} />
    <Route path='pie-chart/hybrid' component={PieChartHybridPage} />
    <Route path='pie-chart/static' component={PieChartStaticPage} />
    <Route path='line-chart' component={LineChartPage} />
    <Route path='brokenline-chart' component={BrokenLineChartPage} />
    <Route path='area-chart' component={AreaChartPage} />
    <Route path='scatterplot-chart/hybrid' component={ScatterplotChartHybridPage} />
    <Route path='scatterplot-chart/static' component={ScatterplotChartStaticPage} />
    <Route path='legend' component={LegendPage} />
  </Route>
)
