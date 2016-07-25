/* eslint-disable */

	var jsdom = require('jsdom').jsdom

	function populateGlobalProperty(key, value) {
		if (global.hasOwnProperty(key)) return true;
		if (global[key] === undefined) global[key] = value;
	}

	function populateGlobalProperties() {

		var document = jsdom();
		var window = document.defaultView;

		var windowProperties = Object.keys(window);

		windowProperties.forEach(populateGlobalProperty);

		global.document = document;
		global.window = window;
		global.navigator = {
			userAgent: 'Node ' + process.version
		};

	}

module.exports = function () {

	populateGlobalProperties();

	switch (process.env.NODE_ENV) {
		case 'production':
			return {
				'server': {
					'connection': {
						'port': process.env.PORT
					}
				}
			}
		default:
			return {
				'server': {
					'connection': {
						'port': 5000
					}
				}
			}
	}
}