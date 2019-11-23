<template>
  <div class="movie-list" ref="list">
    <div class="movie-wrapper" ref="box">
      <div class="movie-box" ref="wrapper">
        <div class="img-box" v-for="(item, index) in movies" :key="index">
          <div class="img-wrapper" @click="toMovieDetail(item.id)">
            <img :src="item.cover.url" alt="" v-if="item.cover">
            <img :src="item.pic.large" alt="" v-if="item.pic">
            <span class="like"></span>
          </div>
          <span class="text">{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    movies: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.initScroll()
  },
  watch: {
    movies () {
      this.initScroll()
    }
  },
  methods: {
    toMovieDetail (id) {
      this.$router.push({ path: `movies/${id}` })
    },
    initScroll () {
      setTimeout(() => {
        let boxWidth = document.querySelector('.content').clientWidth - 32
        let el = this.$refs.wrapper.children[0]
        let length = this.$refs.wrapper.childElementCount
        let offWidth = parseInt(getComputedStyle(el, null).marginRight) + el.clientWidth
        let totalWidth = length * offWidth + parseInt(getComputedStyle(el, null).marginRight)
        this.$refs.box.style.width = totalWidth + 'px'
        this.$refs.wrapper.style.width = boxWidth + 'px'
        this.scroll = new BScroll(this.$refs.list, {
          scrollX: true,
          eventPassthrough: 'vertical'
        })
        this.scroll.scrollTo(0, 0, 700, 'ease')
      }, 20)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.movie-list {
  width: 100%;
  // overflow: hidden;
  .movie-wrapper {
    .movie-box {
        display: -webkit-box;
        width: 100%;
      .img-box {
        width: 28%;
        margin-right: 2%;
        text-align: center;
        .img-wrapper {
          position: relative;
          margin-bottom: 4px;
          padding-top: 140%;
          width: 100%;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
          .like {
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 24px;
            background-image: url(../common/images/like.png);
            background-size: cover;
          }
        }
        .text {
          display: inline-block;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: $font-size-small;
          color: $color-dialog-background;
        }
      }
    }
  }
}
</style>
