import gulp from 'gulp';
import babel from 'gulp-babel';


gulp.task('transpile', () =>
  gulp.src(['./**/*.js', '!dist/**', '!node_modules/**', '!gulpfile.babel.js', '!coverage/**'])
  .pipe(babel())
  .pipe(gulp.dest('dist'))
);

gulp.task('default', ['transpile']);
