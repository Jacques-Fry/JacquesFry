import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决 Uncaught (in promise) 的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import Home from 'views/pc/home/Home.vue'
import About from 'views/pc/about/About.vue'
import Detail from 'views/pc/detail/Detail.vue'


const routes = [
  {
    path: '*', // 页面不存在的情况下会跳到404页面
    redirect: '/',
    name: 'notFound',
    hidden: true
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/JacquesFry',
    name: 'JacquesFry',
    component: Detail
  },
]

const router = new VueRouter({
  routes
})

export default router
