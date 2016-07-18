export default [

// Data, 1

  {
    data: [
      { key: 'A', value: 100 },
      { key: 'B', value: 200 },
      { key: 'C', value: 50 }
    ]
  },

// Data, 2

  {
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

  {
    data: [
      { key: 'A', value: 200, color: '#aaac84' },
      { key: 'B', value: 300, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

  {
    data: [
      { key: 'A', value: 300, color: '#aaac84' },
      { key: 'B', value: 400, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

  {
    data: [
      { key: 'A', value: 400, color: '#aaac84' },
      { key: 'B', value: 500, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' },
      { key: 'D', value: 20, color: '#aaac84' },
      { key: 'E', value: 20, color: '#e3a51a' },
      { key: 'F', value: 20, color: '#dce7c5' }
    ]
  },

  {
    data: [
      { key: 'A', value: 400, color: '#aaac84' },
      { key: 'B', value: 500, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' },
      { key: 'D', value: 10, color: '#aaac84' },
      { key: 'E', value: 20, color: '#dce7c5' }
    ]
  },

  {
    data: [
      { key: 'A', value: 400, color: '#aaac84' },
      { key: 'B', value: 500, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' },
      { key: 'D', value: 10, color: '#aaac84' },
      { key: 'E', value: 20, color: '#dce7c5' },
      { key: 'F', value: 30, color: '#e3a51a' }
    ]
  },

// Size

  {
    size: 100,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

// Donut

  {
    size: 400,
    innerHoleSize: 200,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

// Padding

  {
    padding: 50,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

// Labels

  {
    labels: true,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ],
    styles: {
      '.chart_text': {
        fontSize: '1em',
        fill: '#fff'
      }
    }
  },

  {
    labels: true,
    data: [
      { key: 'A', value: 10, color: '#aaac84' },
      { key: 'B', value: 20, color: '#dce7c5' },
      { key: 'C', value: 500, color: '#e3a51a' }
    ],
    styles: {
      '.chart_text': {
        fontSize: '1em',
        fill: '#fff'
      }
    }
  },

  {
    labels: true,
    data: [
      { key: 'A 1', value: 10, color: '#aaac84' },
      { key: 'B 1', value: 10, color: '#dce7c5' },
      { key: 'C 1', value: 20, color: '#dce7c5' },
      { key: 'D 1', value: 30, color: '#e3a51a' }
    ],
    styles: {
      '.chart_text': {
        fontSize: '1em',
        fill: '#fff'
      }
    }
  },

  {
    labels: true,
    data: [
      { key: 'A 2', value: 10, color: '#aaac84' },
      { key: 'B 2', value: 20, color: '#dce7c5' },
      { key: 'C 2', value: 10, color: '#dce7c5' },
      { key: 'D 2', value: 30, color: '#e3a51a' }
    ],
    styles: {
      '.chart_text': {
        fontSize: '1em',
        fill: '#fff'
      }
    }
  },

// Style

  {
    labels: true,
    styles: {
      '.chart_lines': {
        strokeWidth: 0
      },
      '.chart_text': {
        fontFamily: 'serif',
        fontSize: '1.25em',
        fill: '#333'
      }
    },
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

// Empty
  {
    data: []
  }

];
