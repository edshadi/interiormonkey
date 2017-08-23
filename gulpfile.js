var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var gzip = require('gulp-gzip');

gulp.task('minifyjs', function() {
  gulp.src([
    "public/assets/js/jquery.js",
    "public/assets/js/bootstrap.min.js",
    "public/assets/third/validator/bootstrapValidator.min.js",
    "public/assets/js/jquery.smooth-scroll.js",
    "public/assets/third/hovericon/js/modernizr.custom.js",
    "public/assets/third/parallax/jquery.parallax-1.1.3.js",
    "public/assets/third/parallax/TweenMax.min.js",
    "public/assets/third/parallax/jquery.superscrollorama.js",
    "public/assets/third/mixitup/jquery.mixitup.js",
    "public/assets/third/backstretch/jquery.backstretch.min.js",
    "public/assets/js/teplok-one-page.js"
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  // .pipe(gzip())
  .pipe(gulp.dest('./public/assets/dist/'))
});

gulp.task('minifycss', function(){
  gulp.src([
    "public/assets/css/bootstrap.min.css",
    "public/assets/css/animate.css",
    "public/assets/css/style.css",
    "public/assets/css/style-responsive.css",
    "public/assets/third/font-awesome/css/font-awesome.min.css",
    "public/assets/third/hovericon/css/component.css"
  ])
  // .pipe(minifyCSS())
  .pipe(concat('style.min.css'))
  // .pipe(gzip())
  .pipe(gulp.dest('./public/assets/dist/'))
});

gulp.task('default', ['minifyjs', 'minifycss']);
