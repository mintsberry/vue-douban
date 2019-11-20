<template>
  <div class="app-bar">
    <span class="app-bar-l" @click="clickLeft">
      <i :class="['icon',`icon-${left}`]"></i>
    </span>
    <h1>{{title}}</h1>
    <span class="app-bar-r">
      <i :class="['icon', `icon-${right}`]"></i>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickLeft () {
      this.$emit('left')
    }
  }
}
</script>
<style lang='scss' scoped>
.app-bar {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 14px;
  z-index: 1;
  color: white;
  h1{
    display: flex;
    justify-content: center;
    flex: 1;
  }
  span {
    flex: 0 0 32px;
    padding: 0 16px;
    .icon {
      font-size: 24px
    }
  }
}
</style>
