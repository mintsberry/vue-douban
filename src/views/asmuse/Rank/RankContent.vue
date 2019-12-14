<template>
  <Scroll class="rank-content" :data="[data]">
    <div class="wrapper">
      <div v-if="data && data.groups[0] && data.groups[0].type === 'weekly'">
        <RankList :data="data.groups[0].selected_collections"></RankList>
      </div>
      <div v-if="data && data.groups[1] && data.groups[1].type === 'year'">
        <Title :title="'豆瓣年度榜单'" :isMore='true'/>
        <AnnualRank :data="data.groups[1].selected_collections"></AnnualRank>
      </div>
      <div v-if="data && data.groups[2] && data.groups[2].type === 'film_genre'">
        <Title :title="'豆瓣高分榜单'"/>
        <HighScoreList :data="data.groups[2].selected_collections"/>
      </div>
    </div>
  </Scroll>
</template>
<script>
import RankList from '../../../components/RankList.vue'
import AnnualRank from '../../../components/AnnualRank.vue'
import Scroll from '../../../components/Scroll.vue'
import Title from '../../../components/Title.vue'
import HighScoreList from './HighScoreList.vue'
export default {
  components: {
    Title,
    RankList,
    Scroll,
    AnnualRank,
    HighScoreList
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.rank-content {
  position: fixed;
  top: 89px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  overflow: hidden;
  .wrapper {
    padding-top: 16px;
    padding-bottom: 16px;
  }
}
</style>
