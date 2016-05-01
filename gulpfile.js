var gulp        = require('gulp'),
    less        = require('gulp-less'),
    watch       = require('gulp-watch'),
    babel       = require('gulp-babel');


gulp.task('less', function(){
  return gulp.src('public/less/bootstrap.less')
    .pipe(less()) // Using gulp-less
    .pipe(gulp.dest('public/stylesheets/'))
});

gulp.task('watch', function(){
  gulp.watch('public/less/**/*.less', ['less']);
  // gulp.watch(['./public/jsx/*.js'], ['react']);
  // Other watchers
});

gulp.task('default', ['watch']);
