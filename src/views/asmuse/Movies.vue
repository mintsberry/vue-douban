<template>
  <Scroll class="movies" :data="data">
    <div>
      <ul class="enterances">
        <li class="item" v-for="(item, index) in entrances" :key="index">
          <img :src="item.icon" alt="" width="36" height="36">
          <p class="text">{{item.title}}</p>
        </li>
      </ul>
      <section class="banner">
        <div class="text">
          <h2 class="title">
            {{event_movies.title}}
          </h2>
          <h2 class="sub-title">
            全部 {{event_movies.total}} >
          </h2>
        </div>
        <div class="cover-box"  v-for="(item, index) in event_movies.videos" :key="index">
          <div class="cover">
            <img :src="item.pic.normal" alt="">
          </div>
          <div class="mask"></div>
        </div>
        <div class="foreground"></div>
      </section>
      <section class="movie">
        <h2 class="nav">
          <span v-for="(item, index) in subject"
            :key="index"
            :class="{ acitve: index === active}"
            @click="active = index"
          >{{item}}</span>
        </h2>
        <div class="showing" v-if="active === 0">
          <MovieList :movies = 'showing'/>
        </div>
        <div class="soon"  v-if="active === 1">
          <MovieList :movies = 'soon'/>
        </div>
      </section>
      <section class="hot">
        <h2 class="title">豆瓣热门</h2>
        <HotList :data = 'hot'/>
      </section>
      <section class="rank">
        <h2 class="title">豆瓣榜单</h2>
        <ul class="groups">
          <li class="group" v-for="(group, index) in rank" :key="index">
            <div class="name">
              {{group.medium_name}}
            </div>
            <ul class="items">
              <li class="item" v-for="(item, index) in group.items.slice(0,3)" :key="index">
                <span class="order">{{index+1}}.</span>
                <span>{{item.title}}</span>
              </li>
              <!-- <img class="bg"></img> -->
              <img :src="group.header_bg_image" alt="">
              <div class="mask"></div>
            </ul>
          </li>
        </ul>
      </section>
      <section class="play">
        <h2 class="title">豆瓣片单</h2>
        <PlayList :data="playList"></PlayList>
      </section>
    </div>
  </Scroll>
