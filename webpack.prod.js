const {merge} = reqiure("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
});