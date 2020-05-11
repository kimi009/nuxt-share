import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BootstrapVue,
  BCarousel,
  BCarouselSlide,
  BContainer,
  BRow,
  BCol,
  IconsPlugin
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
