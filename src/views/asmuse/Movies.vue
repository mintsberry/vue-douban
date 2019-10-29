<template>
  <div class="movies">
    Movies
  </div>
</template>
<script>
import { getMovies } from '../../common/api/amuse'
export default {
  created () {
    this._getMovies()
  },
  data () {
    return {
      entrances: []
    }
  },
  methods: {
    _getMovies () {
      getMovies()
        .then((resp) => {
          this._normalizeItem(resp)
        })
    },
    _normalizeItem (resp) {
      let modules = resp.modules
      this._initEntrances(modules[0])
    },
    _initEntrances (item) {
      this.entrances = item.data.subject_entraces
    }
  }
}
</script>
