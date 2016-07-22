import React from 'react'
import { Link } from 'react-router'

export default () => (
  <nav>
    <h2><Link to='/'>Index</Link></h2>
    <ul>
      <li><Link to='/react-d3/bar-chart'>Bar Chart</Link></li>
      <li><Link to='/react-d3/pie-chart/hybrid'>Pie Chart (Hybrid)</Link></li>
      <li><Link to='/react-d3/pie-chart/static'>Pie Chart (Static)</Link></li>
      <li><Link to='/react-d3/line-chart'>Line Chart</Link></li>
      <li><Link to='/react-d3/brokenline-chart'>Broken Line Chart</Link></li>
      <li><Link to='/react-d3/area-chart'>Area Chart</Link></li>
      <li><Link to='/react-d3/scatterplot-chart/hybrid'>Scatterplot Chart (Hybrid)</Link></li>
      <li><Link to='/react-d3/scatterplot-chart/static'>Scatterplot Chart (Static)</Link></li>
      <li><Link to='/react-d3/legend'>Legend</Link></li>
    </ul>
  </nav>
)