</template>
<script>
import MovieList from '../../components/MovieList.vue'
import HotList from '../../components/HotList.vue'
import PlayList from '../../components/PlayList.vue'
import Scroll from '../../components/Scroll.vue'
import { getMovies, getEventVideos, getPlayList } from '../../common/api/amuse'
export default {
  components: {
    MovieList,
    Scroll,
    HotList,
    PlayList
  },
  created () {
    this._getMovies()
    this._getEventVideos()
    this._getPlayList()
  },
  data () {
    return {
      data: [],
      entrances: [],
      showing: [],
      soon: [],
      hot: [],
      rank: [],
      playList: [],
      event_movies: {},
      active: 0,
      subject: [
        '正在热映',
        '即将上映'
      ]
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
      getEventVideos(3)
        .then(resp => {
          this.event_movies = resp
        })
    },
    _getPlayList () {
      getPlayList().then(resp => {
        this.playList = resp.data
      })
    },
    _normalizeItem (resp) {
      let modules = resp.modules
      this.data = modules
      this._initEntrances(modules[0])
      this._initShowing(modules[4])
      this._initSoon(modules[5])
      this._initHot(modules[7])
      this._initRank(modules[9])
    },
    _initEntrances (item) {
      this.entrances = item.data.subject_entraces
    },
    _initShowing (item) {
      this.showing = item.data.subject_collection_boards[0].items.splice(0, 6)
    },
    _initSoon (item) {
      this.soon = item.data.subject_collection_boards[0].items.splice(0, 6)
    },
    _initHot (item) {
      this.hot = item.data.subject_collection_boards[0].items.splice(0, 6)
    },
    _initRank (item) {
      this.rank = item.data.selected_collections
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.movies {
  overflow: hidden;
  .enterances {
    display: flex;
    padding-top: 16px;
    margin-bottom: 32px;
    min-height: 60px;
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
  .banner {
    position: relative;
    padding-top: 38%;
    width: 100%;
    margin-bottom: 32px;
    background-color: $color-theme-d;
    border-radius: 8px;
    .foreground {
      position: absolute;
      top: 0;
      z-index: 7;
      width: 65%;
      height: 100%;
      background-color: #2381E1;
      clip-path: polygon(0 0%, 100% 0%, 80% 100%, 0% 100%);
      border-radius: 8px 0 0 8px;
      &::after {
        content: '';
        position: absolute;
        width: 128px;
        height: 128px;
        background-color: rgba($color: #fff, $alpha: .1);
        border-radius: 50%;
        left: -36px;
        top: 16px;
      }
      &::before {
        content: '';
        position: absolute;
        width: 72px;
        height: 72px;
        background-color: rgba($color: #fff, $alpha: .2);
        border-radius: 50%;
        right: 36px;
        bottom: -16px;
      }
    }
    .text {
      position: absolute;
      left: 16px;
      top: 36px;
      z-index: 8;
      font-size: $font-size-medium-x;
      color: white;
      .sub-title {
        margin-top: 16px;
        font-size: $font-size-medium;
      }
    }
    .cover-box {
      position: absolute;
      bottom: 10px;
      z-index: 2;
      .cover {
        padding-top: 140%;
        img {
          position: absolute;
          border-radius: 2px;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: center center / cover no-repeat;
        }
      }
      .mask {
        position: absolute;
        border-radius: 2px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
      }
      &:nth-of-type(2) {
        left: 55%;
        width:  calc((100% - 20px) / 3 / 1.4);
        z-index: 5;
        .mask {
          background-color: rgba(0,0,0,0);
        }
        &::before {
          content: "";
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 30px;
          height: 30px;
          margin: auto;
          background-image: url(../../common/images/play.png);
          background-position: 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      &:nth-of-type(3) {
        left: 65%;
        width: calc(((100% - 20px) / 3 - 10px) / 1.4);
        z-index: 4;
      }
      &:nth-of-type(4) {
        left: 75%;
        width: calc(((100% - 20px) / 3 - 20px) / 1.4);
        z-index: 3;
      }
    }
  }
  .movie {
    margin-bottom: 32px;
    .nav {
      display: inline-block;
      font-size: $font-size-small;
      color: $color-highlight-background;
      margin-bottom: 16px;
      span {
        margin-right: 8px;
        padding: 4px;
        &.acitve {
          background-color: $color-theme;
          color: white;
          border-radius: 2px;
        }
      }
    }
  }
  .hot {
    margin-bottom: 32px;
    .title {
      margin-bottom: 16px;
      font-size: $font-size-large;
      // font-weight: 500
    }
  }
  .rank {
    margin-bottom: 32px;
    .title {
      font-size: $font-size-large;
      margin-bottom: 16px;
    }
    .groups {
      .group {
        display: flex;
        height: 100px;
        margin-bottom: 16px;
        align-items: center;
        text-align: center;
        font-size: $font-size-medium-x;
        border-radius: 4px;
        .name {
          line-height: 100px;
          width: 100px;
          height: 100px;
          color: white;
          border-radius: 4px 0 0 4px;
          background-color: rgba(45, 52, 54,1.0);
        }
        .items {
          position: relative;
          display: flex;
          box-sizing: border-box;
          padding: 10px;
          flex: 1;
          height: 100px;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
          font-size: $font-size-medium;
          .item {
            z-index: 1;
            color: white;
            .order {
              margin-right: 2px;
            }
          }
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0 4px 4px 0;
          }
          .mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(45, 52, 54,.7);
            border-radius: 0 4px 4px 0;
          }
        }
      }
    }
  }
  .play {
    padding-bottom: 16px;
    .title {
      font-size: $font-size-large;
      margin-bottom: 16px;
    }
  }
}
</style>
