<template>
  <div class="index">
    <IndexHeader/>
  </div>
</template>
<script>
import IndexHeader from '../components/IndexHeader.vue'
import { getRrecommend } from '../common/api/index'
export default {
  components: {
    IndexHeader
  },
  created () {
    getRrecommend({ start: 0, count: 20 })
      .then((resp) => {
        console.log(resp)
      })
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
}
</style>
