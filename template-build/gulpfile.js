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
var mainBowerFiles = require('main-bower-files');


var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("styles", function(){
  gulp.src("src/css/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest("build/css"))
    .pipe(reload({stream:true}))
});

gulp.task('lint', function() {
  return gulp.src('src/scripts/**/*.js').pipe(eslint({
    }))
  .pipe(eslint.format('stylish'))
  // Brick on failure to be super strict
  .pipe(eslint.failOnError());
});

gulp.task("scripts",function(){
  gulp.src(["src/scripts/**/*.js" , "../common/helper.js"])
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['babel-preset-es2015'].map(require.resolve), plugins: ["babel-plugin-transform-function-bind"].map(require.resolve) }))
    .pipe(plumber())
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(rename({suffix:".min"}))
    .pipe(sourcemaps.write("maps"))
    .pipe(gulp.dest("build/scripts/"))
    .pipe(reload({stream:true}))
});

//contact bower javascript to a single file
gulp.task("bower", function () {
  return gulp.src(mainBowerFiles("**/*\.js"))
    .pipe(sourcemaps.init())
    .pipe(concat("bower.js"))
    .pipe(sourcemaps.write("maps"))
    .pipe(gulp.dest("./build/scripts/"));
});

//copy bower css & other files
gulp.task("bower-other", function () {
  return gulp.src(mainBowerFiles({
    filter: function(file) {
      return file.substring(file.length -2) !== "js";
    },
  }), {base: "bower_components"})
    .pipe(gulp.dest("./build/bower_components/"));
});

gulp.task( "components", () => {
  return gulp.src( [
    "bower_components/underscore/underscore*.js",
    "bower_components/promise-polyfill/promise-polyfill-lite.html",
    "bower_components/promise-polyfill/Promise.js",
    "bower_components/rise-logger/rise-logger-utils.html",
    "bower_components/iron-ajax/iron-request.html",
    "bower_components/rise-financial/firebasejs/3.6.1/firebase-database.js",
    "bower_components/rise-financial/firebasejs/3.6.1/firebase-app.js",
    "bower_components/rise-financial/rise-financial.js",
    "bower_components/byutv-jsonp/scripts/byutv-behaviors-jsonp.js",
    "bower_components/byutv-jsonp/scripts/byutv-jsonp.js",
    "bower_components/polymer/polymer-micro.html",
  ], { base: "./" } )
    .pipe( gulp.dest( "build/" ) );
} );

gulp.task("imageminification",function(){
  gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/images"))
});

gulp.task("watch", function(){
  gulp.watch("src/scripts/**/*.js", ["lint", "scripts"]);
  gulp.watch("src/css/**/*.scss", ["styles"]);
});

gulp.task("browser-sync", function() {
  browserSync({
    port: 8000,
    server: {
      baseDir:"."
    }
  });
});

gulp.task("build", ["lint","styles", "bower", "bower-other", "components", "scripts", "imageminification"]);

gulp.task("default", ["lint","styles", "bower", "bower-other", "components", "scripts", "imageminification", "watch", "browser-sync"]);
