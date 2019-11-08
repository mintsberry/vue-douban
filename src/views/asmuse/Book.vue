<template>
  <Scroll class="read" :data="data">
    <div>
      <section class="top">
        <Enterances :data="enterances"></Enterances>
      </section>
      <section class="new-book">
        <div class="title">
          <h2 class="text">新书速递</h2>
          <span class="more">全部 {{newBookCount}} ></span>
        </div>
        <div class="list">
          <BookList :data="newBook.slice(0,3)"></BookList>
        </div>
      </section>
      <section class="rank">
        <div class="title">
          <h2 class="text">豆瓣榜单</h2>
          <span class="more">全部 {{rankCount}} ></span>
        </div>
        <RankList :data="rank"></RankList>
      </section>
      <section class="rank">
        <div class="title">
          <h2 class="text">豆瓣书单</h2>
          <span class="more">全部 {{listCount}} ></span>
        </div>
        <PlayList :data="playList" :type="1"></PlayList>
      </section>
      <section class="recommend">
        <div class="title">
          <h2 class="text">为你推荐</h2>
        </div>
        <SimpleRecommendList :data='recommendList'></SimpleRecommendList>
      </section>
    </div>
  </Scroll>
</template>
<script>
import Enterances from '../../components/Enterances.vue'
import BookList from '../../components/BookList.vue'
import Scroll from '../../components/Scroll.vue'
import PlayList from '../../components/PlayList.vue'
import RankList from '../../components/RankList.vue'
import SimpleRecommendList from '../../components/SimpleRecommendList.vue'
import { getBook, getBookRecommend } from '../../common/api/book'
export default {
  components: {
    Enterances,
    BookList,
    RankList,
    PlayList,
    SimpleRecommendList,
    Scroll
  },
  data () {
    return {
      enterances: [],
      data: [],
      newBook: [],
      newBookCount: null,
      rank: [],
      rankCount: null,
      playList: [],
      recommendList: [],
      listCount: null,
      start: 0
    }
  },
  created () {
    this._getBook()
    this._getRecommend()
  },
  methods: {
    _getBook () {
      getBook().then((resp) => {
        this._normalizeItem(resp)
      })
    },
    _getRecommend () {
      getBookRecommend(this.start, 10).then((resp) => {
        this.total = resp.total
        this.recommendList = resp.items
        this.start += 10
      })
    },
    _normalizeItem (resp) {
      let modules = resp.modules
      this.data = modules
      this._initEnterances(modules[0])
      this._initNewBook(modules[1])
      this._initRank(modules[2])
      this._initPlayList(modules[4])
    },
    _initEnterances (item) {
      this.enterances = item.data.subject_entraces
    },
    _initNewBook (item) {
      this.newBookCount = item.data.subject_collection_boards[0].subject_collection.subject_count
      this.newBook = item.data.subject_collection_boards[0].items
    },
    _initRank (item) {
      this.rankCount = item.data.total
      this.rank = item.data.selected_collections
    },
    _initPlayList (item) {
      this.listCount = item.data.total
      this.playList = item.data.items
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.read {
  section {
    margin-bottom: 32px;
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
  }
  .top {
    padding-top: 16px;;
  }
}
</style>
