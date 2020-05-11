<template>
  <div class="home">
    <div class="banner-comp">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <template v-for="(item, index) in banners">
          <b-carousel-slide
            :key="index"
            :caption="item.caption"
            :text="item.text"
            :img-src="item.src"
          >
            <h1>{{ item.text }}</h1>
          </b-carousel-slide>
        </template>
      </b-carousel>
    </div>
    <product-des :product-info="productInfo" style="marginTop:30px;" />
    <router-link to="/about">To About</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import ProductDes from '@/components/ProductDes'
export default {
  components: {
    ProductDes
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      banners: [],
      productInfo: {}
    }
  },
  created() {
    this.getBanner()
    this.getProductInfo()
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    async getBanner() {
      const {
        data: { data }
      } = await axios.get('http://localhost:6010/home/banner')
      this.banners = data.banners
    },
    async getProductInfo() {
      const {
        data: { data }
      } = await axios.get('http://localhost:6010/home/productInfo')
      this.productInfo = data.product
    }
  }
}
</script>

<style lang="less" scoped>
.home {
}
</style>
