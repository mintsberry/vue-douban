<template>
  <div class="recommend" ref="recommend">
    <ul  class=article-list>
      <li v-for="item in recommends" :key="item.id" class="article">
        <div class="img-group">
          <div v-for="(photo, index) in item.photos" :key="index" class="img" :style="{ backgroundImage: `url(${photo.image.large.url})` }"></div>
          <!-- <img :src="photo.image.large.url" alt="" v-for="(photo, index) in item.photos" :key="index"> -->
        </div>
        <div class="abstract" v-html="item.abstract"></div>
        <div class="article-info">
          <img :src="item.author.avatar" alt="" width="24" height="24" class="avatar">
          <span class="name">{{item.author.name}}</span>
          <span class="comments">{{item.comments_count}}评论</span>
          <span class="time"></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getRrecommend } from '../common/api/index'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      recommends: null
    }
  },
  watch: {
    recommends () {
      setTimeout(() => {
        this.scroll.refresh()
      }, 20)
    }
  },
  created () {
    getRrecommend({ start: 0, count: 20 })
      .then((resp) => {
        this.recommends = this._normalize(resp.items)
      })
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      this.scroll = new BScroll(this.$refs.recommend, {
        click: this.click
      })
    },
    _normalize (list) {
      let ret = []
      list.forEach(el => {
        if (el.id) {
          ret.push({
            id: el.id,
            abstract: el.content.abstract,
            photos: el.content.photos,
            comments_count: el.comments_count,
            author: el.content.author
          })
        }
      })
      return ret
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.recommend {
  padding: 16px;
  overflow: hidden;
  .article-list {
    margin-bottom: 16px;
    .article {
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
      margin-bottom: 8px;
      .img-group {
        display: flex;
        flex-flow:row wrap;
        justify-content: center;
        margin-bottom: 8px;
        .img {
          box-sizing: border-box;
          margin-right: 4px;
          padding-top: 33%;
          width: 31%;
          background-size: contain;
          box-sizing: border-box;
          border-radius: 8px;
        }
      }
      .abstract {
        font-size: $font-size-medium;
        color: $color-text;
        margin-bottom: 6px;
      }
      .article-info {
        height: 24px;
        .avatar {
          margin-right: 8px;
          border-radius: 50%;
        }
        .name {
          margin-right: 8px;
          font-size: $font-size-small;
          color: $color-text-d;
          line-height: 24px;
          vertical-align: top;
        }
        .comments {
          font-size: $font-size-small;
          color: $color-text-l;
          line-height: 24px;
          vertical-align: top;
        }
      }
    }
  }
}
</style>
