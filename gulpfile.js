"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var webp = require("imagemin-webp");
var extReplace = require("gulp-ext-replace");

gulp.task("css", function() {
    return gulp.src("source/less/style.less")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("source/css"))
        .pipe(server.stream());
});

gulp.task("exportWebP", function() {
    let src = "source/img/**/*.+(jpg|png)"; // Where your PNGs are coming from.
    let dest = "source/img"; // Where your WebPs are going.

    return gulp.src(src)
        .pipe(imagemin([
            webp({
                quality: 75
            })
        ]))
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest(dest));
});

gulp.task("server", function() {
    server.init({
        server: "source/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/less/**/*.less", gulp.series("css"));
    gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));
