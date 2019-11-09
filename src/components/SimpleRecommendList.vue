<template>
  <div class="recommend-list">
    <ul>
      <li class="item" v-for="(item, index) in data" :key="index">
        <div class="img-wrapper">
          <img :src="item.cover.url" alt="" width="84" height="112">
        </div>
        <div class="content">
          <div class="desc">
            <div class="left">
              <div class="title">{{item.title}}</div>
              <div class="rating">
                <Star :score='item.rating.value / 2' size='24' class="star"></Star>
                <span class="score">{{item.rating.value}}</span>
              </div>
              <div class="info">{{item.card_subtitle}}</div>
            </div>
            <div class="right">
              <div class="icon"><i class="icon-heart"></i></div>
              <div class="text">想读</div>
            </div>
          </div>
          <div class="tip">猜你喜欢</div>
        </div>
      </li>
    </ul>
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
.recommend-list{
  margin-bottom: 0;
  .item {
    display: flex;
    margin-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;
    color: $color-text-l;
    .img-wrapper {
      position: relative;
      margin-right: 8px;
      width: 84px;
      height: 112px;
      img {
        position: absolute;
        border-radius: 4px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .content {
      flex: 1;
      .desc {
        display: flex;
        height: 74px;
        align-items: center;
        .left {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;
          flex: 1;
          .title {
            font-size: $font-size-medium-x;
            font-weight: bold;
            color: $color-text;
          }
          .rating {
            .star {
              display: inline-block;
              margin-right: 4px;
            }
            .score {
              font-size: $font-size-small-s;
            }
          }
          .info {
            font-size: $font-size-small;
            line-height: 14px;
          }
        }
        .right {
          padding: 8px 0;
          width: 50px;
          text-align: center;
          border-left: 1px dotted #ccc;
          color: $color-theme;
          .icon {
            font-size: 24px
          }
          .text {
            font-size: $font-size-small;
          }
        }
      }
      .tip {
        box-sizing: border-box;
        margin-top: 4px;
        padding: 8px;
        width: 100%;
        height: 34px;
        background-color: #eee;
        border-radius: 4px;
        line-height: 18px;
        font-size: $font-size-medium;
      }
    }
  }
}
</style>
