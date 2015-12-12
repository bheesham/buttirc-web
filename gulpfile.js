var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var coffee = require('gulp-coffee');


var css = function() {
  gulp.src('./stylus/*.styl')
  .pipe(stylus({}))
  .pipe(gulp.dest('./dist/'))
};


var html = function() {
  gulp.src('./jade/*.jade')
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest('./dist/'))
};


var js = function() {
  gulp.src('./coffee/*.coffee')
  .pipe(coffee({bare: true}))
  .pipe(gulp.dest('./dist/'));
};

gulp.task('html', html);
gulp.task('css', css);
gulp.task('js', js);

gulp.task('default', function() {
  css();
  html();
  js();
});

