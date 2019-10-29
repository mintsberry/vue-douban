<template>
  <div class="amuse">
    <AmuseHeader></AmuseHeader>
    <keep-alive>
      <router-view class="content"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import AmuseHeader from '../../components/AmuseHeader.vue'
export default {
  components: {
    AmuseHeader
  }
}
</script>
<style lang="scss" scoped>
.amuse {
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
    padding: 16px;
  }
}
</style>
