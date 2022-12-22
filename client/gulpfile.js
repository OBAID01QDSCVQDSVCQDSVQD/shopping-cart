const gulp1 = require('gulp');
const gulpsass= require('gulp-sass');
const sass = gulpsass(require('sass'));
gulp1.task('sass', async function(){
    gulp1.src('src/components/**/*.scss').pipe(sass()).pipe(gulp1.dest('src/css'))
})

gulp1.task ('watch', async function(){
    gulp1.watch("src/components/**/*.scss", async function(){
        gulp1.src('src/components/**/*.scss').pipe(sass()).pipe(gulp1.dest('src/css'))
    })
   
})