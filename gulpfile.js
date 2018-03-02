var gulp = require('gulp');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', ['webserver'], function() {
    gulp.watch(['*.*', './src/**'], ['bundle']);
});

gulp.task('webserver', ['bundle'], function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: 'index.html'
        }));
});

gulp.task('bundle', ['compile'], function() {
    // set up the browserify instance on a task basis
    var b =
        browserify({
            entries: './dist/app.js',
            debug: true
        });

    return b
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('compile', function() {
    gulp.src('src/app.jsx')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('dist'))
});


// Order of tasks is : compile -> bundle -> webserver -> watch.
gulp.task('default', ['watch']);
