// ==== SCRIPTS ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').scripts;
var webpack = require('../../gulpconfig').webpack;

gulp.task('scripts-lint', function() {
  return gulp.src(config.src)
    .pipe(plugins.eslint({ useEslintrc: true }))
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError());
});

gulp.task('scripts', ['scripts-lint'], function() {
  return gulp.src(config.src)
    .pipe(plugins.plumber())
    .pipe(plugins.webpack(webpack))
    .pipe(gulp.dest(config.dest));
});
