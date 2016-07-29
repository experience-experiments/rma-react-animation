import React from 'react'

const STYLE = { 'dominant-baseline': 'ideographic', 'text-anchor': 'end' }

/*
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#innerTickSize
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#outerTickSize
 */

const SIZE = 6 // D3 default 6 (we don't programmatically expose)
const PADDING = 16 // D3 default 3 (ditto)
const FORMAT = (v) => v
const TICKS = 10

function createTickOrientL (grid, w, x, y, textContent) {

  const line = {
    x2: (grid)
      ? w
      : -SIZE, // -6
    y2: 0
  }

  const text = {
    x: -PADDING, // -16
    y: 0,
    style: { 'text-anchor': 'end' }
  }

  const opacity = 1

  const transform = `translate(${x}, ${y})`
  const style = { 'opacity': opacity }

  return (
    <g className='tick' transform={transform} style={style}>
      <line {...line} />
      <text dy='.32em' {...text}>{textContent}</text>
      <circle className='tick-circle' />
    </g>
  )
}

function createTickOrientR (grid, w, x, y, textContent) {

  const line = {
    x2: (grid)
      ? -w
      : SIZE, // 6
    y2: 0
  }

  const text = {
    x: PADDING, // 16
    y: 0,
    style: { 'text-anchor': 'start' }
  }

  const opacity = 1

  const transform = `translate(${x}, ${y})`
  const style = { 'opacity': opacity }

  return (
    <g className='tick' transform={transform} style={style}>
      <line {...line} />
      <text dy='.32em' {...text}>{textContent}</text>
      <circle className='tick-circle' />
    </g>
  )
}

export default class yAxis extends React.Component {
  createTransform () {
    const {
      orient,
      w
    } = this.props

    return (orient === 'right')
      ? `translate(${w}, 0)`
      : 'translate(0, 0)'
  }

  createTick (x, y, text) {
    const {
      orient,
      hGrid: grid,
      w
    } = this.props

    return (orient === 'right')
      ? createTickOrientR(grid, w, x, y, text)
      : createTickOrientL(grid, w, x, y, text)
  }

  createTicks () {
    console.log('createTicks()');

    const {
      m,
      w,
      h,
      size,
      padding,
      type,
      values,
      ticks,
      format,
      scale
    } = this.props

    return scale
      .ticks(ticks)
      .map((i) => {
        const x = 0
        const y = scale(i)
        const textContent = format(i)
        return this.createTick(x, y, textContent)
      })
  }

  createLabel () {
    console.log('createLabel()');

    const {
      label,
      m,
      orient
    } = this.props

    if (label) {
      const x = 0
      const y =
        (orient === 'right')
          ? 0 // m.right // - 20
          : -m.left
      const dx = '0em'
      const dy =
        (orient === 'right')
          ? '0em'
          : '1em'

      console.log('yAxis', dx, dy, (orient === 'right'), x, y);

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
  grid: React.PropTypes.bool,
  type: React.PropTypes.string
}

yAxis.defaultProps = {
  grid: false,
  type: 'text'
}
