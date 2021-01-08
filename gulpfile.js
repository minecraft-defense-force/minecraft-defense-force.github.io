const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

const staticResourcesGlob = [
    "src/**/*.html",
    "src/**/*.js",
    "src/**/*.jpg",
    "src/**/*.png",
]

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => gulp.src("src/stylesheet/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/stylesheet/css"))
    .pipe(browserSync.stream()));
gulp.task('copy-statics', () => gulp.src(staticResourcesGlob)
    .pipe(gulp.dest("dist/")));

// Static Server + watching scss/html files
gulp.task('serve', gulp.series(
    gulp.parallel(gulp.task('sass'), gulp.task('copy-statics')),
    () => {

        browserSync.init({
            server: "./dist"
        });

        gulp.watch("src/stylesheet/scss/*.scss", gulp.task('sass'));
        gulp.watch(staticResourcesGlob).on('change', gulp.series(gulp.task('copy-statics'), browserSync.reload));
    }
));

gulp.task('default', gulp.parallel(gulp.task('sass'), gulp.task('copy-statics')));
