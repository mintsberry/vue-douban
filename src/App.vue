<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <BottomNavTab/>
  </div>
</template>
<script>
import BottomNavTab from './views/BottomNavTab.vue'
export default {
  components: {
    BottomNavTab
  }
}
</script>
<style lang="scss">
#app {
  background: white;
}
</style>
