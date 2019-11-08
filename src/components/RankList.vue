<template>
  <ul class="rank-list">
    <li class="group" v-for="(group, index) in data" :key="index">
      <div class="name" :style="bgColor(group)">{{group.medium_name}}</div>
      <ul class="items">
        <li class="item" v-for="(item, index) in group.items.slice(0,3)" :key="index">
          <span class="order">{{index+1}}.</span>
          <span>{{item.title}}</span>
        </li>
        <!-- <img class="bg"></img> -->
        <img :src="group.header_bg_image" alt />
        <div class="mask"></div>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    bgColor (item) {
      return {
        background: `#${item.background_color_scheme.primary_color_dark}`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../common/scss/variable.scss";
.rank-list {
  .group {
    display: flex;
    height: 100px;
    margin-bottom: 16px;
    align-items: center;
    text-align: center;
    font-size: $font-size-medium;
    border-radius: 4px;
    .name {
      line-height: 100px;
      width: 100px;
      height: 100px;
      color: white;
      border-radius: 4px 0 0 4px;
      background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
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
        background-color: rgba(45, 52, 54, 0.5);
        border-radius: 0 4px 4px 0;
      }
    }
  }
}
</style>
