import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Email',
      component: resolve => require(['../components/pages/Email/Email.vue'], resolve),
      children: [
        {
          path: '/Baidu',
          component: resolve => require(['../components/pages/Email/Baidu.vue'], resolve)
        },
        {
          path: '/Outbox',
          component: resolve => require(['../components/pages/Email/Outbox.vue'], resolve)
        },
        {
          path: '/Google',
          component: resolve => require(['../components/pages/Email/Google.vue'], resolve)
        },
        {
          path: '/Microsoft',
          component: resolve => require(['../components/pages/Email/Microsoft.vue'], resolve)
        }
      ]
    },
    {
      path: '/',
      component: resolve => require(['../components/pages/Main.vue'], resolve),
      children: [
        {
          path: '/Bench',
          component: resolve => require(['../components/pages/Bench.vue'], resolve)
        },
        {
          path: '/Customer',
          component: resolve => require(['../components/pages/Customer.vue'], resolve)
        },
        {
          path: '/Date',
          component: resolve => require(['../components/pages/Date.vue'], resolve)
        },
        {
          path: '/Market',
          component: resolve => require(['../components/pages/Market.vue'], resolve)
        },
        {
          path: '/Search',
          component: resolve => require(['../components/pages/Search.vue'], resolve)
        }
      ]
    }
  ]
})
