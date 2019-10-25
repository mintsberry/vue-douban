<template>
  <div class="index">
    <IndexHeader/>
    <keep-alive>
      <router-view class="content"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import IndexHeader from '../components/IndexHeader.vue'
export default {
  components: {
    IndexHeader
  }
}
</script>
<style lang="scss" scoped>
.index {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 56px;
  .content {
    position: absolute;
    top: 56px;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
