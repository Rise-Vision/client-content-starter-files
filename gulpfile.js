var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-cssmin");
var plumber = require("gulp-plumber");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var imagemin = require("gulp-imagemin");
var babel = require("gulp-babel");
var eslint = require("gulp-eslint");

var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("styles", function(){
  gulp.src("src/styles/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest("build/"))
    .pipe(reload({stream:true}))
});

gulp.task('lint', function() {
  return gulp.src('src/scripts/**/*.js').pipe(eslint({
    'rules':{
        'quotes': [1, 'double'],
        'semi': [1, 'always']
      }
    }))
  .pipe(eslint.format('stylish'))
  // Brick on failure to be super strict
  .pipe(eslint.failOnError());
});

gulp.task("scripts",function(){
  gulp.src("src/scripts/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(plumber())
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(rename({suffix:".min"}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/"))
    .pipe(reload({stream:true}))
});

gulp.task("imageminification",function(){
  gulp.src("images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/images"))
});

gulp.task("watch", function(){
  gulp.watch("src/scripts/**/*.js", ["lint", "scripts"]);
  gulp.watch("src/styles/**/*.scss", ["styles"]);
});

gulp.task("browser-sync", function() {
  browserSync({
    port: 8000,
    server: {
      baseDir:"."
    }
  });
});

gulp.task("default", ["lint","styles", "scripts", "imageminification", "watch", "browser-sync"]);