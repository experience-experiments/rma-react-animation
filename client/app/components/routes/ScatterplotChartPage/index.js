import React from 'react'
import { ScatterplotChart } from 'react-easy-chart'
import Navigation from '../../navigation'

export default class extends React.Component {

  render () {
    console.log('ScatterplotChart')
    return (
      <section>
        <header>
          <h1>Scatter Plot Chart</h1>
        </header>
        <ScatterplotChart
          data={[{
            type: 'One',
            x: 1,
            y: 5,
            z: 500
          }, {
            type: 'One',
            x: 3,
            y: 1,
            z: 100
          }, {
            type: 'One',
            x: 0,
            y: 6,
            z: 600
          }]}
        />
        <Navigation />
      </section>
    )
  }

}
