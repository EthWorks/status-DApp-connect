const { watch, series, src, dest } = require("gulp");
var browserSync = require("browser-sync").create();
var postcss = require("gulp-postcss");
const imagemin = require("gulp-imagemin");
const uglify = require('gulp-uglify-es').default;

function cssTask(cb) {
	return src("./src/*.css")
		.pipe(postcss())
		.pipe(dest("./dist/css"))
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
	return src("./assets/images/**/*")
		.pipe(imagemin())
		.pipe(dest("./dist/assets/images"));
	cb();
}

function htmlBuild(cb) {
	return src("./*.html")
		.pipe(dest("./dist"))
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
	watch(["./src/*.js"], series(scriptsTask, browsersyncReload));
}

exports.build = series(cssTask, scriptsTask, imageminTask, htmlBuild);
exports.default = series(cssTask, scriptsTask, htmlBuild, browsersyncServe, watchTask);
exports.css = cssTask;
exports.images = imageminTask;
