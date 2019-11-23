<template>
  <div class="actors-list" ref="wrapper">
    <ul class="list">
      <li v-for="(item, index) in data.slice(0,6)" :key="index" class="item">
        <img :src="item.cover_url" alt="" width="84" height="112">
        <div class="name">{{item.name}}</div>
        <div class="role">{{item.character}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        scrollY: false
      })
    }, 20)
  }
}
</script>
<style lang="scss" scoped>
.actors-list {
  margin-top: 8px;
  .list {
    float: left;
    white-space: nowrap;
    .item {
      display: inline-block;
      margin-right: 8px;
      width: 84px;
      img {
        border-radius: 4px;
      }
      .name {
        margin-top: 4px;
        font-size: 12px;
        width: 100%;
        color: white;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .role {
        display: inline-block;
        margin-top: 4px;
        font-size: 12px;
        width: 100%;
        color: rgba(255, 255, 255, .5);
        transform: scale(.9) translateX(-4px);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
</style>
