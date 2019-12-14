<template>
  <div class="nav-header">
    <div class="item" v-for="(item, index) in data" :key="index" :class="{ 'active': index === active}" @click="$emit('clickItem',index)"><span>{{item}}</span></div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    },
    active: {
      type: Number,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../common/scss/variable.scss';
.nav-header {
  height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  .item {
    flex: 1;
    line-height: 44px;
    height: 100%;
    text-align: center;
    font-size: 14px;
    color: $color-text-l;
  }
  .active {
    color: $color-text-d;
    span {
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      border-bottom: 2px solid #aaa;
    }
  }
}
</style>
