import React from 'react'
import Navigation from '../../../navigation'

import Slide from './slide'

export default class extends React.Component {
  state = {}

  handleMouseEnter = () => this.setState({ over: true })
  handleMouseLeave = () => this.setState({ over: null })

  render () {
    console.log('Slide')

    const { over } = this.state

    return (
      <section>
        <header>
          <h1>Slide</h1>
        </header>
        <div
          className='slide'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
            <Slide over={over}>
              {({ x }) => { // console.log('x', x);
                return (
                  <div className='animate' style={{ transform: `translate3d(${x}px, 0, 0)` }}>
                    <p>Nope</p>
                  </div>
                )
              }}
            </Slide>
            <div className='content'>
              <p>Yep</p>
            </div>
        </div>
      </section>
    )
  }
}
