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
  },
  mounted () {
    if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
      let bodyTag = document.getElementsByTagName('body')[0]
      bodyTag.style.height = screen.height + 'px'
    }
    setTimeout(() => {
      window.scrollTo(0, 100)
    }, 1000)
  }
}
</script>
<style lang="scss">
#app {
  background: white;
}
</style>
