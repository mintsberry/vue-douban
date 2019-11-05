<template>
    <ul class="enterances">
      <li class="item" v-for="(item, index) in data" :key="index">
        <img :src="item.icon" alt="" width="36" height="36">
        <p class="text">{{item.title}}</p>
      </li>
    </ul>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.enterances {
    display: flex;
    padding-top: 16px;
    margin-bottom: 32px;
    min-height: 60px;
    .item {
      flex: 1;
      text-align: center;
      img {
        margin-bottom: 8px;
      }
      .text {
        font-size: $font-size-medium;
        color: $color-text;
      }
    }
  }
</style>
