
var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var injectPartials = require('gulp-inject-partials');
var runSequence = require('run-sequence');

gulp.task('default', function ()
{
    return gulp.src('public_html/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(injectPartials())
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function()
{
  return gulp.src('public_html/assets/img/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/assets/img'))
});

gulp.task('fonts', function()
{
  return gulp.src('public_html/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('build', function(callback) {
  runSequence('default', 'images', 'fonts', callback);
});