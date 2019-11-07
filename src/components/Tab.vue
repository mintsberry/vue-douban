<template>
  <div class="tab">
    <span
      v-for="(item, index) in titles"
      :key="index"
      :class="{ acitve: index === active}"
      @click="handleClick(index)"
    >{{item}}</span>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleClick (index) {
      this.active = index
      this.$emit('handleClick', index)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.tab {
  display: inline-block;
  font-size: $font-size-small;
  color: $color-highlight-background;
  margin-bottom: 16px;
  line-height: 24px;
  span {
    margin-right: 8px;
    padding: 4px;
    &.acitve {
      background-color: $color-theme;
      color: white;
      border-radius: 2px;
    }
  }
}
</style>
