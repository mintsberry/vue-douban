<template>
  <div class="annual-rank">
    <div class="rank" v-for="(item, index) in data" :key="index" :style="{background: `#${item.background_color_scheme.primary_color_light}`}">
      <div class="type">{{item.type_text}}</div>
      <div class="title">{{item.title}}</div>
      <img :src="item.header_bg_image" class="cover"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.annual-rank {
  .rank {
    position: relative;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 16px;
    height: 100px;
    border-radius: 4px;
    box-shadow: 1px 1px 2px #aaa;
    padding: 16px;
    color: white;
    .type {
      font-size: 12px;
      margin-bottom: 12px;
      z-index: 10;
    }
    .title {
      font-size: $font-size-large;
      font-weight: bold;
      z-index: 10;
    }
    .cover {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 180px;
      object-fit: cover;
      object-position: left;
      border-radius: 4px;
      clip-path: polygon(45% 0%, 120% 0%, 85% 100%, 10% 100%);
    }
    &::before  {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .2);
    }
  }
}
</style>
