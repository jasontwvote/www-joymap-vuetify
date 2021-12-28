import lang from "~/static/lang.json"
export default function ({ app }, inject) {

    app.lang = lang;
    inject('lang', lang);
}