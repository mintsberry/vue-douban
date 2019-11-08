<template>
  <div class="recommend-list">
    <ul>
      <li class="item" v-for="(item, index) in data" :key="index">
        <div class="img-wrapper">
          <img :src="item.cover.url" alt="" width="84" height="112">
        </div>
        <div class="content">
          <div class="desc">
            <div class="left">
              <div class="title">{{item.title}}</div>
              <div class="rating">
                <span class="star"></span>
                <span class="score">{{item.rating.value}}</span>
              </div>
              <div class="info">{{item.info}}</div>
              <div class="right">
                <div class="icon"></div>
                <div class="text"></div>
              </div>
            </div>
          </div>
          <div class="tip"></div>
        </div>
      </li>
    </ul>
  </div>
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
