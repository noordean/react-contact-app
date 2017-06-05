import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import path from 'path';

gulp.task('transpile', () =>
  gulp.src(['./**/*.js', '!dist/**', '!node_modules/**', '!gulpfile.babel.js', '!coverage/**'])
  .pipe(babel())
  .pipe(gulp.dest('dist'))
);

gulp.task('serve', ['transpile'], () => {
  nodemon({
    script: path.join('dist', 'server.js'),
    ext: 'js'
  });
});
gulp.task('default', ['serve']);
