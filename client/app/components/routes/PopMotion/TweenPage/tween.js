import React from 'react'
import { tween } from 'popmotion'

export default class extends React.Component {
  state = {}

  render () {
    console.log('Tween')
    const {
      over
    } = this.props
    /*
     * Nasty
     */
    if (this.tween) this.tween.stop()
    this.tween = tween({
      x: (over)
        ? 400
        : 0
    });
    this.tween.start()

    return (
      <p>Tween ({x})</p>
    )
  }
}
