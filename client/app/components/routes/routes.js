import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPath from './IndexPath'
import IndexPage from './IndexPage'
import BarChartPage from './ReactD3/BarChartPage'
import PieChartHybridPage from './ReactD3/PieChartPage/hybrid'
import PieChartStaticPage from './ReactD3/PieChartPage/static'
import LineChartPage from './ReactD3/LineChartPage'
import BrokenLineChartPage from './ReactD3/BrokenLineChartPage'
import AreaChartPage from './ReactD3/AreaChartPage'
import ScatterplotChartHybridPage from './ReactD3/ScatterplotChartPage/hybrid'
import ScatterplotChartStaticPage from './ReactD3/ScatterplotChartPage/static'
import LegendPage from './ReactD3/LegendPage'

export default (
  <Route path='/' component={IndexPath}>
    <IndexRoute component={IndexPage} />
    <Route path='react-d3/bar-chart' component={BarChartPage} />
    <Route path='react-d3/pie-chart/hybrid' component={PieChartHybridPage} />
    <Route path='react-d3/pie-chart/static' component={PieChartStaticPage} />
    <Route path='react-d3/line-chart' component={LineChartPage} />
    <Route path='react-d3/brokenline-chart' component={BrokenLineChartPage} />
    <Route path='react-d3/area-chart' component={AreaChartPage} />
    <Route path='react-d3/scatterplot-chart/hybrid' component={ScatterplotChartHybridPage} />
    <Route path='react-d3/scatterplot-chart/static' component={ScatterplotChartStaticPage} />
    <Route path='react-d3/legend' component={LegendPage} />
  </Route>
)
