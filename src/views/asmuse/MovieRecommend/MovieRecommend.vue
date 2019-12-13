<template>
  <div class="movie-recommend" @click="$emit('clickItem', data.id)">
    <div class="cover">
      <img :src="data.pic.large" class="pic" height="112" width="84">
      <div class="swiper-wrapper">
        <Swiper :data="data.photos" v-if="data.photos[0]"/>
        <i class="icon icon-planet" v-if="!data.photos[0]"></i>
      </div>
    </div>
    <div class="content">
      <div class="desc">
        <div class="left">
          <div class="title">{{data.title}}<span class="year">({{data.year}})</span></div>
          <div class="rating" v-if="data.rating.value !== 0">
            <Star :score='data.rating.value / 2' size='24' class="star"></Star>
            <span class="score">{{data.rating.value}}</span>
          </div>
        </div>
        <div class="right">
          <div class="icon"><i class="icon-heart"></i></div>
          <div class="text">想看</div>
        </div>
      </div>
      <div class="comment" v-if="data.comment">
        {{data.comment.comment}}<span class="user"> --{{data.comment.user.name}}</span>
      </div>
      <div class="tags" v-if="data.tags[0]">
        {{data.tags[0].name}}
      </div>
    </div>
  </div>
</template>
<script>
import Star from '../../../components/star/Star.vue'
import Swiper from '../../../components/Swiper.vue'
export default {
  components: {
    Swiper,
    Star
  },
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
.movie-recommend {
  .cover {
    display: flex;
    img {
      border-radius: 4px;
    }
    .pic {
      width: 84px;
      margin-right: 16px;
      box-shadow: 2px 4px 4px 2px #eee;
    }
    .swiper-wrapper {
      position: relative;
      overflow: hidden;
      flex: 1;
      background-color: #eee;
      border-radius: 4px;
      height: 112px;
      img {
        width: 100%;
        height: 112px;
        object-fit: cover;
      }
      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 32px;
        transform: translate(-50%, -50%);
        color: #aaa;
      }
    }
  }
  .content {
    margin-top: 4px;
    .desc {
      display: flex;
      height: 48px;
      align-items: center;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        flex: 1;
        .title {
          font-size: $font-size-medium-x;
          font-weight: bold;
          color: $color-text;
          .year {
            font-weight: normal;
            color: $color-text-l;
          }
        }
        .rating {
          padding-top: 4px;
          .star {
            display: inline-block;
            margin-right: 4px;
          }
          .score {
            font-size: $font-size-small-s;
            color: $color-text-l;
          }
        }
        .info {
          font-size: $font-size-small;
          line-height: 14px;
        }
      }
      .right {
        // padding: 8px 0;
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
    .comment {
      margin-top: 4px;
      font-size: $font-size-small;
      color: $color-text-l;
      line-height: 16px
    }
    .tags {
      display: inline-block;
      margin-top: 8px;
      padding: 4px 8px;
      background-color: #F6F0E2;
      border-radius: 8px;
      color: #735C3D;
      font-size: $font-size-small;
    }
  }
}
</style>
