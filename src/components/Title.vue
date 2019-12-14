<template>
  <div class="title">
    <h2>{{title}}</h2>
    <span v-if="isMore">全部</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isMore: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 32px;
  font-size: 18px;
  h2 {
    display: inline-block;
    height: 18px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
    line-height: 18px;
    float: right;
    color: black;
  }
}
</style>
