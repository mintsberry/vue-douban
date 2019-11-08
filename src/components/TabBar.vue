<template>
  <div class="tab-bar">
    <div class="tabs">
      <router-link
        :to="{name: item.url}"
        tag="div"
        v-for="(item, index) in tabs"
        :key="index"
        class="tab"
      >
        <span class="text" :style="{color: fontColor}">{{item.text}}</span>
        <span class="under" :style="{ background: underColor, boxShadow: `0px 1px 4px 0px ${underColor}` }"></span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: null
    },
    fontColor: {
      type: String,
      default: 'white'
    },
    underColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../common/scss/variable.scss";
.tab-bar {
  display: inline-block;
  width: 100%;
  height: 48px;
  overflow: hidden;
  .tabs {
    display: -webkit-box;
    height: 100%;
    align-items: center;
    .tab {
      margin: 10px;
      margin-left: 0px;
      position: relative;
      transition: all 0.2s ease;
      .text {
        font-size: $font-size-medium;
        color: white;
      }
      &.active {
        .text {
          font-size: $font-size-medium-x;
          font-weight: 700;
        }
        .under {
            display: inline-block;
            height: 4px;
            width: 76%;
            position: absolute;
            bottom: -10px;
            left: 12%;
            background-color: white;
            border-radius: 4px;
        }
      }
    }
  }
}
</style>
