import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main/main.vue'
import type from '../components/type/type.vue'
import login from '../components/login/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/type',
      component: type
    },
    {
      path: '/login',
      component: login
    }
  ]
})
