const { watch, series, src, dest } = require("gulp");
var browserSync = require("browser-sync").create();
var postcss = require("gulp-postcss");
const imagemin = require("gulp-imagemin");
const uglify = require('gulp-uglify-es').default;

function cssTask(cb) {
	return src("./src/*.css")
		.pipe(postcss())
		.pipe(dest("./assets/css"))
		.pipe(browserSync.stream());
	cb();
}

function scriptsTask(cb) {
	return src('./src/*.js')
		.pipe(uglify())
		.pipe(dest('./dist/js'))
		.pipe(browserSync.stream());
	cb();
}

// Task for minifying images
function imageminTask(cb) {
	return src("./assets/images/*")
		.pipe(imagemin())
		.pipe(dest("./assets/images"));
	cb();
}

function browsersyncServe(cb) {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});
	cb();
}

function browsersyncReload(cb) {
	browserSync.reload();
	cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
	watch("./**/*.html", browsersyncReload);
	watch(["./src/*.css"], series(cssTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(cssTask, scriptsTask, browsersyncServe, watchTask);
exports.css = cssTask;
exports.images = imageminTask;
