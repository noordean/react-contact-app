import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';


gulp.task('transpile', () =>
  gulp.src(['server.js', '!dist/**', '!node_modules/**', '!gulpfile.babel.js', '!coverage/**'])
  .pipe(babel())
  .pipe(gulp.dest('dist'))
);


gulp.task('bundle', ['transpile'], () => {
  return browserify({
    entries: './components/app.jsx',
    debug: true
  }).transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['bundle'], () => {
  return gulp.src(['index.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy']);