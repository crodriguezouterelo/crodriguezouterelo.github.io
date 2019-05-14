const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");

// compilar scss -> css
function style() {
  return gulp
    .src("./sass/*.scss") // 1. localización de los ficheros scss
    .pipe(sass().on("error", sass.logError)) // 2. compilación y notificación de errores en caso de haberlos
    .pipe(gulp.dest("./css")) // 3. localización para exportar
    .pipe(browserSync.stream()); // 4. cambios en tiempo real en todo navegador
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    browser: "firefox.exe"
  });
  gulp.watch("./sass/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

function run() {
  style();
  watch();
}

exports.style = style;
exports.watch = watch;
exports.default = run;
