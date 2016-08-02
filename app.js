/* eslint-disable */

	var path = require('path'),

		nconf = require('nconf'),

		Hapi = require('hapi'),
		Good = require('good'),
		Boom = require('boom'),

		inert = require('inert'),
		vision = require('vision'),
		hogan = require('hapi-hogan'),

		clientPath = path.resolve(__dirname, 'client'),
		serverPath = path.resolve(__dirname, 'server'),
		publicPath = path.resolve(__dirname, 'public'),
		assetsPath = path.resolve(publicPath, 'assets'),

		server = new Hapi.Server(),
		config = require(path.resolve(serverPath, 'config'))(),

		Renderer = require('react-routes-renderer').Renderer,
		renderer = new Renderer(),
		Routes = require(path.resolve(clientPath, 'app/components')).Routes;

function IndexPage(request, reply) {
	renderer.render(Routes, request.url.path)
		.then(function (o) {
			if (o.redirect) return reply.redirect(o.redirect.pathname + o.redirect.search);
			reply.view('index', { title: 'RMA React Animation (Index)', react: o.rendered });
		})
		.catch(function (e) {
			reply(e);
		});
}

function PopMotionPage(request, reply) {
	renderer.render(Routes, request.url.path)
		.then(function (o) {
			if (o.redirect) return reply.redirect(o.redirect.pathname + o.redirect.search);
			reply.view('index', { title: 'RMA React Animation (Pop Motion)', react: o.rendered });
		})
		.catch(function (e) {
			reply(e);
		});
}

function ReactD3Page(request, reply) {
	renderer.render(Routes, request.url.path)
		.then(function (o) {
			if (o.redirect) return reply.redirect(o.redirect.pathname + o.redirect.search);
			reply.view('index', { title: 'RMA React Animation (React D3)', react: o.rendered });
		})
		.catch(function (e) {
			reply(e);
		});
}

function ReactMotionPage(request, reply) {
	renderer.render(Routes, request.url.path)
		.then(function (o) {
			if (o.redirect) return reply.redirect(o.redirect.pathname + o.redirect.search);
			reply.view('index', { title: 'RMA React Animation (React Motion)', react: o.rendered });
		})
		.catch(function (e) {
			reply(e);
		});
}

function VelocityPage(request, reply) {
	renderer.render(Routes, request.url.path)
		.then(function (o) {
			if (o.redirect) return reply.redirect(o.redirect.pathname + o.redirect.search);
			reply.view('index', { title: 'RMA React Animation (Velocity)', react: o.rendered });
		})
		.catch(function (e) {
			reply(e);
		});
}

nconf.argv().env().defaults(config);

	server.register(inert, function (e) {
		if (e) throw e;
		server.connection(nconf.get('server:connection'));
		/*
			Static Routes
		*/
		server.route({
			method: '*',
			path: '/',
			config: {
				handler: IndexPage
			}
		});
		server.route({
			method: '*',
			path: '/pop-motion/{chartType*}',
			config: {
				handler: PopMotionPage
			}
		});
		server.route({
			method: '*',
			path: '/react-d3/{chartType*}',
			config: {
				handler: ReactD3Page
			}
		});
		server.route({
			method: '*',
			path: '/react-motion/{chartType*}',
			config: {
				handler: ReactMotionPage
			}
		});
		server.route({
			method: '*',
			path: '/velocity/{chartType*}',
			config: {
				handler: VelocityPage
			}
		});
		server.route({
			path: '/assets/{path*}',
			method: 'GET',
			handler: {
				directory: {
					path: path.normalize(assetsPath),
					listing: false,
					index: false
				}
			}
		});
		server.log('info', 'Inert');
	});
	server.register(vision, function (e) {
		if (e) throw e;
		server.views({
			relativeTo: __dirname,
			path: path.resolve(serverPath, 'views'),
			engines: {
				html: {
					module: hogan,
					compileMode: 'sync',
					compileOptions: {
						partialsPath: path.resolve(serverPath, 'views/partials'),
						isCached: true
					}
				}
			}
		});
		server.log('info', 'Vision');
	});

	server.register({
		register: Good,
		options: {
			ops: {
				interval: 1000
			},
			reporters: {
				console: [{
					module: 'good-squeeze',
					name: 'Squeeze',
					args: [{ log: '*', response: '*' }]
				}, {
					module: 'good-console'
				}, 'stdout']
			}
		}
	}, function (e) {
		if (e) {
			console.log('Good', e);
			process.exit();
		}
	});

	server.start(function () {
		server.log('info', server.info.uri);
	});
