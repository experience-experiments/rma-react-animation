import React from 'react'
import { tween, easing } from 'popmotion'
import AnimationFrame from 'animation-frame'

const STYLE = { 'dominantBaseline': 'ideographic', 'textAnchor': 'end' }

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

export default class yAxis extends React.Component {
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
      const onFrame = ({ y }) => {
        /*
         *  Update this 'y' coordinate
         */
        axisData.splice(i, 1, { ...t, y })
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
          y: {
            from: 0,
            to: t.y,
            ease,
            duration
          }
        },
        onFrame,
        onComplete
      }).start())
    })

    this.tweens = tweens;
  }

  createTransform () {
    const {
      orient,
      w
    } = this.props

    return (orient === 'right')
      ? `translate(${w}, 0)`
      : 'translate(0, 0)'
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
          <text dy='.32em' {...text}>{textContent}</text>
          <circle className='tick-circle' />
        </g>
      )
    })
  }

  createLabel () {
    const {
      label,
      m,
      orient
    } = this.props

    if (label) {
      const x = 0
      const y =
        (orient === 'right')
          ? +m.r - m.l // margin.right (+m.r is the same as m.r but it lines up with -m.l :))
          : -m.l + m.r // -margin.left + margin.right (-50 + 10 = -40)
      const dx = '0em'
      const dy =
        (orient === 'right')
          ? '-.175em' // keep character descenders inside frame
          : '1em' // keep line inside frame

      return (
        <text
          className='label'
          transform='rotate(-90)'
          x={x} // no logic req (always zero)
          y={y} // reqs logic
          dx={dx}
          dy={dy}
          style={STYLE}>{label}</text>
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
      orient,
      hGrid: grid
    } = this.props

    let line
    let text

    if (orient === 'right') {

      line = {
        x2: (grid)
          ? -w
          : size, // 6
        y2: 0
      }

      text = {
        x: Math.max(size, 0) + padding, // 16
        y: 0,
        style: { 'textAnchor': 'start' }
      }

    } else {

      line = {
        x2: (grid)
          ? w
          : -size, // -6
        y2: 0
      }

      text = {
        x: -(Math.max(size, 0) + padding), // -16
        y: 0,
        style: { 'textAnchor': 'end' }
      }

    }

    this.setState({ axisData: [] })

    const axisData = scale
      .ticks(ticks)
      .map((i) => {
        const x = 0
        const y = scale(i)
        const textContent = format(i)
        return { x, y, textContent, line, text }
      })

    this.animate(axisData)
  }

  render () {
    const transform = this.createTransform()

    return (
      <g key='yAxis' className='y axis' transform={transform}>
        {this.createTicks()}
        {this.createLabel()}
      </g>
    )
  }
}

yAxis.propTypes = {
  hGrid: React.PropTypes.bool,
  size: React.PropTypes.number,
  padding: React.PropTypes.number,
  ticks: React.PropTypes.number,
  scale: React.PropTypes.func,
  format: React.PropTypes.func
}

yAxis.defaultProps = {
  hGrid: false,
  size: SIZE,
  padding: PADDING,
  ticks: TICKS,
  scale: SCALE,
  format: FORMAT
}
