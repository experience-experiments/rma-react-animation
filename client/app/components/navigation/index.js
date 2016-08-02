import React from 'react'
import { Link } from 'react-router'

import ReactD3 from './ReactD3'
import ReactMotion from './ReactMotion'
import Velocity from './Velocity'
import PopMotion from './PopMotion'

export default () => (
  <nav>
    <h2><Link to='/'>Index</Link></h2>
    <ul>
      <li>
        <h3><Link to='/react-d3'>React D3</Link></h3>
        <ReactD3 />
      </li>
      <li>
        <h3><Link to='/react-motion'>React Motion</Link></h3>
        <ReactMotion />
      </li>
      <li>
        <h3><Link to='/velocity'>Velocity</Link></h3>
        <Velocity />
      </li>
      <li>
        <h3><Link to='/pop-motion'>Pop Motion</Link></h3>
        <PopMotion />
      </li>
    </ul>
  </nav>
)
