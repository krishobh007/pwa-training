// TODO 3 - include gulp
var gulp = require('gulp');
// TODO 4.1 - include gulp-uglify
var uglify = require('gulp-uglify');
// TODO 6.3a - include browserSync
gulp.task('minify', function() {
  gulp.src('js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});
// TODO 4.2 - uglify / minify JavaScript

// TODO 6.1 - add default tasks
gulp.task('default', ['minify', 'processCSS']);
// TODO 6.2 - watch files
gulp.task('watch', function() {
  gulp.watch('styles/*.css', ['processCSS']);
});

var browserSync = require('browser-sync');
// TODO 6.3b - run a local server
gulp.task('serve', function() {
  browserSync.init({
    server: '.',
    port: 3001
  });
});
