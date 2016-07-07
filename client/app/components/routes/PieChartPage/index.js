import React from 'react'
import { PieChart } from 'react-easy-chart'
import Navigation from '../../navigation'

export default class extends React.Component {

  render () {
    console.log('PieChart')
    return (
      <section>
        <header>
          <h1>Pie Chart</h1>
        </header>
        <PieChart
          data={[
            { key: 'A', value: 100 },
            { key: 'B', value: 200 },
            { key: 'C', value: 50 }
          ]}
        />
        <Navigation />
      </section>
    )
  }

}
