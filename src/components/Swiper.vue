<template>
  <div class="swiper" ref="swiper">
    <ul class="group" ref="ul">
      <li v-for="(item, index) in data" :key="index" class="item">
        <img :src="item" alt="">
      </li>
    </ul>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :key="index" :class="{active : currentIndex === index}">
      </span>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    data: {
      type: Array,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentIndex: 0,
      dots: null
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()
    }, 20)
  },
  methods: {
    _setSliderWidth () {
      let width = document.querySelector('.swiper').clientWidth
      let totalWidth = width * (this.data.length + 2)
      let li = this.$refs.ul.children
      for (let i = 0; i < li.length; i++) {
        li[i].style.width = width + 'px'
      }
      this.$refs.ul.style.width = totalWidth + 'px'
    },
    _initDots () {
      this.dots = new Array(this.data.length)
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.swiper, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: true,
          threshold: 0.3
        }
      })
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.currentIndex = pageIndex
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper {
  position: relative;
  height: 100%;
  .group {
    height: 100%;
    display: -webkit-box;
    .item {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .dots {
    position: absolute;
    bottom: 4px;
    left: 4px;
    .dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-right: 4px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.4);
      &.active {
        background-color: rgba(255, 255, 255, .8);
      }
    }
  }
}
</style>
