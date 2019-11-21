<template>
  <div class="star-rating-list">
    <div class="list-group" v-for="n in 5" :key="n">
      <span class="star-group">
        <img src="../common/images/star.png" alt="" v-for="i in 6-n" :key="i">
      </span>
      <div class="progress-bar" ref="progress">
        <div class="progress" :style="progressWidth(stats[5-n])"></div>
      </div>
    </div>
    <!-- <div class="list-group">
      <span class="star-group">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
      </span>
      <div class="progress-bar">
        <div class="progress" :style="progressWidth(stats[4])"></div>
      </div>
    </div>
    <div class="list-group">
      <span class="star-group">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
      </span>
      <div class="progress-bar">
        <div class="progress" :style="progressWidth(stats[3])"></div>
      </div>
    </div>
    <div class="list-group">
      <span class="star-group">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
      </span>
      <div class="progress-bar">
        <div class="progress" :style="progressWidth(stats[2])"></div>
      </div>
    </div>
    <div class="list-group">
      <span class="star-group">
        <img src="../common/images/star.png" alt="">
        <img src="../common/images/star.png" alt="">
      </span>
      <span class="progress-bar">
        <div class="progress" :style="progressWidth(stats[1])"></div>
      </span>
    </div>
    <div class="list-group">
      <span class="star-group">
        <img src="../common/images/star.png" alt="">
      </span>
      <div class="progress-bar">
        <div class="progress" :style="progressWidth(stats[0])"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    stats: {
      type: Array,
      default: null
    }
  },
  methods: {
    progressWidth (num) {
      console.log('TCL: progressWidth -> num', num)
      // let width = this.$refs.progress.clientWidth
      let width = 128 * num.toFixed(2)
      return `width: ${width}px`
    }
  }
}
</script>
<style lang="scss" scoped>
.star-rating-list {
  .list-group {
    height: 10px;
    .star-group {
      display: inline-block;
      width: 40px;
      img {
        float: right;
        margin-left: -4px;
      }
    }
    .progress-bar {
      position: relative;
      display: inline-block;
      margin-bottom: 3px;
      height: 6px;
      width: 128px;
      background-color: rgba(0,0,0,.2);
      border-radius: 2px;
      .progress {
        position: absolute;
        top: 0;
        left: 0;
        // width: 64px;
        height: 6px;
        background-color: #F79F1F;
        border-radius: 2px;
      }
    }
  }
}
</style>
