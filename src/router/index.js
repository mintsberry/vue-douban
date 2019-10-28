import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/recommend'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/index/recommend',
        name: 'recommend',
        component: () => import('../views/Recommend.vue')
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
    component: () => import('../views/Amuse.vue'),
    children: [
      {
        path: '/amuse/movies',
        name: 'movies'
      },
      {
        path: '/amuse/tv',
        name: 'tv'
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
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
  }
  next()
})
export default router
