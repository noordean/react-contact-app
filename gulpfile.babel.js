import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import nodemon from 'gulp-nodemon';
import path from 'path';


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
  return gulp.src(['index.html', 'public/**/*.jpg'])
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['bundle', 'copy'], () => {
  nodemon({
    script: path.join('dist', 'server.js'),
    ext: 'js'
  });
});

gulp.task('default', ['serve']);