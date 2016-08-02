export default [

// Data, 1

  {
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ]
    ]
  },

// Data, 2

  {
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Height & Width

  {
    width: 50,
    height: 50,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Margin

  {
    margin: { top: 0, right: 0, bottom: 20, left: 20 },
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Axes

  {
    axes: true,
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Axis Labels

  {
    axes: true,
    margin: { top: 20, right: 20, bottom: 80, left: 80 },
    axisLabels: { x: 'My X Axis', y: 'My Y Axis' },
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Y Axis Orientation

  {
    axes: true,
    margin: { top: 10, right: 70, bottom: 70, left: 10 },
    axisLabels: { x: 'My X Axis', y: 'My Y Axis' },
    yAxisOrientRight: true,
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Interpolation

  {
    interpolate: 'cardinal',
    axes: true,
    margin: { top: 10, right: 10, bottom: 70, left: 70 },
    axisLabels: { x: 'My X Axis', y: 'My Y Axis' },
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// xType & yType, 1

  {
    xType: 'text',
    axes: true,
    interpolate: 'cardinal',
    width: 350,
    height: 250,
    data: [
      [
        { x: 'Mon', y: 20 },
        { x: 'Tue', y: 10 },
        { x: 'Wed', y: 33 },
        { x: 'Thu', y: 45 },
        { x: 'Fri', y: 15 }
      ], [
        { x: 'Mon', y: 10 },
        { x: 'Tue', y: 15 },
        { x: 'Wed', y: 13 },
        { x: 'Thu', y: 15 },
        { x: 'Fri', y: 10 }
      ]
    ]
  },

// xType & yType, 2

  {
    xType: 'time',
    axes: true,
    interpolate: 'cardinal',
    width: 750,
    height: 250,
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

// xType & yType, 3

  {
    yType: 'text',
    xType: 'text',
    axisLabels: { x: 'Day', y: 'How much did I eat' },
    axes: true,
    interpolate: 'cardinal',
    margin: { top: 10, right: 10, bottom: 70, left: 90 },
    width: 350,
    height: 250,
    yDomainRange: ['A Lot', 'Perfect', 'A Little'],
    data: [
      [
        { x: 'Mon', y: 'A Little' },
        { x: 'Tue', y: 'Perfect' },
        { x: 'Wed', y: 'A Lot' },
        { x: 'Thu', y: 'A Little' },
        { x: 'Fri', y: 'Perfect' }
      ]
    ]
  },

// xType & yType, 4

  {
    axisLabels: { x: 'Total Revenue', y: 'January' },
    margin: { top: 10, right: 10, bottom: 70, left: 90 },
    yType: 'time',
    interpolate: 'cardinal',
    axes: true,
    width: 500,
    height: 500,
    data: [
      [
        { x: 10, y: '1-Jan-15' },
        { x: 20, y: '10-Jan-15' },
        { x: 40, y: '21-Jan-15' },
        { x: 80, y: '31-Jan-15' }
      ], [
        { x: 0, y: '1-Jan-15' },
        { x: 15, y: '10-Jan-15' },
        { x: 20, y: '21-Jan-15' },
        { x: 25, y: '31-Jan-15' }
      ]
    ]
  },

// Grid

  {
    axisLabels: { x: 'Total Revenue', y: 'January' },
    margin: { top: 10, right: 10, bottom: 70, left: 70 },
    yType: 'time',
    interpolate: 'cardinal',
    axes: true,
    grid: true,
    width: 500,
    height: 500,
    data: [
      [
        { x: 10, y: '1-Jan-15' },
        { x: 20, y: '10-Jan-15' },
        { x: 40, y: '21-Jan-15' },
        { x: 80, y: '31-Jan-15' }
      ], [
        { x: 0, y: '1-Jan-15' },
        { x: 15, y: '10-Jan-15' },
        { x: 20, y: '21-Jan-15' },
        { x: 25, y: '31-Jan-15' }
      ]
    ]
  },

// Vertical Grid

  {
    xType: 'time',
    axes: true,
    grid: true,
    verticalGrid: true,
    interpolate: 'cardinal',
    width: 750,
    height: 250,
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

// Domain Range

  {
    axes: true,
    xDomainRange: [0, 100],
    yDomainRange: [0, 100],
    width: 500,
    height: 250,
    interpolate: 'cardinal',
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

// Tick Display

  {
    axisLabels: { x: 'Total Revenue', y: 'January' },
    margin: { top: 10, right: 10, bottom: 70, left: 70 },
    yType: 'time',
    axes: true,
    interpolate: 'cardinal',
    tickTimeDisplayFormat: '%a',
    width: 500,
    height: 500,
    data: [
      [
        { x: 10, y: '1-Jan-15' },
        { x: 20, y: '10-Jan-15' },
        { x: 40, y: '21-Jan-15' },
        { x: 80, y: '31-Jan-15' }
      ], [
        { x: 0, y: '1-Jan-15' },
        { x: 15, y: '10-Jan-15' },
        { x: 20, y: '21-Jan-15' },
        { x: 25, y: '31-Jan-15' }
      ]
    ]
  },

// Number of Ticks

  {
    axes: true,
    xTicks: 5,
    yTicks: 5,
    xDomainRange: [0, 100],
    yDomainRange: [0, 100],
    width: 500,
    height: 250,
    interpolate: 'cardinal',
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

// Line Colors

  {
    xType: 'time',
    axes: true,
    grid: true,
    verticalGrid: true,
    interpolate: 'cardinal',
    lineColors: ['pink', 'cyan'],
    width: 750,
    height: 250,
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

// Data Points

  {
    axes: true,
    grid: true,
    verticalGrid: true,
    dataPoints: true,
    xDomainRange: [0, 100],
    yDomainRange: [0, 100],
    width: 500,
    height: 250,
    interpolate: 'cardinal',
    yAxisOrientRight: false,
    axisLabels: { x: 'My X Axis', y: 'My Y Axis' },
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

];
