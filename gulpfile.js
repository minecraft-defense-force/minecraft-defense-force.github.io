const gulp        = require('gulp');
const gutil       = require('gulp-util');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const stream      = require('stream');

const staticResourcesGlob = [
    "src/**/*.html",
    "src/**/*.js",
    "src/**/*.jpg",
    "src/**/*.png",
    "src/**/*.webp",
    "src/**/*.css",
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

function empty_src(filename) {
    const src = new stream.Readable({objectMode: true});
    src._read = function () {
        this.push(new gutil.File({
            cwd: "",
            base: "",
            path: filename,
            contents: new Buffer.alloc(0)
        }))
        this.push(null)
    }
    return src
}

gulp.task('generate-nojekyll', () => empty_src(".nojekyll")
        .pipe(gulp.dest("dist/")));

gulp.task('build', gulp.parallel(
    gulp.task('sass'),
    gulp.task('copy-statics'),
    gulp.task('generate-nojekyll'),
));

gulp.task('default', gulp.task('build'));
