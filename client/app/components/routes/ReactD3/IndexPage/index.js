import React from 'react'
import { Link } from 'react-router'
import ReactD3 from '../../../navigation/ReactD3'

export default () => (
  <section>
    <header>
      <h1>React D3</h1>
    </header>
    <nav>
      <h2><Link to='/'>Index</Link></h2>
      <ReactD3 />
    </nav>
  </section>
)
