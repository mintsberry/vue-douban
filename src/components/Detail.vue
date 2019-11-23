<template>
  <div class="detail" :style="{ backgroundImage: `linear-gradient(#${data.color_scheme.primary_color_light}, #${data.color_scheme.primary_color_dark})`}">
      <AppBar :title="title" :left="'arrow_left'" @left="back"/>
      <Scroll ref="scroll" :isPropagation="false"   class="movie-content" :data="integrate">
        <div class="wrapper">
          <div class="desc">
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
          <div class="rating" v-if="data.rating.count !== 0 && rating">
            <div class="top">
              <span>豆瓣评分™ </span>
              <span><i class="icon icon-arrow_right"></i></span>
            </div>
            <div class="middle">
              <div class="rate">
                <div>{{data.rating.value}}</div>
                <Star :score="data.rating.value / 2" size='24'></Star>
              </div>
              <StarRatingList :stats="rating.stats" v-if="rating"/>
            </div>
            <div class="bottom">
              <span>{{rating.done_count | simplifyNum}}人看过</span>
              <span>{{rating.wish_count | simplifyNum}}人想看</span>
            </div>
          </div>
          <div class="tags" ref="tags">
            <ul class="list">
              <span class="title">所属频道</span>
              <span class="tag" v-for="(tag, index) in data.tags" :key="index">
                {{tag.name}}
              </span>
            </ul>
          </div>
          <div class="intro" @click="expandText">
            <div class="title">简介<span class="icon icon-arrow_down" v-if="isOverFlow"></span></div>
            <span class="text" ref="intro">{{data.intro}}</span>
          </div>
          <div class="actor" v-if="staff">
            <div class="title">演职表<span class="all">全部<i class="icon-arrow_right"></i></span></div>
            <ActorsList :data="staff.person"></ActorsList>
          </div>
          <div class="hot_interests" v-if="hotInterests">
            <div class="title">短评<span class="all">全部{{hotInterests.total}}<i class="icon-arrow_right"></i></span></div>
            <ul class="comment">
              <li v-for="(item, index) in hotInterests.interests" :key="index" class="item">
                <div class="top">
                  <img :src="item.user.avatar" alt="" srcset="" width="24" height="24">
                  <div class="user_info">
                    <div class="name">{{item.user.name}}</div>
                    <Star :size="24" :score="item.rating.value / 2"></Star> <span class="time">{{item.create_time}}</span>
                  </div>
                </div>
                <div class="middle">
                  {{item.comment}}
                </div>
                <div class="bottom">
                  <i>
                    <svg t="1574520379562" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3263" width="24" height="24"><path d="M345.6 529.066667v213.333333c0 25.6-17.066667 42.666667-42.666667 42.666667h-42.666666c-25.6 0-42.666667-17.066667-42.666667-42.666667v-256c0-25.6 17.066667-42.666667 42.666667-42.666667h85.333333c51.2 0 98.133333-29.866667 115.2-76.8l38.4-98.133333c12.8-21.333333 34.133333-34.133333 55.466667-25.6l25.6 8.533333c34.133333 12.8 55.466667 46.933333 46.933333 85.333334l-17.066667 81.066666c-4.266667 12.8 4.266667 21.333333 17.066667 25.6h136.533333c25.6 0 42.666667 17.066667 42.666667 42.666667v8.533333l-64 256c-4.266667 17.066667-21.333333 34.133333-42.666667 34.133334h-221.866666c-12.8 0-21.333333-8.533333-21.333334-21.333334s8.533333-21.333333 21.333334-21.333333h221.866666l55.466667-221.866667 8.533333-34.133333h-157.866666c-25.6 0-42.666667-17.066667-42.666667-42.666667v-8.533333l25.6-106.666667c4.266667-12.8-4.266667-29.866667-21.333333-34.133333-12.8-4.266667-29.866667 4.266667-34.133334 17.066667L503.466667 384c-25.6 64-89.6 106.666667-157.866667 106.666667v38.4z m-85.333333-21.333334v213.333334c0 12.8 8.533333 21.333333 21.333333 21.333333s21.333333-8.533333 21.333333-21.333333v-213.333334c0-12.8-8.533333-21.333333-21.333333-21.333333-8.533333 0-21.333333 8.533333-21.333333 21.333333z" p-id="3264" fill="rgba(255,255,255,0.5)"></path>
                    </svg>
                  </i><span class="count">{{item.vote_count}}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="relate" v-if="related">
            <div class="title">喜欢这部电影的也喜欢<span class="all">全部{{hotInterests.total}}<i class="icon-arrow_right"></i></span></div>
            <MovieList :movies="related.subjects"/>
          </div>
        </div>
      </Scroll>
  </div>
