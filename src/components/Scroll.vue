<template>
  <div ref="scroll">
    <slot>

    </slot>
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
    pullup: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    },
    isPropagation: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  watch: {
    data () {
      setTimeout(() => {
        this.scroll.refresh()
      }, 20)
    }
  },
  methods: {
    _initScroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        stopPropagation: !this.isPropagation,
        probeType: this.probeType,
        bounce: this.bounce
      })
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }
      if (this.listenScroll) {
        // let me = this
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
    },
    refresh () {
      this.scroll.refresh()
    },
    backTop () {
      this.scroll.scrollTo(0, 0, 1000, 'easing')
    }
  }
}
</script>
