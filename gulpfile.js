var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    connect = require('gulp-connect');

gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./src/**/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    //html
    gulp.watch(['*.html', './src/components/*.html'], ['html']);
    gulp.watch(['./src/**/*.js'], ['js']);
});

gulp.task('connect', function() {
    connect.server({
        port: 9000,
        livereload: true
    });
});

gulp.task('default', ['connect', 'watch']);
