import React from 'react'
import ChartPage from '../../ChartPage'
import { ScatterplotChartHybrid as ScatterplotChart } from 'react-easy-chart'
import Navigation from '../../../../navigation'
import scatterplotChart from './scatterplotChart'

const count = (scatterplotChart.length - 1)

export default class extends ChartPage {
  state = {
    index: 0,
    count: count
  }

  render () {
    console.log('ScatterplotChart (Hybrid)')

    const {
      index,
      count
    } = this.state

    return (
      <section>
        <header>
          <h1>Scatter Plot Chart ({index} to {count})</h1>
        </header>
        <ScatterplotChart {...scatterplotChart[index]} />
        <Navigation />
      </section>
    )
  }

}
