import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue'),
    hidden: true
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior:()=>{y:0}
})

export default router
