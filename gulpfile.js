/* eslint-disable */

var path = require('path'),
	srcPath = path.resolve(__dirname, 'client/src'),
	serverPath = path.resolve(__dirname, 'server'),
	assetsPath = path.resolve(__dirname, 'public/assets'),
	config = require(path.resolve(serverPath, 'config/gulp')),
	gulp = require('gulp'),
	clean = require('gulp-clean'),
	webpack = require('webpack-stream'),
	uglify = require('gulp-uglify'),
	server = require('gulp-develop-server'),
	sourcemaps = require('gulp-sourcemaps');

gulp
	.task('default', ['clean', 'webpack', 'uglify', 'watch', 'server', 'watch-server'], function () {
		console.log('[RMA React Animation]');
	})
	.task('clean', function () {
		return gulp.src(path.resolve(assetsPath, 'js/app/**/*.*'), { read: false })
			.pipe(clean());
	})
	.task('webpack', function () {
		return gulp.src([])
			.pipe(webpack(config.webpack.run))
			.pipe(gulp.dest(path.resolve(assetsPath, 'js/app/')));
	})
	.task('uglify', function () {
		return gulp.src(path.resolve(srcPath, '**/*.js!src/app.js'))
			.pipe(uglify())
			.pipe(gulp.dest(path.resolve(assetsPath, 'js/lib/')));
	})
	.task('watch', function () {
		gulp
			.watch(config.jshint.all, ['clean', 'webpack']);
		gulp
			.watch(path.resolve(serverPath, 'views/**/*.*'), server.restart)
	})
	.task('server', function () {
		server.listen({ path: 'app' });
	})
	.task('watch-server', function () {
		gulp
			.watch(['app.js'], server.restart);
	});
