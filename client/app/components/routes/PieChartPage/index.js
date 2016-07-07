import React from 'react'
import { PieChart } from 'react-easy-chart'
import Navigation from '../../navigation'

export default class extends React.Component {

  render () {
    return (
      <section>
        <header>
          <h1>Pie Chart</h1>
        </header>
        <PieChart
          data={[]}
        />
        <Navigation />
      </section>
    )
  }

}