</template>
<script>
import AppBar from './AppBar.vue'
import Star from './star/Star.vue'
import StarRatingList from './StarRatingList.vue'
import ActorsList from './ActorsList.vue'
import MovieList from './MovieList.vue'
import Scroll from './Scroll.vue'
import BScroll from 'better-scroll'
export default {
  components: {
    StarRatingList,
    Scroll,
    ActorsList,
    MovieList,
    AppBar,
    Star
  },
  props: {
    data: {
      type: Object,
      default: null
    },
    rating: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    staff: {
      type: Object,
      default: null
    },
    hotInterests: {
      type: Object,
      default: null
    },
    related: {
      type: Object,
      default: null
    }
  },
  filters: {
    simplifyNum (val) {
      if (val > 1000) {
        let str = (val / 10000).toFixed(1)
        return `${str}万`
      }
      return 'val'
    }
  },
  data () {
    return {
      isOverFlow: false
    }
  },
  computed: {
    info () {
      let str = this.data.card_subtitle.split('/')
      return `${str[1]}/${str[2]}/上映时间:`
    },
    integrate () {
      return [this.data, this.rating, this.staff, this.related, this.hotInterests]
    }
  },
  mounted () {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.tags, {
        scrollX: true,
        scrollY: false
      })
    }, 20)
    this._initDescText()
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    expandText () {
      this.$refs.intro.style.webkitLineClamp = 'initial'
      this.$refs.scroll.refresh()
      this.isOverFlow = false
    },
    _initDescText () {
      let intro = this.$refs.intro
      if (intro.getClientRects().length > 4) {
        this.isOverFlow = true
        intro.style.display = '-webkit-box'
      }
    }
  }
}
</script>
<style lang="scss" >
@import '../common/scss/variable.scss';
.detail {
  height: 100%;
  .movie-content {
    position: fixed;
    overflow: hidden;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    .title {
      font-size: $font-size-medium-x;
      font-weight: bold;
      color: white;
      .all {
        font-weight: normal;
        float: right;
        font-size: $font-size-small;
        line-height: 16px;
        color: rgba(255, 255, 255, 0.4);
      }
    }
    .desc {
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
    .rating {
      margin-top: 16px;
      padding: 8px 16px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      color: white;
      clear: both;
      .top {
        font-size: $font-size-small;
        span:last-child {
          float: right;
        }
      }
      .middle {
        display: flex;
        justify-content: center;
        margin-top: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        .rate {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          font-size: $font-size-large-x;
          margin-right: 8px;
          .star {
            margin-top: 4px;
          }
        }
      }
      .bottom {
        margin-top: 8px;
        color: rgba(255, 255, 255, 0.5);
        font-size: $font-size-small-s;
        float: right;
        span:first-child {
          margin-right: 4px;
        }
      }
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
    .tags {
      margin-top: 16px;
      .list {
        white-space: nowrap;
        float: left;
        .title {
          margin-right: 6px;
          font-size: 13px;
          line-height: 16px;
          height: 16px;
          vertical-align: top;
          color: rgba(255, 255, 255, 0.4);
        }
        .tag {
          margin-right: 6px;
          padding: 4px 8px;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.2);
          color: white;
          line-height: 16px;
          font-size: $font-size-medium;
          border-radius: 16px;
        }
      }
      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }
    .intro {
      margin-top: 16px;
      .title {
        margin-bottom: 8px;
        font-size: $font-size-medium-x;
        font-weight: bold;
        color: white;
        .icon {
          float: right;
        }
      }
      .text {
        color: white;
        font-size: $font-size-medium;
        line-height: 24px;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
    }
    .actor {
      margin-top: 32px;
      .title {
        font-size: $font-size-medium-x;
        font-weight: bold;
        color: white;
        .all {
          font-weight: normal;
          float: right;
          font-size: $font-size-small;
          line-height: 16px;
          color: rgba(255, 255, 255, 0.4);
        }
      }
    }
    .hot_interests {
      margin-top: 32px;
      padding: 16px;
      background-color: rgba(0, 0, 0, .2);
      border-radius: 16px;
      .comment {
        margin-top: 16px;
        color: white;
        font-size: $font-size-medium;
        .item {
          padding-bottom: 12px;
          margin-top: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          .top {
            img {
              border-radius: 50%;
            }
            .user_info {
              display: inline-block;
              margin-left: 8px;
              .name {
                font-weight: bold;
              }
              .star {
                display: inline-block;
              }
              .time {
                font-size: $font-size-small;
                color: rgba(255, 255, 255, 0.4);
              }
            }
          }
          .middle {
            margin-top: 12px;
            line-height: 24px
          }
          .bottom {
            margin-top: 8px;
            font-size: $font-size-small;
            color: rgba(255, 255, 255, 0.4);
            .count {
              line-height: 24px;
              vertical-align: top;
            }
          }
        }
      }
    }
    .wrapper:last-child {
      padding-bottom: 16px;
    }
    .relate {
      margin-top: 32px;
      .movie-list {
        margin-top: 16px;
        .text{
          color: white;
        }
      }
    }
  }
}
</style>
