import React from 'react'
import { Link } from 'react-router'

export default () => (
  <nav>
    <ul>
      <li><Link to='/area-chart'>Area Chart</Link></li>
      <li><Link to='/line-chart'>Line Chart</Link></li>
      <li><Link to='/bar-chart'>Bar Chart</Link></li>
      <li><Link to='/pie-chart'>Pie Chart</Link></li>
      <li><Link to='/scatterplot-chart'>Scatterplot Chart</Link></li>
      <li><Link to='/legend'>Legend</Link></li>
    </ul>
  </nav>
)
