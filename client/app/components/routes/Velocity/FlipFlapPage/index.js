import React from 'react'

import {
  VelocityComponent
} from 'velocity-react'

import animations from './flipFlap'

export default class extends React.Component {
  state = {}

  handleMouseEnter = () => this.setState({ over: true })
  handleMouseLeave = () => this.setState({ over: null })

  render () {
    console.log('FlipFlap')

    const {
      over
    } = this.state

    const animation =
      (over)
        ? animations.flip
        : animations.flap

    return (
      <section>
        <header>
          <h1>Flip Flap</h1>
        </header>
        <div
          className='flipFlap'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <VelocityComponent animation={animation}>
            <div className='animate'>
              <p>Flip Flap</p>
            </div>
          </VelocityComponent>
          <div className='content'>
            <p>Ta Da!</p>
          </div>
        </div>
      </section>
    )

  }

}
