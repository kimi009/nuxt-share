module.exports = {
  mode: 'universal',
  env: {
    baseURL: 'http://203.195.150.105/api'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@assets/css/normalize.css', '@assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App 下一个版本可能会使用mode：client/server来判断
   */
  plugins: ['@/plugins/axios', { src: '@/plugins/pTest', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  router: {
    middleware: 'auth'
  },
  proxy: {
    '/api': {
      target: 'http://203.195.150.105/api',
      pathRewrite: {
        '^/api': '/',
        changeOrigin: true
      }
    }
  },
  bootstrapVue: {
    // bootstrapCSS: false, // Or `css: false`
    // bootstrapVueCSS: false, // Or `bvCSS: false`
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BNavbar',
      'BNavbarNav',
      'BNavbarBrand',
      'BNavbarToggle',
      'BNavItem',
      'BNavItemDropdown',
      'BDropdownItem',
      'BCollapse',
      'BButton',
      'BNavForm',
      'BFormInput',
      'BCarousel',
      'BCarouselSlide'
    ],
    directives: []
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  cache: true
}
