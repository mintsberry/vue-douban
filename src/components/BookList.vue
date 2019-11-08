<template>
  <div ref="wrapper" class="book-list">
    <ul class="list" ref="list">
      <li v-for="(item,index) in data" :key="index" class="item" :style="{ width : width * 0.96 + 'px' }">
        <div class="img-box">
          <img :src="item.cover.url" alt="">
        </div>
        <div class="text">
          <div class="title">{{item.title}}</div>
          <div class="info">
            <span class="want">{{item.wish_count}} 人想看</span>
            /
            <span class="author">{{item.author[0]}}</span>
          </div>
          <div class="desc">
            {{item.description}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      width: 0
    }
  },
  mounted () {
    this.width = this.$refs.wrapper.clientWidth
  },
  watch: {
    data () {
      this.$nextTick(() => {
        let item = this.$refs.list.children[0]
        let itemWidth = item.clientWidth
        let countWidth = this.data.length * itemWidth
        this.$refs.list.style.width = countWidth + 'px'
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          eventPassthrough: 'vertical'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.book-list {
  overflow: hidden;
  .list {
    display: flex;
    .item {
      display: -webkit-box;
      flex-shrink:0;
      // width: 94%;
      // width: 340px;
      .img-box {
        position: relative;
        width: 80px;
        height: 112px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
      .text {
        display: flex;
        height: 112px;
        box-sizing: border-box;
        padding: 8px;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        .title {
          font-size: $font-size-medium-x;
          color: black;
        }
        .info {
          font-size: $font-size-small;
          color: $color-text-l;
        }
        .desc {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
          background-color: #eee;
          font-size: $font-size-medium;
          border-radius: 4px;
          color: $color-text;
        }
      }
    }
  }
}
</style>
