/* Node 12.16.1 */

const { watch, series, src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const browserSync = require('browser-sync');
const server = browserSync.create();

function scripts() {
    return src(['scripts/modules/globals.js',
        'scripts/modules/preload.js',
        'scripts/modules/create.js',
        'scripts/modules/update.js',
        'scripts/modules/config.js',
        'scripts/main.js'])
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
        proxy: 'http://127.0.0.1:5501/',
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
            './scripts/modules/*.js',
            './scripts/main.js'],
            {delay: 400 },
            series(scripts, styles, reload));

    cb();
}
  
exports.default = series(scripts, styles, serve, watching);