<template>
  <div class="high-score-list">
    <div class="high-score-item" v-for="(item, index) in data" :key="index">
      <div class="title">
        <h2>{{item.medium_name}}{{item.type_icon_bg_text}}</h2>
        <span>全部</span>
      </div>
      <HotList :data="item.items"/>
    </div>
  </div>
</template>
<script>
import HotList from '../../../components/HotList.vue'
export default {
  components: {
    HotList
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../common/scss/variable.scss';
.high-score-list {
  .high-score-item {
    .title {
      margin-bottom: 8px;
      h2 {
        display: inline-block;
        font-size: $font-size-medium-x;
        color: $color-text;
        font-weight: bold;
      }
      span {
        color: $color-text-d;
        font-size: 14px;
        float: right;
      }
    }
    .hot-list {
      margin-bottom: 16px;
    }
  }
}
</style>
