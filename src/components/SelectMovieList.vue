<template>
  <div class="select-movie-list">
    <Tab :titles="titles" @handleClick="clickTab" ></Tab>
    <MovieList :movies = 'data[active]'/>
  </div>
</template>
<script>
import Tab from './Tab.vue'
import MovieList from './MovieList.vue'
export default {
  components: {
    MovieList,
    Tab
  },
  props: {
    data: {
      type: Array,
      default: null
    },
    titles: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    clickTab (index) {
      this.active = index
    }
  }
}
</script>
