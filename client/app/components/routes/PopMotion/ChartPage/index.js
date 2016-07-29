import React from 'react'
import Navigation from '../../../navigation'

import Chart from './chart'

/*
const data = [
  [
    { x: 10, y: 25 },
    { x: 20, y: 10 },
    { x: 30, y: 25 },
    { x: 40, y: 10 },
    { x: 50, y: 12 },
    { x: 60, y: 25 }
  ], [
    { x: 10, y: 40 },
    { x: 20, y: 30 },
    { x: 30, y: 25 },
    { x: 40, y: 60 },
    { x: 50, y: 22 },
    { x: 60, y: 9 }
  ]
]
*//*
const data = [
  [
    { x: 1, y: 20 },
    { x: 2, y: 10 },
    { x: 3, y: 25 }
  ]
]
*//*
const data = [
  [
    { x: '1-Jan-00', y: 25 },
    { x: '1-Jan-01', y: 10 },
    { x: '1-Jan-10', y: 25 },
    { x: '1-Jan-11', y: 10 },
    { x: '1-Jan-10', y: 12 },
    { x: '1-Jan-01', y: 25 }
  ], [
    { x: '1-Jan-00', y: 40 },
    { x: '1-Jan-01', y: 30 },
    { x: '1-Jan-10', y: 25 },
    { x: '1-Jan-11', y: 60 },
    { x: '1-Jan-10', y: 22 },
    { x: '1-Jan-01', y: 9 }
  ]
]
*//*
const data = [
  [
    { x: 10, y: 25 },
    { x: 20, y: 10 },
    { x: 30, y: 25 },
    { x: 40, y: 10 },
    { x: 50, y: 12 },
    { x: 60, y: 25 }
  ], [
    { x: 10, y: 40 },
    { x: 20, y: 30 },
    { x: 30, y: 25 },
    { x: 40, y: 60 },
    { x: 50, y: 22 },
    { x: 60, y: 9 }
  ]
]
*/

export default class extends React.Component {
  render () {
    console.log('Chart')

    return (
      <section>
        <header>
          <h1>Chart</h1>
        </header>
        <Chart
          /*
           *  Added by default in R-E-C
           */
          margin={{ top: 20, right: 20, bottom: 50, left: 50 }}

          /*
          axes
          grid
          xType='text'
          interpolate='cardinal'
          width={350}
          height={250}
          data={[
            [
              { x: 'Mon', y: 20 },
              { x: 'Tue', y: 10 },
              { x: 'Wed', y: 33 },
              { x: 'Thu', y: 45 },
              { x: 'Fri', y: 15 }
            ], [
              { x: 'Mon', y: 10 },
              { x: 'Tue', y: 15 },
              { x: 'Wed', y: 13 },
              { x: 'Thu', y: 15 },
              { x: 'Fri', y: 10 }
            ]
          ]}
          */
          axes
          grid
          xType='time'
          interpolate='cardinal'
          width={750}
          height={250}
          data={[
            [
              { x: '1-Jan-15', y: 20 },
              { x: '1-Feb-15', y: 10 },
              { x: '1-Mar-15', y: 33 },
              { x: '1-Apr-15', y: 45 },
              { x: '1-May-15', y: 15 }
            ], [
              { x: '1-Jan-15', y: 10 },
              { x: '1-Feb-15', y: 15 },
              { x: '1-Mar-15', y: 13 },
              { x: '1-Apr-15', y: 15 },
              { x: '1-May-15', y: 10 }
            ]
          ]}
          /*
          axes
          grid
          width={500}
          height={250}
          interpolate='cardinal'
          labels={{ x: 'Hanging X Axis', y: 'Hanging Y Axis' }}
          data={[
            [
              { x: 10, y: 25 },
              { x: 20, y: 10 },
              { x: 30, y: 25 },
              { x: 40, y: 10 },
              { x: 50, y: 12 },
              { x: 60, y: 25 }
            ], [
              { x: 10, y: 40 },
              { x: 20, y: 30 },
              { x: 30, y: 25 },
              { x: 40, y: 60 },
              { x: 50, y: 22 },
              { x: 60, y: 9 }
            ]
          ]}
          */
        />
        <Navigation />
      </section>
    )
  }
}
