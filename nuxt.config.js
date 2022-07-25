export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '好看体育-世界杯直播_足球直播_NBA直播-好看的体育直播吧',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '在线观看2022卡塔尔世界杯直播就来好看体育！好看体育是专业的体育直播吧，提供足球直播、NBA直播、CBA直播、综合体育直播，全天24小时更新足球直播、NBA直播高清信号的导航网站。2022卡塔尔世界杯比赛直播尽在好看体育直播吧。' },
      { hid: 'keywords', name: 'keywords', content: '世界杯直播,2022世界杯直播,体育直播,足球直播,NBA直播' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/public.min.css',
    '~/assets/style/zhibodetail.css'
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
