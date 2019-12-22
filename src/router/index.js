import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: "PM - Home"
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: "PM - About"
    }
  }
]

export default new VueRouter({ routes, mode: 'history' })
