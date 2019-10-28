<template>
  <div class="index-header">
    <TabBar :tabs='tabs'
    :fontColor = "'#0E0E0E'"
    :underColor = "'#FE2205'"
    />
    <div class="icon-group">
      <i class="icon icon-search"></i>
    </div>
  </div>
</template>
<script>
import TabBar from './TabBar.vue'
export default {
  components: {
    TabBar
  },
  data () {
    return {
      tabs: [
        { text: '电影', url: 'movies' },
        { text: '电视', url: 'tv' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.index-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  // background-color: $color-theme;
  .tab-bar {
    margin-left: 16px;
    flex: 1;
    color: #000;
  }
  .icon-group {
    box-shadow: -1px 0 1px 0px rgba(255,255,255,.2);
    padding-left: 4px;
    .icon {
      padding-right: 16px;
      font-size: $font-size-large-x;
      color: white;
    }
  }

}
</style>
