import React from 'react'
import { tween, easing } from 'popmotion'
import AnimationFrame from 'animation-frame'

const STYLE_ORIENT_R = { 'dominantBaseline': 'ideographic', 'textAnchor': 'start' }
const STYLE_ORIENT_L = { 'dominantBaseline': 'ideographic', 'textAnchor': 'end' }

/*
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#innerTickSize
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#outerTickSize
 */

const SIZE = 6 // D3 default 6 (we don't programmatically expose)
const PADDING = 10 // D3 default 3 (ditto)
const TICKS = 10
const SCALE = (v) => v
const FORMAT = (v) => v

const animationFrame = new AnimationFrame()

export default class xAxis extends React.Component {
  state = { axisData: [] }

  animate = (axisData, ease = easing.easeIn, duration = 750) => {
    /*
     * How many coordinates?
     */
    const n = (axisData.length - 1)
    const tweens = []

    /*
     *  Since 'animate' recurses we shouldn't encounter active tweens unless
     *  we enter the method from the top level because of a user action, so
     *  just in case ...
     */
    if (this.tweens) {
      let tween
      while (tween = this.tweens.shift()) tween.stop()
    }

    /*
     *  Each coordinate is tweened seperately but they are put into the state
     *  as a batch: if we have 10 coordinates on the axis then each one is updated
     *  inside 'onFrame' but we wait until the tenth to call 'setState' and render
     */
    axisData.forEach((t, i) => {
      const onFrame = ({ x }) => {
        /*
         *  Update this 'x' coordinate
         */
        axisData.splice(i, 1, { ...t, x })
        if (i === n) {
          /*
           * Call 'setState' and render
           */
          animationFrame.request(() => {
            this.setState({ axisData: axisData })
          })
        }
      }

      const onComplete = () => {
        if (i === n) {
          /*
           *  All frames have been animated
           */
          delete this.tweens
        }
      }

      tweens.push(tween({
        values: {
          x: {
            from: 0,
            to: t.x,
            ease,
            duration
          }
        },
        onFrame,
        onComplete
      }).start())
    })

    this.tweens = tweens
  }

  createTransform () {
    const {
      h
    } = this.props

    return `translate(0, ${h})`
  }

  createTicks () {
    const {
      axisData
    } = this.state

    return axisData.map(({ x, y, textContent, line, text }, key) => {
      const transform = `translate(${x}, ${y})`
      const style = { 'opacity': 1 }
      return (
        <g className='tick' transform={transform} style={style} key={key}>
          <line {...line} />
          <text dy='.71em' {...text}>{textContent}</text>
          <circle className='tick-circle' />
        </g>
      )
    })
  }

  createLabel () {
    const {
      label,
      m,
      w,
      h,
      orient,
      size,
      padding
    } = this.props

    if (label) {
      const x =
        (orient === 'right')
          ? 0
          : w
      const y = (m.b - m.t) // margin.bottom - margin.top
      const dx =
        (orient === 'right')
          ? '0em'
          : '-.175em' // keep characters inside frame
      const dy = '-.175em' // keep character descenders inside frame
      const style =
        (orient === 'right')
          ? STYLE_ORIENT_R
          : STYLE_ORIENT_L

      return (
        <text
          className='label'
          x={x} // reqs logic
          y={y} // reqs logic
          dx={dx}
          dy={dy}
          style={style}>{label}</text>
      )
    }
  }

  componentDidMount () {
    const {
      m,
      w,
      h,
      size,
      padding,
      values,
      ticks,
      format,
      scale,
      vGrid: grid
    } = this.props

    const line = {
      x2: 0,
      y2: (grid)
        ? -h
        : 0
    }

    const text = {
      x: 0,
      y: Math.max(size, 0) + padding,
      style: { 'textAnchor': 'middle' }
    }

    this.setState({ axisData: [] })

    const axisData = scale
      .ticks(ticks)
      .map((i) => {
        const x = scale(i)
        const y = 0
        const textContent = format(i)
        return { x, y, textContent, line, text }
      });

    this.animate(axisData)
  }

  render () {
    const transform = this.createTransform()

    return (
      <g key='xAxis' className='x axis' transform={transform}>
        {this.createTicks()}
        {this.createLabel()}
      </g>
    )
  }
}

xAxis.propTypes = {
  vGrid: React.PropTypes.bool,
  size: React.PropTypes.number,
  padding: React.PropTypes.number,
  ticks: React.PropTypes.number,
  scale: React.PropTypes.func,
  format: React.PropTypes.func
}

xAxis.defaultProps = {
  vGrid: false,
  size: SIZE,
  padding: PADDING,
  ticks: TICKS,
  scale: SCALE,
  format: FORMAT
}
