import React from 'react'
import { BarChart } from 'react-easy-chart'
import Navigation from '../../navigation'

export default class extends React.Component {

  render () {
    return (
      <section>
        <header>
          <h1>Bar Chart</h1>
        </header>
        <BarChart
          data={[]}
        />
        <Navigation />
      </section>
    )
  }

}
