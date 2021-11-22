import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TouchEventTest from '../components/TouchEventTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sample',
    name: 'TouchEventTest',
    component: TouchEventTest
  },
  {
    path: '/:index',
    name: 'HomeWithIndex',
    component: Home,
    props: (route) => ({ initIndex: Number(route.params.index) })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
