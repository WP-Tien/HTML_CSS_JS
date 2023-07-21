const themeName = 'Twp'; 

const gulp = require('gulp'),
      postcss = require('gulp-postcss'), // https://viblo.asia/p/ban-co-biet-ve-postcss-Qbq5QrkJKD8
      autoprefixer = require('autoprefixer'),
      plumber = require('gulp-plumber'),
      browserSync = require('browser-sync').create(), // Creating a magic server :D
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'), // minify CSS
      sourcesmap = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      concat = require('gulp-concat'), // Concatenates files
      imagemin = require('gulp-imagemin'),
      changed = require('gulp-changed'),
      uglify = require('gulp-uglify'), // Minify JavaScript
      del = require('del'),
      lineec = require('gulp-line-ending-corrector');
      
// Configuration
const cfg = require('./gulpconfig.json');
const paths = cfg.paths;

// Run: gulp sass
// https://www.npmjs.com/package/gulp-sass
gulp.task('sass', function() {
    return gulp.src(paths.sass + '/*.scss')
    .pipe(sass({
        errorLogToConsole: true,
        outputStyle: 'expanded'
      }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(paths.css));
});

// Run:
// gulp watch
// https://www.npmjs.com/package/gulp-watch
gulp.task('watch', function() {
    // css
    gulp.watch(`${paths.sass}/**/*.scss`, gulp.series('styles') );
    // js
    // image
})

// Run:
// gulp minifycss
// Minifies CSS files
gulp.task('minifycss', function() {
    return gulp.src(`${paths.css}/main.css`)
    .pipe( cleanCSS() )
    .pipe( rename({ suffix: '.min' }) )
    .pipe( gulp.dest(paths.css) );
})


gulp.task('styles', function(callback) {
	gulp.series('sass', 'minifycss')(callback);
});

// Run:
// gulp browser-sync
// https://browsersync.io/docs/options
gulp.task('browser-sync', function() {
    browserSync.init(cfg.browserSyncWatchFiles, cfg.browserSyncOptions);
});

// Run:
// gulp copy-assets
//  Sao chép tất cả các dependency assets cần thiết từ node_module đến theme như /js /scss hay /font. 
gulp.task('copy-assets', function(done) {
    // Copy all Font Awesome Fonts
	gulp
    .src(`${paths.node}@fortawesome/fontawesome-free/webfonts/**/*.{ttf,woff,woff2,eot,svg}`)
    .pipe(gulp.dest('./fonts'));

    // Copy all Font Awesome SCSS files
	gulp
    .src(`${paths.node}@fortawesome/fontawesome-free/scss/*.scss`)
    .pipe(gulp.dest(`${paths.src}/sass/fontawesome`));

    done();
});

// Deleting any file inside the /src folder
gulp.task('clean-source', function() {
	return del(['src/**/*']);
});

// Run:
// gulp watch-bs
// Starts watcher with browser-sync. Browser-sync reloads page automatically on your browser
gulp.task('watch-bs', gulp.parallel('browser-sync', 'watch'));
