var gulp = require('gulp')
var less = require('gulp-less')
var watch = require('gulp-watch')
gulp.task('less', function() {
	gulp.src('./less/**.less')
	    .pipe(less())
	    .pipe(gulp.dest('../dist/css/'))	    
})

gulp.task('auto', function() {
	watch('./less/**.less', function () {
		gulp.start('less')
	})
})

gulp.task('default', ['less','auto'])
