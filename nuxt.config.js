import colors from 'vuetify/es5/util/colors'

import path from 'path'
import fs from 'fs'
export default {
  dev: process.env.NODE_ENV !== 'production',
  env: {
    BASE_URL: process.env.BASE_URL || 'https://localhost:8080',
    APP_NAME: process.env.APP_NAME,
    APP_TITLE: process.env.APP_TITLE,
    APP_DESC: process.env.APP_DESC,
    APP_API_URL: process.env.APP_API_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    FB_CLIENT_ID: process.env.FB_CLIENT_ID,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - www-joymap-vuetify',
    title: 'www-joymap-vuetify',
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://apis.google.com/js/platform.js', async: true, defer: true }, //Goolge第三方登入 
      // { src: 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v12.0&appId=598385134849386&autoLogAppEvents=1', async: true, defer: true, crossorigin: 'anonymous', nonce: '2LeFW2PH' }, //FB第三方登入
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'crt/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'crt/server.crt'))
    },
    port: 8080
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.APP_API_URL || 'http://api.joymap.tw/v2',
  },
  auth: {
    localStorage: false,
    cookie: {
      options: {
        expires: 7
      }
    },
    token: {
      property: 'return.token',
      maxAge: 60 * 60
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'return.token' },
          logout: false,
          user: false,
        },
        tokenRequired: true,
        autoFetchUser: false
      },
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.deepOrange.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    breakpoint: {
      mobileBreakpoint: 'xs' 
    },
    icons: {
      iconfont: 'fa',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
