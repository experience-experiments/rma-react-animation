import React from 'react'
import { LineChart } from 'react-easy-chart'
import Navigation from '../../navigation'

export default class extends React.Component {

  render () {
    console.log('LineChart')
    return (
      <section>
        <header>
          <h1>Line Chart</h1>
        </header>
        <LineChart
          data={[
            [
              { x: 1, y: 20 },
              { x: 2, y: 10 },
              { x: 3, y: 25 }
            ]
          ]}
        />
        <Navigation />
      </section>
    )
  }

}
