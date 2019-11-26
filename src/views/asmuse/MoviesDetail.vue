<template>
  <div class="movies-detail">
    <Detail
      :data='data'
      :title="'电影'"
      :rating="rating"
      :staff="staff"
      :hotInterests="hotInterests"
      :related="related"
      v-if="data"
      @clickItem="toMovieDetail"
      @back="goMovie"
      >
      </Detail>
  </div>
</template>
<script>
import { getDetail, getRating, getStaff, gethotInterests, getRelated } from '../../common/api/amuse'
import Detail from '../../components/Detail.vue'
export default {
  components: {
    Detail
  },
  created () {
    this._initMovieDetail()
  },
  data () {
    return {
      data: null,
      rating: null,
      staff: null,
      hotInterests: null,
      related: null
    }
  },
  watch: {
    $route () {
      this._initMovieDetail()
    }
  },
  methods: {
    toMovieDetail (id) {
      this.$router.push({ path: `${id}` })
    },
    goMovie () {
      this.$router.push({ path: '/amuse/movies' })
      // this.$router.go(-1)
    },
    _initMovieDetail () {
      this._getDetail()
      this._getRating()
      this._getStaff()
      this._gethotInterests()
      this._getRelated()
    },
    _getDetail () {
      let id = this.$route.params.id
      getDetail(id)
        .then((resp) => {
          this.data = resp
        })
    },
    _getRating () {
      let id = this.$route.params.id
      getRating(id)
        .then((resp) => {
          this.rating = resp
        })
    },
    _getStaff () {
      let id = this.$route.params.id
      getStaff(id)
        .then((resp) => {
          this._normalizeStaff(resp)
        })
    },
    _gethotInterests () {
      let id = this.$route.params.id
      gethotInterests(id)
        .then((resp) => {
          this.hotInterests = resp
        })
    },
    _getRelated () {
      let id = this.$route.params.id
      getRelated(id)
        .then((resp) => {
          this.related = resp
        })
    },
    _normalizeStaff (info) {
      let staff = {
        person: [],
        count: info.total
      }
      staff.person.push(...info.directors)
      staff.person.push(...info.actors)
      this.staff = staff
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
