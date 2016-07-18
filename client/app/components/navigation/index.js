import React from 'react'
import { Link } from 'react-router'

export default () => (
  <nav>
    <h2><Link to='/'>Index</Link></h2>
    <ul>
      <li><Link to='/bar-chart'>Bar Chart</Link></li>
      <li><Link to='/pie-chart/hybrid'>Pie Chart (Hybrid)</Link></li>
      <li><Link to='/pie-chart/static'>Pie Chart (Static)</Link></li>
      <li><Link to='/line-chart'>Line Chart</Link></li>
      <li><Link to='/area-chart'>Area Chart</Link></li>
      <li><Link to='/scatterplot-chart/hybrid'>Scatterplot Chart (Hybrid)</Link></li>
      <li><Link to='/scatterplot-chart/static'>Scatterplot Chart (Static)</Link></li>
      <li><Link to='/legend'>Legend</Link></li>
    </ul>
  </nav>
)
