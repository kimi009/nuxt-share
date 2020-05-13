<template>
  <div class="page-home">
    <banner />
    <product-des :product-info="productInfo" style="marginTop:30px;" />
    <b-container fluid class="more-prodcut">
      <nuxt-link to="/product" class="text-danger">查看更多产品 ></nuxt-link>
    </b-container>
    <div>福建省立刻减肥废旧塑料宽带缴费</div>
    <div>
      福建省劳动纠纷时fj
      <span>我是span标签</span>
      <p>我是p标签</p>
      <strong>我是strong标签</strong>
      <em>我是em标签</em>
    </div>
    <!-- <b-container style="display:none;" fluid class="text-light text-center">
      <p>隐藏测试</p>
      <b-row class="mb-3">
        <b-col md="4" class="p-3 text-muted">md="4"</b-col>
        <b-col md="4" class="ml-auto p-3 bg-info">md="4" .ml-auto</b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col md="3" class="ml-md-auto p-3 bg-info">md="3" .ml-md-auto</b-col>
        <b-col md="3" class="ml-md-auto p-3 bg-info">md="3" .ml-md-auto</b-col>
      </b-row>

      <b-row>
        <b-col cols="auto" class="mr-auto p-3 bg-info">cols="auto".mr-auto</b-col>
        <b-col cols="auto" class="p-3 bg-info">cols="auto"</b-col>
      </b-row>
    </b-container>-->
    <test></test>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '@/components/Home/Banner'
import ProductDes from '@/components/Home/ProductDes'
import Test from '@/components/Test/Index'
export default {
  layout: 'home',
  // middleware: 'auth',
  components: {
    Banner,
    ProductDes,
    Test
  },
  validate({ params, query, store }) {
    global.console.log('生命周期---validate')
    return true
  },
  fetch({ store, params }) {
    global.console.log('生命周期---fetch')
    store.commit('home/setTempTest', 333)
  },
  async asyncData({ app, store, $axios, userAgent }) {
    global.console.log('生命周期---asyncData')
    // app.$print('asyncData===>我是自定义插件pTest')
    const { list } = await $axios.get('/api/home/navInfo')
    global.console.log('index', userAgent)
    store.commit('home/setMenuList', list)
    const { product } = await $axios.get('/api/home/productInfo')
    // global.console.log(product)
    store.commit('home/setProductInfo', product)
    const { banners } = await $axios.get('/api/home/banner')
    store.commit('home/setBanners', banners)
    // return { list: [] }
  },
  data() {
    return {
      title: '首页'
    }
  },
  computed: {
    ...mapState({
      productInfo: (state) => state.home.productInfo
    })
  },
  mounted() {
    this.$print('mounted===>我是插件pTest')
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="less" scoped>
.page-home {
  background-color: #f5f7f9;
  .more-prodcut {
    text-align: center;
    a {
      font-size: 14px;
      // color: #989898;
      &:hover {
        color: #00ff00;
      }
    }
  }
  .bv-example-row {
    background-color: #ffffff;
  }
}
</style>
