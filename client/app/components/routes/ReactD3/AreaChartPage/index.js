import React from 'react'
import ChartPage from '../ChartPage'
import { AreaChart } from 'react-easy-chart'
import Navigation from '../../../navigation'

import areaChart from './areaChart'

const count = (areaChart.length - 1)

export default class extends ChartPage {
  state = {
    index: 0,
    count: count
  }

  render () {
    console.log('AreaChart')

    const {
      index,
      count
    } = this.state

    return (
      <section>
        <header>
          <h1>Area Chart ({index} to {count})</h1>
        </header>
        <AreaChart {...areaChart[index]} />
        <Navigation />
      </section>
    )
  }
}
