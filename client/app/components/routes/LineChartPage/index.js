import React from 'react'
import { LineChart } from 'react-easy-chart'
import Navigation from '../../navigation'

export default class extends React.Component {

  render () {
    return (
      <section>
        <header>
          <h1>Line Chart</h1>
        </header>
        <LineChart
          data={[]}
        />
        <Navigation />
      </section>
    )
  }

}
