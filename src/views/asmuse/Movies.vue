<template>
  <div class="movies">
    <ul class="enterances">
      <li class="item" v-for="(item, index) in entrances" :key="index">
        <img :src="item.icon" alt="" width="36" height="36">
        <p class="text">{{item.title}}</p>
      </li>
    </ul>
    <div class="banner">
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
    </div>
    <section class="movies">
      <h2 class="nav">
        <span v-for="(item, index) in subject"
          :key="index"
          :class="{ acitve: index === active}"
          @click="active = index"
        >{{item}}</span>
      </h2>
      <div class="showing" v-show="active === 0">Hello</div>
      <div class="soon"  v-show="active === 1">World</div>
    </section>
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
      entrances: [],
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
    height: 120px;
    width: 100%;
    margin-bottom: 32px;
    background-color: $color-theme-d;
    border-radius: 8px;
    .foreground {
      position: absolute;
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
  .movies {
    .nav {
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
}
</style>
