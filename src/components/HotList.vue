<template>
  <div class="hot-list">
    <div class="img-box" v-for="(item, index) in data" :key="index" @click="$emit('clickItem', item.id)">
      <div class="img-wrapper">
        <img :src="item.cover.url" alt="" v-if="item.cover">
        <img :src="item.pic.normal" alt="">
      </div>
      <div class="introduce">
        <div class="title">{{item.title}}</div>
        <div class="rate">
          <Star :score='item.rating.value / 2' size='24' class="star"></Star>
          <span class="score">{{item.rating.value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Star from './star/Star.vue'
export default {
  components: {
    Star
  },
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
.hot-list {
  width: 100%;
  .img-box {
    display: inline-block;
    width: 31%;
    padding: 1%;
    .img-wrapper {
      position: relative;
      padding-top: 140%;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
    .introduce {
      margin-top: 4px;
      text-align: center;
      .title {
        max-width: 100%;
        color: $color-text-d;
        font-size: $font-size-small;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .rate {
        .star {
          display: inline-block;
          margin-right: 2px;
        }
        .score {
          font-size: $font-size-small-s;
          color: $color-text-l;
        }
      }
    }
  }
}
</style>
