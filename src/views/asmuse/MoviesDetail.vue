<template>
  <div class="movies-detail">
    Detail
  </div>
</template>
<script>
import { getDetail } from '../../common/api/amuse'
export default {
  created () {
    this._getDetail()
  },
  methods: {
    _getDetail () {
      let id = this.$route.params.id
      getDetail(id)
        .then((resp) => {
          console.log(resp)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.movies-detail {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
}
</style>
