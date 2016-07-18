import React from 'react';
import { createElement } from 'react-faux-dom';
import {
  event as lastEvent,
  select,
  svg,
  time
} from 'd3';
import {
  getRandomId,
  reduce,
  calcMargin,
  getValueFunction,
  setLineDomainAndRange,
  defaultStyle,
  getAxisStyles,
  createCircularTicks,
  rmaColorPalet as defaultColors
} from '../shared';
import { Style } from 'radium';
import merge from 'lodash.merge';
import { timeParse as parse } from 'd3-time-format';

const dateParser = {};

export default class LineChart extends React.Component {
  static get propTypes() {
    return {
      data: React.PropTypes.array.isRequired,
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      xType: React.PropTypes.string,
      yType: React.PropTypes.string,
      datePattern: React.PropTypes.string,
      interpolate: React.PropTypes.string,
      style: React.PropTypes.object,
      margin: React.PropTypes.object,
      axes: React.PropTypes.bool,
      grid: React.PropTypes.bool,
      verticalGrid: React.PropTypes.bool,
      xDomainRange: React.PropTypes.array,
      yDomainRange: React.PropTypes.array,
      tickTimeDisplayFormat: React.PropTypes.string,
      yTicks: React.PropTypes.number,
      xTicks: React.PropTypes.number,
      dataPoints: React.PropTypes.bool,
      lineColors: React.PropTypes.array,
      axisLabels: React.PropTypes.shape({
        x: React.PropTypes.string,
        y: React.PropTypes.string
      }),
      yAxisOrientRight: React.PropTypes.bool,
      mouseOverHandler: React.PropTypes.func,
      mouseOutHandler: React.PropTypes.func,
      mouseMoveHandler: React.PropTypes.func,
      clickHandler: React.PropTypes.func
    };
  }

  static get defaultProps() {
    return {
      width: 200,
      height: 150,
      datePattern: '%d-%b-%y',
      interpolate: 'linear',
      axes: false,
      xType: 'linear',
      yType: 'linear',
      lineColors: [],
      axisLabels: {
        x: '',
        y: ''
      },
      mouseOverHandler: () => {},
      mouseOutHandler: () => {},
      mouseMoveHandler: () => {},
      clickHandler: () => {}
    };
  }

  constructor(props) {
    super(props);
    this.uid = getRandomId();
  }

  componentDidMount() {
    const lineChart = this.refs.lineChart;
    createCircularTicks(lineChart);
  }

  componentDidUpdate() {
    const lineChart = this.refs.lineChart;
    createCircularTicks(lineChart);
  }

  createSvgNode({ m, w, h }) {
    const node = createElement('svg');
    select(node)
      .attr('width', w + m.left + m.right)
      .attr('height', h + m.top + m.bottom);
    return node;
  }

  createSvgRoot({ node, m }) {
    return select(node)
      .append('g')
      .attr('transform', `translate(${m.left}, ${m.top})`);
  }

