import React from 'react'
import { tween, easing } from 'popmotion'
import AnimationFrame from 'animation-frame'
import {
  createParserX,
  createParserY,
  createFormatX,
  createFormatY
} from './common'

const animationFrame = new AnimationFrame()

function isDate (v) {
  return (v instanceof Date)
}

function toNumber (d) {
  return d.valueOf()
}

function toDate (n) {
  return new Date(n)
}

export default class Path extends React.Component {
  state = { lineData: [] }

  handleFrame = ({ i, x, y }) => {
    const {
      lineData
    } = this.state

    lineData.splice(i, 1, { x, y })

    animationFrame.request(() => {
      this.setState({ lineData: lineData })
    })
  }

  animate = (lineData, parsers, formats, ease = easing.easeIn, duration = 750, i = 0) => {
    /*
     * How many coordinates?
     */
    const l = lineData.length
    /*
     * Duration per coordinate
     */
    const d = (duration / l)
    /*
     * This index is i ('from')
     * Next index is n ('to')
     */
    const n = (i + 1)
    /*
     * 'from' coordinate (every line is a coordinate 'from' and a coordinate 'to')
     */
    const f = lineData[i]
    /*
     * 'to' coordinate
     */
    const t = lineData[n]

    /*
     * Parse the 'from' x and y values. If it's a date, it'll be converted to a Date instance
     */
    const F = {
      x: parsers.x(f),
      y: parsers.y(f)
    }

    /*
     * Parse the 'to' value. Ditto
     */
    const T = {
      x: parsers.x(t),
      y: parsers.y(t)
    }

    /*
     *  Ensure that we have the 'from' frame at i
     */
    this.handleFrame({ i, x: f.x, y: f.y })

    const onFrame = ({ x, y }) => {
      /*
       *  Animate toward the 'to' frame at n
       */
      this.handleFrame({
        i: n,
        x: isDate(F.x) // F.x is the parsed Date (if it's a date at all)
          ? formats.x(toDate(x)) // x is a number from the tween. We're converting it back into a date
          : x,
        y: isDate(F.y) // F.y is the parsed Date
          ? formats.y(toDate(y)) // y is a number. Ditto
          : y
        })
    }

    const onComplete = () => {
      /*
       *  All frames have been animated
       */
      delete this.tween
      if (l > (n + 1)) {
        /*
         *  But we have more coordinates, so recurse
         */
        this.animate(lineData, parsers, formats, ease, duration, n)
      }
    }

    /*
     *  Since 'animate' recurses we shouldn't encounter an active tween unless
     *  we enter the method from the top level because of a user action, so
     *  just in case ...
     */
    if (this.tween) this.tween.stop()

    /*
     *  Create the tween and start it
     */
    return (
      this.tween = tween({
        values: {
          x: {
            from: isDate(F.x)
              ? toNumber(F.x)
              : F.x,
            to: isDate(T.x)
              ? toNumber(T.x)
              : T.x,
            ease,
            duration: d
          },
          y: {
            from: isDate(F.y)
              ? toNumber(F.y)
              : F.y,
            to: isDate(T.y)
              ? toNumber(T.y)
              : T.y,
            ease,
            duration: d
          }
        },
        onFrame,
        onComplete
      })
    ).start()
  }

  componentDidMount () {
    const {
      lineData,
      parsers,
      formats
    } = this.props

    this.animate(lineData, parsers, formats)
  }

  componentWillReceiveProps = (props) => {
    const {
      lineData,
      parsers,
      formats
    } = props

    animationFrame.request(() => {
      this.setState({ lineData: [] })
    })

    this.animate(lineData, parsers, formats)
  }

  render () {
    const {
      linePath,
      stroke,
      strokeWidth,
      fill
    } = this.props

    const {
      lineData
    } = this.state

    const d = linePath(lineData)
    return (
      <path d={d} stroke={stroke} strokeWidth={strokeWidth} fill={fill} className='line' />
    )

  }
}
