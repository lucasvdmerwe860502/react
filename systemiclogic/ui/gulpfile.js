let gulp = require("gulp");
let browserify=require('browserify');
let babelify=require('babelify');
let source = require('vinyl-source-stream');
let rename=require('gulp-rename');
let cleanCSS=require('gulp-clean-css');
let less=require('gulp-less');


gulp.task("bundle_js", function () {
    return browserify({
        entries: './js/app.js',
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('dist.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('transpile_less', function () {
    return gulp.src('./styles/app.less')
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('dist.css'))
        .pipe(gulp.dest('dist/css'));
});



gulp.task('watch',function(){
   gulp.watch('./js/**/*',['bundle_js']);
   gulp.watch('./styles/**/*',['transpile_less']);
});