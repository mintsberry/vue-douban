<template>
  <div class="movies">
    <ul class="enterances">
      <li class="item" v-for="(item, index) in entrances" :key="index">
        <img :src="item.icon" alt="" width="36" height="36">
        <p class="text">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getMovies, getEventVideos } from '../../common/api/amuse'
export default {
  created () {
    this._getMovies()
    this._getEventVideos()
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
    _getEventVideos () {
      getEventVideos()
        .then(resp => {
          console.log(resp)
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
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.movies {
  .enterances {
    display: flex;
    .item {
      flex: 1;
      text-align: center;
      img {
        margin-bottom: 8px;
      }
      .text {
        font-size: $font-size-medium;
        color: $color-text;
      }
    }
  }

}
</style>
