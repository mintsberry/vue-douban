<template>
  <div class="tab-bar">
    <div class="tabs">
      <router-link :to="{name: item.url}" tag="div" v-for="(item, index) in tabs" :key="index" class="tab" append>
        <span>{{item.text}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.tab-bar {
  display: inline-block;
  width: 100%;
  height: 48px;
  overflow: hidden;
  .tabs {
    display: -webkit-box;
    height: 100%;
    align-items: center;
    .tab {
      padding: 10px;
      padding-left: 0px;
      span {
        font-size: $font-size-medium;
        padding-bottom: 4px;
        color: white;
        transition: all .2s ease;
      }
      &.active {
        span {
          font-size: $font-size-medium-x;
          border-bottom: 2px solid white;
        }
      }
    }
  }
}
</style>
