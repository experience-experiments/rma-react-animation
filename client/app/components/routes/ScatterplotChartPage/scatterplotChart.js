const data = [
  { type: 'A', x: 324.7112378382711, y: 941.2596383877153 },
  { type: 'B', x: 484.2607441702342, y: 655.5274063049017 },
  { type: 'C', x: 415.36598379974924, y: 969.5856704999613 },
  { type: 'D', x: 271.25805177896694, y: 929.4461357222121 },
  { type: 'E', x: 74.35591016749059, y: 815.4138810817399 },
  { type: 'F', x: 756.2978717510604, y: 345.8317686005264 },
  { type: 'G', x: 447.32149909074695, y: 687.7771804353554 },
  { type: 'H', x: 780.1044011865785, y: 290.5742262056855 },
  { type: 'A', x: 326.1263469295993, y: 400.5731070923833 },
  { type: 'B', x: 72.91302091863491, y: 673.2961336782553 },
  { type: 'C', x: 939.2234924653748, y: 900.0154393679586 },
  { type: 'D', x: 116.47613287587603, y: 519.8226257487568 },
  { type: 'E', x: 254.80312198185786, y: 728.2251222290267 },
  { type: 'F', x: 744.7611728110412, y: 678.604197558077 },
  { type: 'G', x: 639.6518068616034, y: 750.8964138976927 },
  { type: 'H', x: 756.891874068618, y: 160.49450053180973 }
];

const alternativeData = [
  { type: 'One', x: 1, y: 5 },
  { type: 'Two', x: 3, y: 1 },
  { type: 'Three', x: 0, y: 6 },
  { type: 'Four', x: 5, y: 2 },
  { type: 'Five', x: 4, y: 4 },
  { type: 'Six', x: 5, y: 9 },
  { type: 'Seven', x: 9, y: 1 },
  { type: 'Eight', x: 5, y: 6 },
  { type: 'Nine', x: 3, y: 9 },
  { type: 'Ten', x: 7, y: 9 }
];

const config = [
  { type: 'One', color: '#1e313c', stroke: 'black' },
  { type: 'Two', color: '#3f4c55', stroke: 'black' },
  { type: 'Three', color: '#667178', stroke: 'black' },
  { type: 'Four', color: '#f4e956', stroke: 'black' },
  { type: 'Five', color: '#e3a51a', stroke: 'black' },
  { type: 'Six', color: '#aaac84', stroke: 'black' },
  { type: 'Seven', color: '#dce7c5', stroke: 'black' },
  { type: 'Eight', color: '#e4e8ec', stroke: 'black' }
];

export default [
  {
    data: data
  }, {
    data: alternativeData,
    width: 160,
    height: 90
  }, {
    data: alternativeData,
    axes: true,
    yAxisOrientRight: true,
    axisLabels: {
      x: 'My x Axis',
      y: 'My y Axis'
    },
    width: 480,
    height: 270,
  }, {
    data: alternativeData,
    axes: true,
    axisLabels: {
      x: 'My x Axis',
      y: 'My y Axis'
    },
    width: 480,
    height: 270
  }, {
    data: alternativeData,
    axes: true,
    axisLabels: {
      x: 'My x Axis',
      y: 'My y Axis'
    },
    dotRadius: 10,
    width: 480,
    height: 270
  }, {
    data: alternativeData,
    axes: true,
    axisLabels: {
      x: 'My x Axis',
      y: 'My y Axis'
    },
    dotRadius: 10,
    width: 480,
    height: 270,
    config: config,
  }, {
    data: alternativeData,
    axes: true,
    axisLabels: {
      x: 'My x Axis',
      y: 'My y Axis'
    },
    dotRadius: 6,
    width: 480,
    height: 270,
    grid: true
  }, {
    data: alternativeData,
    axes: true,
    verticalGrid: true,
    axisLabels: {
      x: 'My x Axis',
      y: 'My y Axis'
    },
    dotRadius: 6,
    width: 480,
    height: 270,
    grid: true
  }
];