export default function ({ app }, inject) {
    const utils = {};
    //自動載入 modules
    const files = require.context("./modules", false, /\.js$/);

    files.keys().forEach((key) => {
        utils[key.replace(/(\.\/|\.js)/g, "")] = files(key).default; //相當於 require("???.js")($axios)
    });

    app.utils = utils
    inject('utils', utils);
}