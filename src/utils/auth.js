import Cookies from "js-cookie";

// 设置token
const user = 'eyb'
export function setToken(value) {
  return Cookies.set(user,value)
}

export function getToken() {
  return Cookies.get(user)
}

export function removeToken() {
  return Cookies.remove(user)
}
