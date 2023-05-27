const { src, watch, series, dest } = require("gulp");
const prefix = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));

const buildStyle = () => {
  return src(["sass/**/*.sass"])
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(prefix("last 2 versions"))
    .pipe(dest("dist/css/"))
}

const watchTasks = () => {
  return watch(["sass/**/*.sass"], buildStyle);
}

exports.default = series(watchTasks, buildStyle);