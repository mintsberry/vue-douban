<template>
  <div id="app">
    <router-view></router-view>
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
