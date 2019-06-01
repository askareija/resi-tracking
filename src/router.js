import Vue from 'vue'
import Router from 'vue-router'
import TrackHistory from './views/TrackHistory'

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
          path: '/track_history',
          name: 'trackHistory',
          component: TrackHistory
        }
      ]
    }
  ]
})

export default router
