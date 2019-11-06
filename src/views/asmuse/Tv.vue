<template>
  <div class="tv">
    <section class="top">
      <Enterances :data = 'enterances'></Enterances>
    </section>
    <section class="modern">
      <h2 class="title">热播新剧</h2>
      <Tab :titles="subject" @handleClick="clickTab" ></Tab>
      <MovieList :movies = 'union[active]'/>
    </section>
  </div>
</template>
<script>
import { getTv } from '../../common/api/tv'
import Enterances from '../../components/Enterances.vue'
import MovieList from '../../components/MovieList.vue'
import Tab from '../../components/Tab.vue'
export default {
  components: {
    Enterances,
    MovieList,
    Tab
  },
  data () {
    return {
      data: [],
      active: 0,
      enterances: [],

      union: [],
      subject: [
        '综合',
        '国产剧',
        '英美剧',
        '日剧',
        '韩剧',
        '动画'
      ]
    }
  },
  created () {
    getTv().then((resp) => {
      this._normalizeItem(resp)
    })
  },
  methods: {
    clickTab (index) {
      this.active = index
    },
    _normalizeItem (resp) {
      let modules = resp.modules
      this.data = modules
      this._initEnterances(modules[0])
      // this._initShowing(modules[4])
      // this._initSoon(modules[5])
      this._initHot(modules[4])
      this._initHot(modules[5])
      this._initHot(modules[6])
      this._initHot(modules[7])
      this._initHot(modules[8])
      this._initHot(modules[9])
    },
    _initEnterances (item) {
      this.enterances = item.data.subject_entraces
    },
    _initHot (item) {
      this.union.push(item.data.subject_collection_boards[0].items)
    }
  }
}
</script>
<style lang="scss" scoped>
.tv {
  .title {
    margin-bottom: 16px;
  }
}
</style>
