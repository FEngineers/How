var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require("webpack");

var sass = require('gulp-ruby-sass');

gulp.task("webpack", function(callback) {
  // run webpack
  var config = require('./webpack.config');

  webpack(config, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});


gulp.task('compile.css', function(done) {
  sass('./css/test.scss', { loadPath: 'css' }).pipe(gulp.dest('dist')).on('end', done);
});

// webpack compile是异步执行的
gulp.task('dev', ['webpack', 'compile.css'], function() {
  gulp.watch(['./css/**/*', './js/**/*'], ['webpack', 'compile.css']);
});
