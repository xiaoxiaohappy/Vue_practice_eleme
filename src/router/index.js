import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Seller from '@/components/seller'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/api',
      component: Seller
    }
  ]
})
