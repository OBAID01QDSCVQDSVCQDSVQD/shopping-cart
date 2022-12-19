const gulp1 = require('gulp');
const gulpsass= require('gulp-sass');
const sass = gulpsass(require('sass'));
gulp1.task('sass', async function(){
    gulp1.src('src/*.scss').pipe(sass()).pipe(gulp1.dest('css'))
})