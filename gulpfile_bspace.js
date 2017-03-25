var gulp = require('gulp');
var purify = require('gulp-purifycss');
var cssmin = require('gulp-cssmin');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var concatjs = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');
var htmlmin = require('gulp-htmlmin');


gulp.task('htmlminify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('build/'));
});

gulp.task('onepage', function() {
  	return gulp.src(['./css/onepage.css'])
    //.pipe(purify(['./js/**/*.js', './index.html']))
    //.pipe(concatCss("onepage.css"))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css/'));
})


gulp.task('cssminconcat', function() {
  	return gulp.src(['./css/bootstrap.min.css', './css/font-awesome.min.css', './css/animate.min.css', './css/settings.css', './css/owl.carousel.css', './css/jquery.fancybox.css', './css/zerogrid.css', './css/jPushMenu.css', './css/jquery-ui.min.css', './css/loader.css'])
    .pipe(purify(['./js/**/*.js', './index.html']))
    .pipe(concatCss("bundle.css"))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css/'));
})

gulp.task('jsconcat', function() {
  	return gulp.src(['js/libs/jquery-2.1.4.js', 'js/libs/bootstrap.min.js', 'js/libs/jquery.themepunch.tools.min.js', 'js/libs/jquery.themepunch.revolution.min.js', 'js/libs/jquery.easing.min.js', 'js/libs/jquery-countTo.js', 'js/libs/jquery.appear.js', 'js/libs/jquery.mixitup.min.js', 'js/libs/wow.min.js', 'js/libs/jquery.fancybox.js', 'js/libs/jquery.fancybox-thumbs.js', 'js/libs/jquery.fancybox-media.js', 'js/libs/jquery-ui.min.js', 'js/libs/jquery.inview.js'])
    .pipe(concatjs('libs.js'))
    .pipe(gulp.dest('./build/js/'));
})

gulp.task('uglyfunc', function() {
  	return gulp.src(['./js/functions.js'])
    .pipe(jsmin())
    .pipe(gulp.dest('./build/js/'));
})

gulp.task('uglyscript', function() {
  	return gulp.src(['./js/script.js'])
    .pipe(jsmin())
    .pipe(gulp.dest('./build/js/'));
})

gulp.task('imgmin', () =>
    gulp.src('images/**/*')
        .pipe(imagemin({
	      progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/images'))
);

gulp.task('default', ['uglyfunc', 'uglyscript', 'onepage', 'htmlminify']);

/*var purify = require('gulp-purifycss');

gulp.task('default', function() {
  return gulp.src('./css/onepage.css')
    .pipe(purify(['./js/*.js', './index.html']))
    .pipe(gulp.dest('./build/'));
});*/

/*gulp.task('default', function() {
  	return gulp.src(['./css/bootstrap.min.css', './css/font-awesome.min.css', './css/animate.min.css', './css/settings.css', './css/owl.carousel.css', './css/jquery.fancybox.css', './css/zerogrid.css', './css/jPushMenu.css', './css/onepage.css', './css/jquery-ui.min.css', './css/loader.css'])
    .pipe(purify(['./js/*.js', './index.html']))
    .pipe(cssmin())
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('./build/css/'));
})*/
