import {getRoute} from '../api/index.js'
// 格式化动态路由
export const initMenu = (router,store)=>{
  // 先判断是否已有路由
  if(store.state.routes.length>0) {
    return
  }
  // 如果没有路由调用后台获取路由接口 之后存入vuex中
  getRoute().then(res=>{
    let routes = formatRoutes(res.data)
    router.addRoutes(routes) //添加路由
    store.commit('initRoute',routes)
  })
}

export const formatRoutes = (data)=>{
  let fmtRoutes = []
  data.forEach(item=>{
    let {path,component,name,icon,children} = item
    if(children && children instanceof Array) {
      children = formatRoutes(children)
    }
    let fmtRouter =
      {
        path:path,
        name: name,
        icon: icon,
        children:children,
        component(resolve){
          if(component.startsWith('home')) {
            require(['../views/'+component+'.vue'],resolve)
          } else if(component.startsWith('Emp')) {
            require(['../views/emp/'+component+'.vue'],resolve)
          } else if(component.startsWith('Pre')) {
            require(['../views/pre/'+component+'.vue'],resolve)
          } else if(component.startsWith('Sal')) {
            require(['../views/sal/'+component+'.vue'],resolve)
          } else if(component.startsWith('Sta')) {
            require(['../views/sta/'+component+'.vue'],resolve)
          } else {
            require(['../views/sys/'+component+'.vue'],resolve)
          }
        }
      }
    fmtRoutes.push(fmtRouter)
  })
  return fmtRoutes
}
