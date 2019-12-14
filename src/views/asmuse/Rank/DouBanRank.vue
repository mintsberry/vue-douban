<template>
  <div class="douban-rank">
    <AppBar :title="'豆瓣榜单'" :left="'arrow_left'" @left="back" ></AppBar>
    <NavHeader :data="navData" :active='index' @clickItem="changeActive"></NavHeader>
    <RankContent :data='rank[index]' v-if="rank"></RankContent>
  </div>
</template>
<script>
import AppBar from '../../../components/AppBar.vue'
import RankContent from './RankContent.vue'
import { getMoviesRank, getTvRank, getBookRank } from '../../../common/api/rank'
import NavHeader from './NavHeader.vue'
export default {
  components: {
    AppBar,
    NavHeader,
    RankContent
  },
  data () {
    return {
      navData: ['电影', '电视', '读书'],
      rank: new Array(4),
      index: null
    }
  },
  created () {
    this._getIndex()
    this._getRank()
  },
  methods: {
    back () {
      this.$router.back()
    },
    changeActive (index) {
      this.index = index
    },
    _getRank () {
      getMoviesRank().then((resp) => {
        this.rank.splice(0, 1, resp)
      })
      getTvRank().then(resp => {
        this.rank.splice(1, 1, resp)
      })
      getBookRank().then(resp => {
        this.rank.splice(2, 1, resp)
      })
    },
    _getIndex () {
      let category = this.$route.params.category
      if (category === 'moveis') {
        this.index = 0
      }
    }
  }
}
</script>
<style lang="scss">
.douban-rank {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  padding: 0 !important;
  background-color: white;
  .app-bar {
    color: #222;
  }
}
</style>
