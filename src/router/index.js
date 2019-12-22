import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

export default new VueRouter({ routes, mode: 'history' })
