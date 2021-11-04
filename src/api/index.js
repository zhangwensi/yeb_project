import service from "../utils/request";

export function login(data) {
  return service.request({
    method:'POST',
    url:'/api/login',
    data
  })
}


// 获取后台路由
export function getRoute() {
  return service.request({
    method:'GET',
    url:'/api/getRoutes'
  })
}
