var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var gzip = require('gulp-gzip');

gulp.task('minifyjs', function() {
  gulp.src([
    "assets/js/jquery.js",
    "assets/js/bootstrap.min.js",
    "assets/third/validator/bootstrapValidator.min.js",
    "assets/js/jquery.smooth-scroll.js",
    "assets/third/hovericon/js/modernizr.custom.js",
    "assets/third/parallax/jquery.parallax-1.1.3.js",
    "assets/third/parallax/TweenMax.min.js",
    "assets/third/parallax/jquery.superscrollorama.js",
    "assets/third/mixitup/jquery.mixitup.js",
    "assets/third/backstretch/jquery.backstretch.min.js",
    "assets/js/teplok-one-page.js"
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  // .pipe(gzip())
  .pipe(gulp.dest('./assets/dist/'))
});

gulp.task('minifycss', function(){
  gulp.src([
    "assets/css/bootstrap.min.css",
    "assets/css/animate.css",
    "assets/css/style.css",
    "assets/css/style-responsive.css",
    "assets/third/font-awesome/css/font-awesome.min.css",
    "assets/third/hovericon/css/component.css"
  ])
  // .pipe(minifyCSS())
  .pipe(concat('style.min.css'))
  // .pipe(gzip())
  .pipe(gulp.dest('./assets/dist/'))
});

gulp.task('default', ['minifyjs', 'minifycss']);
