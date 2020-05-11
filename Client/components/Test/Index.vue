<template>
  <div>test</div>
</template>

<script>
export default {
  async asyncData({ store, $axios }) {
    const { list } = await $axios.get('/home/navInfo')
    global.console.log('test asyncData', list)
  }
}
</script>
