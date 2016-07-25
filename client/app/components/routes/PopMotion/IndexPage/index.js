import React from 'react'
import { Link } from 'react-router'
import PopMotion from '../../../navigation/PopMotion'

export default () => (
  <section>
    <header>
      <h1>Pop Motion</h1>
    </header>
    <nav>
      <h2><Link to='/'>Index</Link></h2>
      <PopMotion />
    </nav>
  </section>
)