  createXAxis({ root, m, w, h, x }) {
    const {
      xType,
      axisLabels,
      xTicks,
      grid,
      verticalGrid,
      tickTimeDisplayFormat,
      yAxisOrientRight
    } = this.props;

    const axis = svg.axis()
      .scale(x)
      .orient('bottom');

    if (xType === 'time' && tickTimeDisplayFormat) {
      axis
        .tickFormat(time.format(tickTimeDisplayFormat));
    }

    if (grid && verticalGrid) {
      axis
        .tickSize(-h, 6)
        .tickPadding(15);
    } else {
      axis
        .tickSize(0)
        .tickPadding(15);
    }

    if (xTicks) {
      axis.ticks(xTicks);
    }

    const group = root.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${h})`);

    group
      .call(axis);

    group
      .append('text')
      .attr('class', 'label')
      .attr('y', m.bottom - 10)
      .attr('x', yAxisOrientRight ? 0 : w)
      .style('text-anchor', yAxisOrientRight ? 'start' : 'end')
      .text(axisLabels.x);
  }

  createYAxis({ root, m, w, y }) {
    const {
      yType,
      axisLabels,
      yTicks,
      grid,
      tickTimeDisplayFormat,
      yAxisOrientRight
    } = this.props;

    const axis = svg.axis()
      .scale(y)
      .orient(yAxisOrientRight ? 'right' : 'left');

    if (yType === 'time' && tickTimeDisplayFormat) {
      axis
        .tickFormat(time.format(tickTimeDisplayFormat));
    }
    if (grid) {
      axis
        .tickSize(-w, 6)
        .tickPadding(12);
    } else {
      axis
        .tickPadding(10);
    }

    if (yTicks) {
      axis.ticks(yTicks);
    }

    const group = root.append('g')
      .attr('class', 'y axis')
      .attr('transform',
        (yAxisOrientRight)
          ? `translate(${w}, 0)`
          : 'translate(0, 0)');

    group
      .call(axis);

    group
      .append('text')
      .attr('class', 'label')
      .attr('transform', 'rotate(-90)')
      .attr('x', 0)
      .attr('y',
        (yAxisOrientRight)
          ? -20 + m.right
          : 0 - m.left)
      .attr('dy', '.9em')
      .style('text-anchor', 'end')
      .text(axisLabels.y);
  }

  createLinePathChart({ root, x, y, xValue, yValue, colors }) {
    const {
      data,
      interpolate
    } = this.props;

    const linePath = svg.line()
      .interpolate(interpolate)
      .x((d) => x(xValue(d)))
      .y((d) => y(yValue(d)));

    const group = root.append('g')
      .attr('class', 'lineChart');

    data.forEach((lineItem, i) => {
      const color = colors[i];
      group.append('path')
        .datum(lineItem)
        .attr('class', 'line')
        .attr('style', `stroke: ${color}`)
        .attr('d', linePath);
    });
  }

  createPoints({ root, x, y, colors }) {
    const {
      data,
      xType,
      yType,
      mouseOverHandler,
      mouseOutHandler,
      mouseMoveHandler,
      clickHandler
    } = this.props;

    /*
     * We don't really need to do this, but it
     * avoids obscure "this" below
     */
    const calculateDate = (v) => this.parseDate(v);

    const group = root.append('g')
      .attr('class', 'dataPoints');

    data.forEach((lineItem, i) => {
      const color = colors[i];
      lineItem.forEach((dataPoint) => {
        /*
         * Creating the calculation functions
         */
        const calculateCX = () => (
          (xType === 'time')
            ? x(calculateDate(dataPoint.x))
            : x(dataPoint.x));
        const calculateCY = () => (
          (yType === 'time')
            ? y(calculateDate(dataPoint.y))
            : y(dataPoint.y));

        const mouseover = () => mouseOverHandler(dataPoint, lastEvent);
        const mouseout = () => mouseOutHandler(dataPoint, lastEvent);
        const mousemove = () => mouseMoveHandler(dataPoint, lastEvent);
        const click = () => clickHandler(dataPoint, lastEvent);

        /*
         * Applying the calculation functions
         */
        group.append('circle')
          .attr('class', 'data-point')
          .style('strokeWidth', '2px')
          .style('stroke', color)
          .style('fill', 'white')
          .attr('cx', calculateCX)
          .attr('cy', calculateCY)
          .on('mouseover', mouseover)
          .on('mouseout', mouseout)
          .on('mousemove', mousemove)
          .on('click', click);
      });
    });
  }

  createStyle() {
    const {
      style,
      grid,
      verticalGrid,
      yAxisOrientRight
    } = this.props;

    const uid = this.uid;
    const scope = `.line-chart-${uid}`;
    const axisStyles = getAxisStyles(grid, verticalGrid, yAxisOrientRight);
    const rules = merge({}, defaultStyle, style, axisStyles);

    return (
      <Style
        scopeSelector={scope}
        rules={rules}
      />
    );
  }

  parseDate(v) {
    const {
      datePattern
    } = this.props;

    const datePatternParser = (
      dateParser[datePattern] || (
      dateParser[datePattern] = parse(datePattern)));

    return datePatternParser(v);
  }

  calculateChartParameters() {
    const {
      data,
      axes,
      xType,
      yType,
      xDomainRange,
      yDomainRange,
      margin,
      width,
      height,
      lineColors,
      yAxisOrientRight
    } = this.props;

    /*
     * We could "bind" but this is neater
     */
    const parseDate = (v) => this.parseDate(v);

    const m = calcMargin(axes, margin, yAxisOrientRight);
    const w = reduce(width, m.left, m.right);
    const h = reduce(height, m.top, m.bottom);

    const x = setLineDomainAndRange('x', xDomainRange, data, xType, w, parseDate);
    const y = setLineDomainAndRange('y', yDomainRange, data, yType, h, parseDate);

    const xValue = getValueFunction('x', xType, parseDate);
    const yValue = getValueFunction('y', yType, parseDate);

    const colors = lineColors.concat(defaultColors);

    const node = this.createSvgNode({ m, w, h });
    const root = this.createSvgRoot({ node, m });

    return {
      m,
      w,
      h,
      x,
      y,
      xValue,
      yValue,
      colors,
      node,
      root
    };
  }

  render() {
    const {
      axes,
      dataPoints
    } = this.props;

    const p = this.calculateChartParameters();

    if (axes) {
      this.createXAxis(p);

      this.createYAxis(p);
    }

    this.createLinePathChart(p);

    if (dataPoints) {
      this.createPoints(p);
    }

    const uid = this.uid;
    const className = `line-chart-${uid}`;
    const {
      node
    } = p;

    return (
      <div ref="lineChart" className={className}>
        {this.createStyle()}
        {node.toReact()}
      </div>
    );
  }
}
