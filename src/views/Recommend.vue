<template>
  <div class="recommend" ref="recommend" >
    <div class=article-list>
      <ul>
        <li v-for="item in recommends" :key="item.id" class="article">
          <div class="text">
            <h3 class="title">{{item.title}}</h3><span class="abstract" v-html="item.abstract"></span>
          </div>
          <div class="img-group" v-if="item.photos.length">
            <div v-for="(photo, index) in item.photos" :key="index" class="img-box" >
              <img :src="photo.image.large.url" alt=""  :key="index">
            </div>
          </div>
          <div class="article-info">
            <img :src="item.author.avatar" alt="" width="24" height="24" class="avatar">
            <span class="name">{{item.author.name}}</span>
            <span class="comments">{{item.comments_count}}评论</span>
            <span class="time"></span>
          </div>
        </li>
      </ul>
      <Loading v-show="isMore"></Loading>
    </div>
  </div>
</template>
<script>
import { getRrecommend } from '../common/api/index'
import BScroll from 'better-scroll'
import Loading from '../components/loading/Loading.vue'
export default {
  components: {
    Loading
  },
  data () {
    return {
      recommends: [],
      isMore: false
    }
  },
  watch: {
    recommends () {
      setTimeout(() => {
        this.isMore = true
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
    getMore () {
      if (this.isGeting) {
        return
      }
      let start = this.recommends.length
      let count = 10
      this.isGeting = true
      getRrecommend({ start, count })
        .then((resp) => {
          this.recommends = this.recommends.concat(this._normalize(resp.items))
          this.isGeting = false
        })
    },
    _initScroll () {
      this.scroll = new BScroll(this.$refs.recommend, {
        click: this.click
      })
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          this.getMore()
        }
      })
    },
    _normalize (list) {
      let ret = []
      list.forEach(el => {
        if (el.id) {
          ret.push({
            id: el.id,
            title: el.content.title,
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
  overflow: hidden;
  .article-list {
    padding: 16px 16px 0 16px;
    // margin-bottom: 16px;
    .article {
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
      margin-bottom: 8px;
      &:last-child {
        border-bottom: none;
      }
      .img-group {
        display: flex;
        flex-flow:row wrap;
        // justify-content: center;
        margin-bottom: 8px;
        .img-box {
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 32%;
          height: 0;
          margin: 2px;
          padding-bottom: 33%;
          border-radius: 8px;
          img {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
      .text {
        margin-bottom: 8px;
        font-size: $font-size-medium;
        .title {
          display: inline-block;
          font-size: $font-size-medium;
          font-weight: 700;
          margin-right: 8px;
        }
        .abstract {
          line-height: 16px;
          color: $color-text;
        }
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
