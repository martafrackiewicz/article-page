const gulp = require("gulp"); 
const sass = require("gulp-sass");
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const deploy = require('gulp-gh-pages');

sass.compiler = require('sass')


function server(cb) { 
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    cb();
}

function makeCss() {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function makeHtml() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('dist'))
}

function makeJs() {
    return gulp.src('script.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
}

function images() {
    return gulp.src('./images/**/*')
        .pipe(gulp.dest('dist/images'));
};

function watch(cb) {
    gulp.watch("./scss/**/*.scss", gulp.series(makeCss));
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.js").on('change', browserSync.reload);
    cb();
}

gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy({
            remoteUrl: "https://github.com/martafrackiewicz/martafrackiewicz.github.io.git",
            branch: "main"
        }))
});

module.exports.makeCss = makeCss;
module.exports.watch = watch;
module.exports.makeHtml = makeHtml;
module.exports.makeJs = makeJs;
module.exports.images = images;

module.exports.default = gulp.series(server, makeCss, makeHtml, makeJs, images, watch)