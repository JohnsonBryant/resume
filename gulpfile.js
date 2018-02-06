let gulp = require('gulp');
let cssmin = require('gulp-cssmin');
let rename = require('gulp-rename');
let minify = require('gulp-minify');


gulp.task('jsminify', function(){
    gulp.src('js/*.js')
        .pipe(minify({
            ext:{
                // src:"",
                min:".min.js"
            },
            exclude: [],
            ignore:[]
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('cssminify', function(){
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['cssminify', 'jsminify'], function(){
    console.log("gulp-task run successfully");
});