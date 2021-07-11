/* Node 14.17.3 */

const { watch, series, src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const browserSync = require('browser-sync');
const server = browserSync.create();

function scripts() {
    return src(['scripts/main.js'
    ])
    .pipe(plumber())
    .pipe(concat('custom.min.js'))
    .pipe(dest('./scripts'));
}

function styles() {
    return src('styles/critical.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(dest('./styles'));
}

function serve(cb) {
    server.init({
        proxy: 'http://127.0.0.1:5500/',
    });
    cb();
}

function reload(cb) {
    server.reload();
    cb();
}

function watching(cb) {
    watch(['./index.html',
            './styles/**/*.scss', 
            './scripts/main.js'],
            {delay: 400 },
            series(scripts, styles, reload));

    cb();
}
  
exports.default = series(scripts, styles, serve, watching);