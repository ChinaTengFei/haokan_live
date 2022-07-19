export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '515直播-JRS直播,足球直播,NBA直播吧,低调看直播',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '515直播（515.TV）是最好的低调看JRS直播吧，提供足球直播、NBA直播，英超直播、西甲直播、欧洲杯直播。看球就来515.TV直播导航站。' },
      { hid: 'keywords', name: 'keywords', content: 'JRS直播,足球直播,低调看直播,NBA直播吧' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/public.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],


  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
