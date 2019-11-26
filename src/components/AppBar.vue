<template>
  <div class="app-bar">
    <span class="app-bar-l" @click="clickLeft">
      <i :class="['icon',`icon-${left}`]"></i>
    </span>
    <transition-group name="fade"  mode="out-in" tag="div" class="middle">
      <div class="info" v-if="isShowInfo" :key="'info'">
        <div class="left">
          <img :src="info.cover" width="24" height="32">
        </div>
        <div class="right">
          <div class="title">{{info.title}}</div>
          <div class="score">
            <div v-if="info.score !== 0">
              <Star :size="24" :score="info.score / 2" ></Star>
              {{info.score}}
            </div>
            <div v-else>
              暂无评分
            </div>
          </div>
        </div>
      </div>
      <h1 v-else :key="'title'">{{title}}</h1>
    </transition-group>
    <span class="app-bar-r">
      <i :class="['icon', `icon-${right}`]"></i>
    </span>
  </div>
</template>
<script>
import Star from './star/Star.vue'
export default {
  components: {
    Star
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: null
    },
    isShowInfo: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickLeft () {
      this.$emit('left')
    }
  }
}
</script>
<style lang='scss' scoped>
.app-bar {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 14px;
  z-index: 1;
  color: white;
  .middle{
    flex: 1;
    h1 {
      text-align: center;
    }
    .info {
      position: absolute;
      top: 5px;
      display: flex;
      .left {
        margin-right: 4px;
        img {
          border-radius: 4px;
          box-shadow: 0 0 4px  rgba(0, 0, 0, .5);
        }
      }
      .right {
        .title {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 4px;
        }
        .score {
          font-size: 12px;
          transform: scale(0.9) translateX(-3px);
          color: rgba(255, 255, 255, .8);
          .star {
            display: inline-block;
          }
        }
      }
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all 1s;
    }
  }
  span {
    flex: 0 0 32px;
    padding: 0 16px;
    .icon {
      font-size: 24px
    }
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s;
  }
}
</style>
