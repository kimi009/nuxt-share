<template>
  <div class="page-footer">
    <span
      >Copyright © {{ date }} 北京掌中无限信息技术有限公司 京ICP证041626号</span
    >
    <span>京ICP备09083730号-8 京公网安备 11010802028637号</span>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style lang="less" scoped>
.page-footer {
  height: 50px;
  background-color: #000000;
  border-top: 1px solid #e5e5e5;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
