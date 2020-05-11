<template>
  <div class="home-layout">
    <header>
      <home-header />
    </header>
    <nuxt />
    <footer>
      <home-footer />
    </footer>
  </div>
</template>

<script>
import HomeHeader from '@/components/Home/Header'
import HomeFooter from '@/components/Home/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<style lang="less" scoped>
.home-layout {
  background-color: #f5f7f9;
}
</style>
