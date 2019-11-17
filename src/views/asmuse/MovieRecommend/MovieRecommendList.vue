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
  </div>
</template>
<script>
import { getMoviesRecommend } from '../../../common/api/amuse'
import BScroll from 'better-scroll'
import MovieCard from './MovieCard.vue'
import MovieRecommend from './MovieRecommend.vue'
const requestParam = {
  tags: [],
  score_range: '0, 10',
  quick_marked: false,
  start: 0,
  count: 8
}
export default {
  components: {
    MovieCard,
    MovieRecommend
  },
  data () {
    return {
      param: Object.assign({}, requestParam),
      top_tags: [],
      tags: [],
      items: []
    }
  },
  created () {
    getMoviesRecommend(this.param)
      .then((resp) => {
        console.log(resp)
        this.tags = resp.tags
        this.top_tags = resp.recommend_tags
        this.items = resp.items
        this.$emit('refresh')
      })
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
    }
  },
  methods: {
    addTag (el) {
      let flag = el.target.classList.toggle('active')
      let tag = el.target.innerText
      let tags = this.param.tags
      if (flag) {
        tags.push(tag)
      } else {
        tags.splice(tags.indexOf(tag), 1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../common/scss/variable.scss';
.movie-recommend-list {
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
}
</style>
