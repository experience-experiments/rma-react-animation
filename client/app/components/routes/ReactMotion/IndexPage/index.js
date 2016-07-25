import React from 'react'
import { Link } from 'react-router'
import ReactMotion from '../../../navigation/ReactMotion'

export default () => (
  <section>
    <header>
      <h1>React Motion</h1>
    </header>
    <nav>
      <h2><Link to='/'>Index</Link></h2>
      <ReactMotion />
    </nav>
  </section>
)
