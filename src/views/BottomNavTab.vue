<template>
  <div class="nav-tab">
    <router-link tag="div" to="/index" class="tab-item" active-class="active">
      <span class="item index-item"></span>
      <div class="subtitle">首页</div>
    </router-link>
    <router-link tag="div" to="/book" class="tab-item" active-class="active">
      <span class="item book-item"></span>
      <div class="subtitle">书影音</div>
    </router-link>
    <router-link tag="div" to="/group" class="tab-item" active-class="active">
      <img src="../common/images/group@2x.png" alt="" width="48" height="48" class="group-item">
    </router-link>
    <router-link tag="div" to="/store" class="tab-item" active-class="active">
      <span class="item store-item"></span>
      <div class="subtitle">市集</div>
    </router-link>
    <router-link tag="div" to="/me" class="tab-item" active-class="active">
      <span class="item me-item"></span>
      <div class="subtitle">我的</div>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
@import '../common/scss/variable.scss';
.nav-tab {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: white;
  box-shadow: 0 1px 1px 1px #999;

  .tab-item {
    flex: 1;
    text-align: center;
    .item {
      display: inline-block;
      width: 32px;
      height: 32px;
      background-size: cover;
      color: $color-text
    }
    .index-item {
      background-image: url('../common/images/home@2x.png');
    }
    .book-item {
      background-image: url('../common/images/book@2x.png');
    }
    .store-item {
      background-image: url('../common/images/store@2x.png');
    }
    .me-item {
      background-image: url('../common/images/me@2x.png');
    }
    .group-item {
      transition: all .3s ease;
    }
    &.active {
      color: $color-theme;
      .index-item {
        background-image: url('../common/images/home-active@2x.png');
      }
      .book-item {
        background-image: url('../common/images/book-active@2x.png');
      }
      .store-item {
        background-image: url('../common/images/store-active@2x.png');
      }
      .me-item {
        background-image: url('../common/images/me-active@2x.png');
      }
      .group-item {
        transform: translateY(-4px);
      }
    }
    .subtitle {
      font-size: $font-size-small-s;
    }
  }
}

</style>
