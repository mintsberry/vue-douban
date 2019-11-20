<template>
  <div class="movies-detail">
    <Detail :data='data' :title="'电影'" v-if="data"></Detail>
  </div>
</template>
<script>
import { getDetail } from '../../common/api/amuse'
import Detail from '../../components/Detail.vue'
export default {
  components: {
    Detail
  },
  created () {
    this._getDetail()
  },
  data () {
    return {
      data: null
    }
  },
  methods: {
    _getDetail () {
      let id = this.$route.params.id
      getDetail(id)
        .then((resp) => {
          this.data = resp
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
