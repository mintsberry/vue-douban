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
        click: true
      })
    }
  }
}
</script>
