import React from 'react'
import { Link } from 'react-router'
import Velocity from '../../../navigation/Velocity'

export default () => (
  <section>
    <header>
      <h1>Velocity</h1>
    </header>
    <nav>
      <h2><Link to='/'>Index</Link></h2>
      <Velocity />
    </nav>
  </section>
)
