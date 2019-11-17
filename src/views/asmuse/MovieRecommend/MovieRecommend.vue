<template>
  <div class="movie-recommend">
    <div class="cover">
      <img :src="data.pic.large" class="pic" height="112" width="84">
      <div class="swiper">
        <img :src="data.photos[0]" alt="" height="112">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.movie-recommend {
  .cover {
    display: flex;
    img {
      border-radius: 4px;
    }
    .pic {
      width: 84px;
      margin-right: 16px;
      box-shadow: 2px 4px 4px 2px #eee;
    }
    .swiper {
      flex: 1;
      background-color: #eee;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
