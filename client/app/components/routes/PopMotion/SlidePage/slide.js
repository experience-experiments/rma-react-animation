import React from 'react'
import { tween, easing } from 'popmotion'

export default class extends React.Component {
  state = {}

  handleFrame = ({ x }) => this.setState({ x })

  componentWillReceiveProps = (props) => {
    const { x } = this.state
    const {
      over
    } = props

    if (this.tween) this.tween.stop()
    this.tween = tween({
      values: {
        x: {
          from: (over)
            ? x > 0 ? x : 0
            : x < 400 ? x : 400,
          to: (over)
            ? 400
            : 0,
          ease: easing.easeIn
        }
      },
      onFrame: this.handleFrame
    });
    this.tween.start()
  }

  render () {
    const { x } = this.state

    return this.props.children({ x })
  }
}
