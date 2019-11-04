<template>
  <ul class="play-list">
    <li class="item" v-for="(item, index) in data" :key="index">
      <div class="icon">
        <img :src="item.target_doulist.cover_url" width="80" height="80" alt="">
      </div>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="count">共{{item.total}}部</div>
        <div class="owner">
          <img class="avatar" width="16" height="16" :src="item.owner.avatar"/>
          <span class="name">{{item.owner.name}} 创建</span>
        </div>
      </div>
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
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.play-list{
  font-size: $font-size-medium;
  .item {
    display: flex;
    height: 94px;
    padding-bottom: 4px;
    border-bottom: 1px solid #eee;
    .icon {
      width: 80px;
      height: 80px;
      // margin-right: 20px;
      padding: 10px 0px;
    }
    .text {
      display: flex;
      padding: 10px 0px 10px 20px;
      flex: 1;
      flex-direction: column;
      font-size: $font-size-small;
      justify-content: space-between;
      color: $color-text-l;
      .title {
        color: $color-text;
        font-size: $font-size-medium;
      }
      .owner {
        img {
          border-radius: 50%;
          margin-right: 8px;
        }
        .name {
          vertical-align: top;
          line-height: 16px;
        }
      }
    }
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
