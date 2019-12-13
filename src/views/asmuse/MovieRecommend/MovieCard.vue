<template>
  <div class="movie-card">
    <div class="cover">
      <img :src="data.cover_url" alt="" >
    </div>
    <div class="text">
      <div class="subtitle">{{data.subtitle}}</div>
      <div class="title">{{data.title}}</div>
      <div class="count"><span class="author" v-if="data.owner">{{data.owner.name}}创建 / </span>共{{data.items_count}}部</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../common/scss/variable.scss';
.movie-card {
  border-radius: 8px;
  box-shadow: 0px 0px 4px  #eee;
  .cover {
    position: relative;
    padding-top: 60%;
    img {
      position: absolute;
      border-radius: 8px 8px 0 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .text {
    padding: 8px 12px;
    .subtitle {
      font-size: $font-size-small;
      font-weight: bold;
      color: $color-text-l;
    }
    .title {
      margin-top: 6px;
      font-size: $font-size-medium-x;
      font-weight: bold;
      color: $color-text;
    }
    .count {
      margin-top: 6px;
      font-size: $font-size-small;
      color: $color-text-d;
    }
  }
}
</style>
