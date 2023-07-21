const gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    autoprefixer = require("autoprefixer"),
    cleanCSS = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify-es").default,
    lec = require('gulp-line-ending-corrector'),
    imagemin = require("gulp-imagemin"),
    browserSync = require("browser-sync").create();


gulp.task('sass', function () {
    return gulp
        .src('./sass/*.scss')
        .pipe(sourcemaps.init({ loadMaps: true, largeFile: true }))
        .pipe(
            sass({
                errorLogToConsole: true,
                outputStyle: "expanded",
            }).on("error", sass.logError)
        )
        .pipe(
            sass({
                errorLogToConsole: true,
                outputStyle: "expanded",
            }).on("error", sass.logError)
        )
        .pipe(
            postcss([
                autoprefixer('last 2 versions')
            ])
        )
        .pipe(sourcemaps.write(undefined, { sourceRoot: null }))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task("minifycss", function () {
    return gulp
        .src(`./css/style.css`)
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(cleanCSS())
        .pipe(lec())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./css/'));
});

gulp.task("styles", function (callback) {
    gulp.series("sass", "minifycss")(callback);
});

gulp.task("scripts", function () {
    var sources = [
        `./assets/aos/aos.js`,
        `./assets/glide/glide.min.js`,
        `./js/slider.js`,
        `./js/index.js`,
        `./js/products.js`,
    ];

    return gulp
        .src(sources, { allowEmpty: true })
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(lec())
        .pipe(gulp.dest('./js'));
});

gulp.task('images', function () {
    return gulp
        .src(["./images/*", "./images/*/**"])
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(gulp.dest("./images-min"));
});

function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });

    gulp.watch("./*.html").on("change", browserSync.reload);
    // gulp.watch("./js/**/*.js", javascript).on("change", browserSync.reload);
    // gulp.watch("./images/*", images1, images2, images3);
    gulp.watch("./sass/*/**.scss", gulp.series("styles"));
    gulp.watch('./js/*.js', gulp.series("scripts"));
    gulp.watch("./images/*/**", gulp.series('images'));
}

var build = gulp.parallel(watch);
gulp.task("default", build);

gulp.task("copy-assets", function (done) {
    // Glide carousel
    gulp
        .src(
            [
                `node_modules/@glidejs/glide/src/assets/sass/*.scss`,
                `node_modules/@glidejs/glide/dist/*.js`
            ]
        )
        .pipe(
            gulp.dest('./assets/glide')
        );

    // AOS animate on scroll
    gulp
        .src(
            `node_modules/aos/dist/*.{css,js}`
        )
        .pipe(
            gulp.dest('./assets/aos')
        );

    done();
});
