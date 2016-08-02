import React from 'react'
import ChartPage from '../../ChartPage'
import { PieChartStatic as PieChart } from 'react-easy-chart'
import Navigation from '../../../../navigation'

import pieChart from './pieChart'

const count = (pieChart.length - 1)

export default class extends ChartPage {
  state = {
    index: 0,
    count
  }

  render () {
    console.log('PieChart (Static)')

    const {
      index,
      count
    } = this.state

    return (
      <section>
        <header>
          <h1>Pie Chart ({index} to {count})</h1>
        </header>
        <PieChart {...pieChart[index]} />
        <Navigation />
      </section>
    )
  }
}
