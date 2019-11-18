<template>
  <div class="movie-recommend-list">
    <div class="top-tags">
      <div class="tags" ref="top">
        <ul class="tabs">
          <li v-for="(tab, index) in top_tags" :key="index" class="tab" @click="addTag">
            {{tab}}
          </li>
        </ul>
      </div>
      <div class="filter">
        <i class="icon icon-filter"></i>
        <span class="text">筛选</span>
      </div>
    </div>
    <ul class="recommend">
      <li v-for="(item, index) in items" :key="index" class="item">
        <MovieCard v-if="item.card === 'chart' || item.card === 'doulist'" :data="item"></MovieCard>
        <MovieRecommend v-if="item.card === 'subject'" :data="item"/>
      </li>
    </ul>
    <Loading v-show="isMore" class="loading"></Loading>
  </div>
</template>
<script>
import { getMoviesRecommend } from '../../../common/api/amuse'
import BScroll from 'better-scroll'
import MovieCard from './MovieCard.vue'
import MovieRecommend from './MovieRecommend.vue'
import Loading from '../../../components/loading/Loading.vue'
const requestParam = {
  tags: '',
  score_range: '0, 10',
  quick_marked: false,
  start: 0,
  count: 8
}
export default {
  components: {
    MovieCard,
    Loading,
    MovieRecommend
  },
  data () {
    return {
      param: Object.assign({}, requestParam),
      top_tags: [],
      tags: [],
      items: [],
      isMore: false
    }
  },
  created () {
    this.init()
  },
  watch: {
    top_tags () {
      this.$nextTick(() => {
        let ul = this.$refs.top.firstElementChild
        let li = ul.children
        let width = 0
        for (let i = 0; i < li.length; i++) {
          width += li[i].clientWidth + 8
        }
        ul.style.width = width + 'px'
        this.topScroll = new BScroll(this.$refs.top, {
          scrollX: true
        })
      })
    },
    items () {
      this.$emit('refresh')
    },
    'param.tags': {
      deep: true,
      handler: function (newV, oldV) {
        this.param.start = 0
        getMoviesRecommend(this.param)
          .then((resp) => {
            this.items = resp.items
            this.param.start += this.param.count
            this.isMore = this.param.start < resp.total
          })
      }
    }
  },
  methods: {
    addTag (el) {
      let flag = el.target.classList.toggle('active')
      let tag = el.target.innerText
      let tags = this.param.tags.split(',')
      if (flag) {
        tags.push(tag)
      } else {
        tags.splice(tags.indexOf(tag), 1)
      }
      if (tags[0] === '') {
        tags.splice(0, 1)
      }
      this.param.tags = tags.join(',')
    },
    getMore () {
      if (this.isMore && !this.loading) {
        this.loading = true
        getMoviesRecommend(this.param)
          .then((resp) => {
            this.param.start += this.param.count
            this.items = this.items.concat(resp.items)
            this.loading = false
          })
      }
    },
    init () {
      getMoviesRecommend(this.param)
        .then((resp) => {
          this.tags = resp.tags
          this.top_tags = resp.recommend_tags
          this.items = resp.items
          this.param.start += this.param.count
          this.isMore = this.param.start < resp.total
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../common/scss/variable.scss';
.movie-recommend-list {
  min-height: 360px;
  .top-tags {
    display: flex;
    line-height: 20px;
    color: $color-text;
    .tags {
      flex: 1;
      overflow: hidden;
      .tabs {
        display: -webkit-box;
        flex: 1;
        overflow: hidden;
        font-size: $font-size-small;
        .tab {
            padding: 4px 8px;
            margin-right: 6px;
            line-height: 14px;
            border-radius: 12px;
            border: 1px solid #aaa;
          &.active {
            background-color: #00C5AA;
            border: 1px solid white;
            color: white;
          }
        }
      }
    }
    .filter {
      font-size: $font-size-medium;
      width: 50px;
      padding-top: 2px;
      margin-left: 8px;
      .text {
        vertical-align: top;
      }
    }
  }
  .recommend {
    .item {
      margin-top: 16px;
    }
  }
  .loading {
    margin-top: 16px;
  }
}
</style>
