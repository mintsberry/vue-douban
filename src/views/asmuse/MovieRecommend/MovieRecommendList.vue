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
  </div>
</template>
<script>
import { getMoviesRecommend } from '../../../common/api/amuse'
import BScroll from 'better-scroll'
const requestParam = {
  tags: [],
  score_range: '0, 10',
  quick_marked: false,
  start: 0,
  count: 8
}
export default {
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
      })
  },
  watch: {
    top_tags () {
      this.$nextTick(() => {
        let ul = this.$refs.top.firstElementChild
        let li = ul.children
        let width = 0
        for (let i = 0; i < li.length; i++) {
          width += li[i].clientWidth + 2
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
            padding: 4px 12px;
            margin-right: 2px;
            line-height: 14px;
          &.active {
            background-color: #00C5AA;
            border-radius: 12px;
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
}
</style>
