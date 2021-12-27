import https from 'https';

export default function ({ $axios, redirect }) {
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

    // 请求拦截器
    $axios.onRequest((config) => {
        // console.log('Making request to ' + config.url)
        return config;
    });

    // 响应拦截器
    $axios.onResponse((resp) => {
        if (resp.data.code == 1) {
            return Promise.resolve(resp.data.return);
        } else {
            throw new Error(res.data.msg);
            return Promise.reject(error);
        }
    });

    $axios.onError((error) => {
        const code = parseInt(error.response && error.response.status);
        if (code === 404 || code === 500) {
            redirect("/error");
        }

        return Promise.reject(error);
    });
}