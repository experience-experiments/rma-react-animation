const data = [
  [
    { x: '1-Jan-15 00:00', y: 51.424959940189716 },
    { x: '1-Jan-15 01:00', y: 64.24768529349367 },
    { x: '1-Jan-15 02:00', y: 68.81371361655415 },
    { x: '1-Jan-15 03:00', y: 41.1871987634501 },
    { x: '1-Jan-15 04:00', y: 81.83249003617759 },
    { x: '1-Jan-15 05:00', y: 99.32749999499475 },
    { x: '1-Jan-15 06:00', y: 84.80095038003846 },
    { x: '1-Jan-15 07:00', y: 14.63085930358714 },
    { x: '1-Jan-15 08:00', y: 8.00063350908411 },
    { x: '1-Jan-15 09:00', y: 46.80411383763283 },
    { x: '1-Jan-15 10:00', y: 43.87087720378631 },
    { x: '1-Jan-15 11:00', y: 83.3067670664277 }
  ], [
    { x: '1-Jan-15 00:00', y: 55.83349076021522 },
    { x: '1-Jan-15 01:00', y: 70.11998773116046 },
    { x: '1-Jan-15 02:00', y: 20.828822793086708 },
    { x: '1-Jan-15 03:00', y: 28.074718630284412 },
    { x: '1-Jan-15 04:00', y: 2.8353447495706563 },
    { x: '1-Jan-15 05:00', y: 52.559409015750646 },
    { x: '1-Jan-15 06:00', y: 39.136408597564284 },
    { x: '1-Jan-15 07:00', y: 90.6412931862836 },
    { x: '1-Jan-15 08:00', y: 35.33183438429373 },
    { x: '1-Jan-15 09:00', y: 22.641293979325127 },
    { x: '1-Jan-15 10:00', y: 20.871491415947286 },
    { x: '1-Jan-15 11:00', y: 29.691102702945727 }
  ], [
    { x: '1-Jan-15 00:00', y: 48.523610520714925 },
    { x: '1-Jan-15 01:00', y: 7.945419360213313 },
    { x: '1-Jan-15 02:00', y: 79.82392410151849 },
    { x: '1-Jan-15 03:00', y: 63.73689100322579 },
    { x: '1-Jan-15 04:00', y: 25.700942628447333 },
    { x: '1-Jan-15 05:00', y: 71.31864997516362 },
    { x: '1-Jan-15 06:00', y: 79.65991896091063 },
    { x: '1-Jan-15 07:00', y: 12.856220236847848 },
    { x: '1-Jan-15 08:00', y: 52.13335220057258 },
    { x: '1-Jan-15 09:00', y: 20.17514781104719 },
    { x: '1-Jan-15 10:00', y: 8.45325038824678 },
    { x: '1-Jan-15 11:00', y: 70.92549621127708 }
  ], [
    { x: '1-Jan-15 00:00', y: 92.48613342253861 },
    { x: '1-Jan-15 01:00', y: 30.67352644141028 },
    { x: '1-Jan-15 02:00', y: 53.64116672312376 },
    { x: '1-Jan-15 03:00', y: 12.4054240849919 },
    { x: '1-Jan-15 04:00', y: 81.66212779435097 },
    { x: '1-Jan-15 05:00', y: 18.608433188564376 },
    { x: '1-Jan-15 06:00', y: 81.54691939188552 },
    { x: '1-Jan-15 07:00', y: 99.4337747339449 },
    { x: '1-Jan-15 08:00', y: 48.65306225385473 },
    { x: '1-Jan-15 09:00', y: 33.20857516969187 },
    { x: '1-Jan-15 10:00', y: 69.26124273811045 },
    { x: '1-Jan-15 11:00', y: 19.727203976845466 }
  ]
];

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
    margin: { top: 0, right: 0, bottom: 30, left: 100 },
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
    margin: { top: 10, right: 10, bottom: 50, left: 50 },
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
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
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
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
    margin: { top: 10, right: 10, bottom: 50, left: 50 },
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
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
    margin: { top: 10, right: 30, bottom: 50, left: 70 },
    width: 350,
    height: 250,
    yDomainRange: ['Allot', 'Perfect', 'Little'],
    data: [
      [
        { x: 'Mon', y: 'Little' },
        { x: 'Tue', y: 'Perfect' },
        { x: 'Wed', y: 'Allot' },
        { x: 'Thu', y: 'Little' },
        { x: 'Fri', y: 'Perfect' }
      ]
    ]
  },

// xType & yType, 4

  {
    axisLabels: { x: 'Total Revenue', y: 'January' },
    margin: { top: 10, right: 30, bottom: 50, left: 70 },
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
    margin: { top: 10, right: 30, bottom: 50, left: 70 },
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
    margin: { top: 10, right: 30, bottom: 50, left: 70 },
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
    dataPoints: true,
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
  }

];

/*
export default [
  { // 1
    data: data,
    datePattern: '%d-%b-%y %H:%M',
    xType: 'time',
    width: 200,
    height: 100,
    interpolate: 'cardinal',
    yDomainRange: [ 0, 100 ],
    axisLabels: {
      x: 'Hour',
      y: 'Percentage'
    },
    style: {
      '.line0': {
        stroke: 'green'
      }
    }
  }, { // 2
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ]
    ]
  }, { // 3
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
  }, { // 4
    margin: {top: 0, right: 0, bottom: 30, left: 100},
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
    ],
  }, { // 5
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
    ],
  }, { // 6
    axes: true,
    margin: {top: 10, right: 10, bottom: 50, left: 50},
    axisLabels: {x: 'My x Axis', y: 'My y Axis'},
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
  }, { // 7
    axes: true,
    axisLabels: {x: 'My x Axis', y: 'My y Axis'},
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
  }, { // 8
    interpolate: 'cardinal',
    axes: true,
    margin: {top: 10, right: 10, bottom: 50, left: 50},
    axisLabels: {x: 'My x Axis', y: 'My y Axis'},
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
  }, { // data points
    axes: true,
    dataPoints: true,
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
  }
]
*/
