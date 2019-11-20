<template>
  <div class="detail" :style="{ backgroundImage: `linear-gradient(#${data.color_scheme.primary_color_light}, #${data.color_scheme.primary_color_dark})`}">
    <AppBar :title="title" :left="'arrow_left'" @left="back"/>
    <div class="movie-content">
      <div class="top">
        <div class="left">
          <img width="84" height="112" :src="data.pic.large" alt="">
        </div>
        <div class="right">
          <div class="title">{{data.title}}</div>
          <div class="original-title">{{data.original_title}}({{data.year}})</div>
          <div class="band" v-if="data.honor_infos.length > 0">
            <span class="no">No.{{data.honor_infos[0].rank}}</span><span class="text">{{data.honor_infos[0].title}}</span>
          </div>
          <div class="info">
            <div>{{info}}</div>
            <div>{{data.pubdate[0]}}/片长: {{data.durations[0]}}</div>
          </div>
          <div class="btn-group">
            <span class="btn"><i class="icon icon-heart"></i>想看</span>
            <span class="btn"><i class="icon icon-star"></i>看过</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppBar from './AppBar.vue'
export default {
  components: {
    AppBar
  },
  props: {
    data: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    info () {
      let str = this.data.card_subtitle.split('/')
      return `${str[1]}/${str[2]}/上映时间:`
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.detail {
  height: 100%;
  .movie-content {
    padding: 16px;
    .top {
      display: flex;
      .left {
        width: 84px;
        margin-right: 16px;
        img {
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
      }
      .right {
        flex: 1;
        .title {
          font-weight: bold;
          font-size: $font-size-large;
          color: white;
        }
        .original-title {
          margin-top: 4px;
          color: white;
          font-size: $font-size-medium;
          line-height: 18px;
          word-break: break-all;
        }
        .band {
          margin-top: 8px;
          line-height: 14px;
          height: 18px;
          font-size: $font-size-small-s;
          .no {
            padding: 2px 4px;
            background-color: #ffcf8d;
            color: #9f610e;
            border-radius: 4px 0 0 4px;
          }
          .text {
            padding: 2px 4px;
            background-color: #565249;
            color: #f2c486;
            border-radius: 0 4px 4px 0;
          }
        }
        .info {
          margin-top: 4px;
          font-size: 12px;
          line-height: 16px;
          color: $color-text-ll;
        }
        .btn-group {
          margin-top: 4px;
          .btn {
            display: inline-block;
            width: 40%;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background-color: white;
            border-radius: 4px;
            font-size: $font-size-medium;
            color: $color-text-d;
            font-weight: bold;
            &:last-child {
              // float: right;
              margin-left: 6%;
            }
            .icon {
              margin-right: 2px;
              font-size: $font-size-medium;
              color: $color-theme;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
