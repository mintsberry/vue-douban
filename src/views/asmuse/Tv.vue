<template>
  <Scroll class="tv" :data="data">
    <div>
      <section class="top">
        <Enterances :data = 'enterances'></Enterances>
      </section>
      <section class="modern">
        <div class="title">
          <h2 class="text">热播新剧</h2>
          <span class="more">全部 {{hotCount}} ></span>
        </div>
        <SelectMovieList :data="union" :titles="new_subject"></SelectMovieList>
      </section>
      <section class="variety-show">
        <div class="title">
          <h2 class="text">热播综艺</h2>
          <span class="more">全部 {{varietyShowCount}} ></span>
        </div>
        <SelectMovieList :data="varietyShow" :titles="varietyShowSubject"></SelectMovieList>
      </section>
      <section class="rank">
        <div class="title">
          <h2 class="text">豆瓣榜单</h2>
          <span class="more">全部 {{rankCount}} ></span>
        </div>
        <RankList :data="rank"></RankList>
      </section>
    </div>
  </Scroll>
</template>
<script>
import { getTv } from '../../common/api/tv'
import Enterances from '../../components/Enterances.vue'
import RankList from '../../components/RankList.vue'
import SelectMovieList from '../../components/SelectMovieList.vue'
import Scroll from '../../components/Scroll.vue'
export default {
  components: {
    Enterances,
    SelectMovieList,
    Scroll,
    RankList
  },
  data () {
    return {
      data: [],
      enterances: [],
      hotCount: null,
      varietyShowCount: null,
      rankCount: null,
      rank: [],
      union: [],
      varietyShow: [],
      new_subject: [
        '综合',
        '国产剧',
        '英美剧',
        '日剧',
        '韩剧',
        '动画'
      ],
      varietyShowSubject: [
        '综合',
        '国内',
        '国外'
      ]
    }
  },
  created () {
    getTv().then((resp) => {
      this._normalizeItem(resp)
    })
  },
  methods: {
    _normalizeItem (resp) {
      let modules = resp.modules
      this.data = modules
      this._initEnterances(modules[0])
      this._initHot(modules)
      this._initVariety(modules)
      this._initRank(modules)
    },
    _initEnterances (item) {
      this.enterances = item.data.subject_entraces
    },
    _initHot (modules) {
      this.hotCount = modules[4].data.subject_collection_boards[0].subject_collection.subject_count
      for (let i = 4; i <= 9; i++) {
        this.union.push(modules[i].data.subject_collection_boards[0].items)
      }
    },
    _initVariety (modules) {
      this.varietyShowCount = modules[10].data.subject_collection_boards[0].subject_collection.subject_count
      for (let i = 10; i <= 12; i++) {
        this.varietyShow.push(modules[i].data.subject_collection_boards[0].items)
      }
    },
    _initRank (moudles) {
      this.rankCount = moudles[13].data.total
      this.rank = moudles[13].data.selected_collections
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.tv {
  overflow: hidden;
  .title {
    margin-bottom: 16px;
    font-size: $font-size-large;
    .text {
      display: inline-block;
    }
    .more {
      font-size: $font-size-small;
      line-height: 24px;
      float: right;
      color: black;
    }
  }
  .top {
    padding-top: 16px;
    margin-bottom: 32px;
  }
  .modern {
    margin-bottom: 32px;
  }
  .variety-show {
    margin-bottom: 32px;
  }
  .rank {
    padding-bottom: 16px;
  }
}
</style>
