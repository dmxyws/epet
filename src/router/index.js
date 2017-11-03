import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/test'
    },
    {
      path: '/test',
      component: test
    }
  ]
})
