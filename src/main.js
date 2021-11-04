import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/global.scss'
import {initMenu} from './utils/formatRoutes'
import 'font-awesome/css/font-awesome.css'
require('./mock')

Vue.config.productionTip = false
Vue.use(Element)

//全局路由守卫
router.beforeEach((to,from ,next) => {
  // 判读是否已登录
  if(window.sessionStorage.getItem('token')) {
    initMenu(router,store)
    next()
  } else {
    // 未登录情况下 先登录后再重定向至指定页面
    if(to.path =='/') {
      next()
    } else {
      next('/?redirect='+to.path)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
