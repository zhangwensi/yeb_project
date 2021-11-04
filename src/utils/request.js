import axios from "axios";
import { Message } from "element-ui"
import router from '../router/index.js'
import { getToken } from "./auth.js"

const reqUrl = ''
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
  baseURL:reqUrl,
  timeout: 100000
})

//请求拦截
service.interceptors.request.use(config =>{
  // 判断是否有token
  if(getToken()) {
    // 在请求头加上Authorization
    config.headers['Authorization'] = getToken()
  } else {
    Message.error('您没登录，请登录')
    router.replace('/')
  }
  return config
},error => {
  console.log(error)
})

// 响应拦截
service.interceptors.response.use((res) => {
  if(res.status && res.status == 200) {
    // 请求成功 根据业务去进行拆解
    if(res.data.code == 500 || res.data.code == 401 || res.data.code == 402) {
      Message.error({message:res.data.msg})
      return
    }
  }
  return res
},error=>{
  let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
})


export default service
