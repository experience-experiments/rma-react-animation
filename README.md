# react-easy-chart-animation

First

	```npm install```

After install, copy the contents of

	``client/lib/react-easy-chart```

To

	```node_modules/react-easy-chart/lib```

Then in

	 ```node_modules/react-easy-chart```

If there is an “index.js” file, replace the content with:

```
require('babel-register')({ ignore: /node_modules\/(?!(react-easy-chart)).*/ })
module.exports = require('./lib')```

Create “index.js” if it is not there.

Finally,

	```npm run dev```

On localhost port 5000.
