<template>
  <div class="movie-recommend-list">
    <div class="top-tags">
      <ul class="tabs">
        <li v-for="(tab, index) in top_tags" :key="index" class="tab" @click="addTag">
          {{tab}}
        </li>
      </ul>
      <div class="filter">
        <i class="icon icon-filter"></i>
        <span class="text">筛选</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getMoviesRecommend } from '../../../common/api/amuse'
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
  methods: {
    addTag (el) {
      el.target.classList.toggle('active')
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
    .filter {
      font-size: $font-size-medium;
      width: 50px;
      padding-top: 4px;
      margin-left: 8px;
      .text {
        vertical-align: top;
      }
    }
  }
}
</style>
