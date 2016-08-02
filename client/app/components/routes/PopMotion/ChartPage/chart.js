export default [
  { // 0 '1'
    axes: true,
    hGrid: true,
    xType: 'time',
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    orient: 'left',
    margin: { top: 20, right: 20, bottom: 40, left: 40 },
    xPattern: '%b %d',
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

  { // 1 '2'
    axes: true,
    vGrid: true,
    xType: 'time',
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    orient: 'right',
    margin: { top: 20, right: 40, bottom: 40, left: 20 },
    xPattern: '%b %d',
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

  { // 2 '3'
    axes: true,
    grid: true,
    width: 500,
    height: 250,
    interpolate: 'cardinal',
    xLabel: 'Hanging X Axis',
    yLabel: 'Hanging Y Axis',
    orient: 'left',
    margin: { top: 20, right: 20, bottom: 80, left: 80 },
    data: [
      [
        { x: 10, y: 25 },
        { x: 20, y: 10 },
        { x: 30, y: 25 },
        { x: 40, y: 10 },
        { x: 50, y: 12 },
        { x: 60, y: 25 }
      ], [
        { x: 10, y: 40 },
        { x: 20, y: 30 },
        { x: 30, y: 25 },
        { x: 40, y: 60 },
        { x: 50, y: 22 },
        { x: 60, y: 9 }
      ]
    ]
  },

  { // 3 '4'
    axes: true,
    grid: true,
    width: 500,
    height: 250,
    interpolate: 'cardinal',
    xLabel: 'Hanging X Axis',
    yLabel: 'Hanging Y Axis',
    orient: 'right',
    margin: { top: 20, right: 80, bottom: 80, left: 20 },
    data: [
      [
        { x: 10, y: 25 },
        { x: 20, y: 10 },
        { x: 30, y: 25 },
        { x: 40, y: 10 },
        { x: 50, y: 12 },
        { x: 60, y: 25 }
      ], [
        { x: 10, y: 40 },
        { x: 20, y: 30 },
        { x: 30, y: 25 },
        { x: 40, y: 60 },
        { x: 50, y: 22 },
        { x: 60, y: 9 }
      ]
    ]
  }

]
