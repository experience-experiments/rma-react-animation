import React from 'react'

import { svg, time } from 'd3'
import { Style } from 'radium'
import merge from 'lodash.merge'

import Path from './path'
import XAxis from './xAxis'
import YAxis from './yAxis'

import {
  createUniqueID,
  reduce,
  defaultStyles,
  getDefaultAxisStyles,
  defaultColors,
  createDomainX,
  createDomainY,
  createScaleX,
  createScaleY,
  createParserX,
  createParserY,
  createFormatX,
  createFormatY
} from './common'

export default class Chart extends React.Component {
  constructor (props) {
    super(props).uid = createUniqueID()
  }

  createStyle () {
    const {
      style,
      grid,
      hGrid,
      vGrid,
      orient
    } = this.props;

    const uid = this.uid;
    const scope = `.chart-${uid}`;
    const defaultAxisStyles = getDefaultAxisStyles(vGrid || grid, hGrid || grid, orient);
    const rules = merge({}, defaultStyles, style, defaultAxisStyles);

    return (
      <Style
        scopeSelector={scope}
        rules={rules}
      />
    );
  }

  createXAxis () {
    const {
      axes
    } = this.props

    if (axes) {
      const {
        data,
        type,
        xType,
        grid,
        vGrid,
        margin,
        width,
        height,
        orient,
        xLabel,
        xDomain,
        pattern,
        xPattern
      } = this.props

      const {
        top: t,
        right: r,
        bottom: b,
        left: l
      } = margin

      const m = {
        t,
        r,
        b,
        l
      }

      const w = [
        width,
        l,  // margin.left
        r   // margin.right
      ].reduce(reduce)

      const h = [
        height,
        t,  // margin.top
        b   // margin.bottom
      ].reduce(reduce)

      const TYPE = xType || type
      const DOMAIN = xDomain || createDomainX(TYPE, data, pattern)
      const PATTERN = xPattern || pattern

      const scale = createScaleX(TYPE, DOMAIN, w)
      const format = createFormatX(TYPE, PATTERN)

      const axis = {
        data,
        vGrid: vGrid || grid,
        m,
        w,
        h,
        orient,
        scale,
        format,
        label: xLabel
      }

      return (
        <XAxis {...axis} />
      )
    }
  }

  createYAxis () {
    const {
      axes
    } = this.props

    if (axes) {
      const {
        data,
        type,
        yType,
        grid,
        hGrid,
        margin,
        width,
        height,
        orient,
        yLabel,
        yDomain,
        pattern,
        yPattern
      } = this.props

      const {
        top: t,
        right: r,
        bottom: b,
        left: l
      } = margin

      const m = {
        t,
        r,
        b,
        l
      }

      const w = [
        width,
        l,  // margin.left
        r   // margin.right
      ].reduce(reduce)

      const h = [
        height,
        t,  // margin.top
        b   // margin.bottom
      ].reduce(reduce)

      const TYPE = yType || type
      const DOMAIN = yDomain || createDomainY(TYPE, data, pattern)
      const PATTERN = yPattern || pattern

      const scale = createScaleY(TYPE, DOMAIN, h)
      const format = createFormatY(TYPE, PATTERN)

      const axis = {
        data,
        hGrid: hGrid || grid,
        m,
        w,
        h,
        orient,
        scale,
        format,
        label: yLabel
      }

      return (
        <YAxis {...axis} />
      )
    }

  }

  createChartPathsGroup () {
    const {
      data,
      axes,
      type,
      xType,
      yType,
      grid,
      hGrid,
      vGrid,
      margin,
      width,
      height,
      orient,
      colors,
      strokeWidth,
      interpolate,
      xDomain,
      yDomain,
      pattern,
      xPattern,
      yPattern
    } = this.props

    const {
      top: t,
      right: r,
      bottom: b,
      left: l
    } = margin

    const m = {
      t,
      r,
      b,
      l
    }

    const w = [
      width,
      l,  // margin.left
      r   // margin.right
    ].reduce(reduce)

    const h = [
      height,
      t,  // margin.top
      b   // margin.bottom
    ].reduce(reduce)

    const strokes = colors.concat(defaultColors)

    const types = {
      x: xType || type,
      y: yType || type
    }

    /*
     * <Path />
     */
    const domains = {
      x: xDomain || createDomainX(types.x, data, pattern),
      y: yDomain || createDomainY(types.y, data, pattern)
    }

    /*
     * <Path />
     */
    const scales = {
      x: createScaleX(types.x, domains.x, w),
      y: createScaleY(types.y, domains.y, h)
    }

    /*
     * <Path />
     */
    const parsers = {
      x: createParserX(types.x, pattern),
      y: createParserY(types.y, pattern)
    }

    /*
     * <Path />
     */
    const formats = {
      x: createFormatX(types.x, pattern),
      y: createFormatY(types.y, pattern)
    }

    /*
     * <Path />
     */
    const linePath = svg.line()
      .interpolate(interpolate)
      .x((d) => scales.x(parsers.x(d)))
      .y((d) => scales.y(parsers.y(d)))

    return (
      <g key='chartPathsGroup' className='chartPathsGroup'>
        {data.map((lineData, i) => (
          <Path key={i} stroke={strokes[i]} strokeWidth={strokeWidth} parsers={parsers} formats={formats} linePath={linePath} lineData={lineData} fill='none' />
        ))}
      </g>
    )
  }

  render () {
    console.log('Chart')

    const {
      margin,
      width,
      height
    } = this.props

    const {
      top: t,
      left: l
    } = margin

    const uid = this.uid
    const className = `chart-${uid}`
    const transform = `translate(${l}, ${t})`

    return (
      <div className={className}>
        {this.createStyle()}
        <svg
          className='chart'
          width={width}
          height={height}>
            <g key='chartGroup' className='chartGroup' transform={transform}>
              {this.createXAxis()}
              {this.createYAxis()}
              {this.createChartPathsGroup()}
            </g>
        </svg>
      </div>
    )
  }
}

Chart.propTypes = {
  data: React.PropTypes.array.isRequired,
  axes: React.PropTypes.bool,
  grid: React.PropTypes.bool,
  hGrid: React.PropTypes.bool,
  vGrid: React.PropTypes.bool,
  interpolate: React.PropTypes.string,
  margin: React.PropTypes.shape({
    top: React.PropTypes.number,
    right: React.PropTypes.number,
    bottom: React.PropTypes.number,
    left: React.PropTypes.number
  }),
  orient: React.PropTypes.string,
  xLabel: React.PropTypes.string,
  yLabel: React.PropTypes.string,
  colors: React.PropTypes.array,
  strokeWidth: React.PropTypes.number,
  stroke: React.PropTypes.object,
  xDomain: React.PropTypes.array,
  yDomain: React.PropTypes.array,
  pattern: React.PropTypes.string,
  xPattern: React.PropTypes.string,
  yPattern: React.PropTypes.string
}

Chart.defaultProps = {
  axes: false,
  grid: false,
  hGrid: false,
  vGrid: false,
  type: 'linear',
  xType: 'linear',
  yType: 'linear',
  interpolate: 'linear',
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  orient: 'left',
  colors: [],
  strokeWidth: 2,
  style: {}
}
