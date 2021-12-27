export default function ({ app, $axios }, inject) {
    const API = {};

    //自動載入 modules
    const files = require.context("./modules", false, /\.js$/);

    files.keys().forEach((key) => {
        API[key.replace(/(\.\/|\.js)/g, "")] = files(key).default($axios); //相當於 require("???.js")($axios)
    });

    app.api = API
    inject('api', API);
}