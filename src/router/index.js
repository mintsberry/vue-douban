import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/amuse/movies'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index/Index.vue'),
    children: [
      {
        path: '/index/recommend',
        name: 'recommend',
        component: () => import('../views/index/Recommend.vue')
      },
      {
        path: '/index/news',
        name: 'news'
        // component: () => import('../views/Recommend.vue')
      }
    ]
  },
  {
    path: '/amuse',
    name: 'amuse',
    component: () => import('../views/asmuse/Amuse.vue'),
    children: [
      {
        path: '/amuse/movies',
        name: 'movies',
        component: () => import('../views/asmuse/Movies.vue'),
        children: [
          {
            path: '/amuse/movies/:id',
            name: 'moviesDetail',
            component: () => import('../views/asmuse/MoviesDetail.vue')
          }
        ]
      },
      {
        path: '/amuse/tv',
        name: 'tv',
        component: () => import('../views/asmuse/Tv.vue')
      },
      {
        path: '/amuse/book',
        name: 'book',
        component: () => import('../views/asmuse/Book.vue')
      },
      {
        path: '/amuse/rank/:category',
        name: 'rank',
        component: () => import('../views/asmuse/Rank/DouBanRank.vue')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes
})
router.beforeEach((to, from, next) => {
  const baseNav = ['index', 'amuse']
  // const saveNav = {
  //   name: 'recommend'
  // }
  let componentName = to.name
  if (baseNav.includes(componentName)) {
    let name = store.getters.lastUrl(componentName)
    next({ name })
  } else if (to.matched.length === 2) {
    let navName = to.matched[0].name
    store.commit('saveNavUrl', { navName, componentName })
    next()
  } else {
    next()
  }
})
export default router
