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
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var svgstore = require("gulp-svgstore");
var del = require("del");

gulp.task("del", function() {
    return del("build");
});


gulp.task("css", function() {
    return gulp.src("source/less/style.less")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("optimg", function() {
    let src = "source/img/**/*.{jpg,png,svg}";
    let dest = "build/img";

    return gulp.src(src)
        .pipe(imagemin([
            imagemin.optipng({ optimizationLevel: 3 }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest(dest));
});


gulp.task("exportWebP", function() {
    let src = "source/img/**/*.+(jpg|png)";
    let dest = "build/img";

    return gulp.src(src)
        .pipe(imagemin([
            webp({
                quality: 75
            })
        ]))
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest(dest));
});

gulp.task("svgstore", function() {
    let src = "source/img/**/icon-*.svg";
    let dest = "build/img";

    return gulp.src(src)
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest(dest));
});

gulp.task("posthtml", function() {
    let src = "source/*.html";
    let dest = "build";

    return gulp.src(src)
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest(dest));
});

gulp.task("copy", function() {
    return gulp.src([
            "source/fonts/**/*.{woff,woff2}",
            "source/img/**",
            "source/js/**",
            "source/*.ico"
        ], { base: "source" })
        .pipe(gulp.dest("build"));
});

gulp.task("refresh", function() {
    server.reload();
    done();
});

gulp.task("server", function() {
    server.init({
        server: "build/"
    });

    gulp.watch("source/less/**/*.less", gulp.series("css"));
    gulp.watch("source/img/*.svg", gulp.series("svgstore", "posthtml", "refresh"));

    gulp.watch("source/*.html", gulp.series("posthtml", "refresh"));
});

gulp.task("build", gulp.series("del", "copy", "css", "optimg", "svgstore", "posthtml", "exportWebP"));

gulp.task("start", gulp.series("build", "server"));
