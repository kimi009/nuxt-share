<template>
  <div class="product-list">
    <h1>更多产品信息</h1>
    <product-des :product-info="product" style="marginTop:30px;" />
  </div>
</template>

<script>
import ProductDes from '@/components/Home/ProductDes'
export default {
  layout: 'home',
  name: 'ProductList',
  components: {
    ProductDes
  },
  async asyncData({ store, $axios }) {
    const { product } = await $axios.get('/api/product/info')
    return { product }
  },
  data() {
    return {
      title: '产品详情页'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '这是我的产品说明页面'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.product-list {
  min-height: calc(100vh - 110px);
}
</style>
