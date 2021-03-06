import React from 'react'
import ChartPage from '../ChartPage'
import { Legend } from 'react-easy-chart'
import Navigation from '../../../navigation'

import legend from './legend'

const count = (legend.length - 1)

export default class extends ChartPage {
  state = {
    index: 0,
    count
  }

  render () {
    console.log('Legend')

    const {
      index,
      count
    } = this.state

    return (
      <section>
        <header>
          <h1>Legend ({index} to {count})</h1>
        </header>
        <Legend {...legend[index]} />
        <Navigation />
      </section>
    )
  }
}
