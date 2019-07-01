import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: () => import('./components/Main.vue'),
      children: [
        {
          path: '/',
          redirect: '/track_receipt'
        },
        {
          path: '/track_receipt',
          name: 'trackReceipt',
          component: () => import('./views/TrackReceipt.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue')
        }
      ]
    }
  ]
})

export default router
