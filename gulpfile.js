var gulp=require('gulp');
var sass=require('gulp-sass');
var server=require('gulp-webserver');
//启服务
gulp.task('startserver',function(){
	return gulp.src('src')
	.pipe(server({
		port:9999,
		host:"169.254.112.84",
		livereload:true
		
	}))
})
//编译sass
gulp.task('scss',function(){
	return gulp.src('./src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/css'))
})
//监听sass
gulp.task("watch",function(){
	return gulp.watch('./src/scss/*.scss',gulp.series('scss'));
})
//默认执行
gulp.task('default',gulp.series('scss','startserver','watch'))