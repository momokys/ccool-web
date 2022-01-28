import axios from 'axios'
import { layer } from '@ccool/ui'
import router from '@/router'
import http from '@/config/http'
import route from '@/config/route'
import { getToken, removeToken } from './cookie'

const service = axios.create({
  baseURL: http.baseURL,
  timeout: http.timeout
})

service.interceptors.request.use(req => {
  const token = getToken()
  if (token) {
    (req.headers as Record<string, string>)['X-TOKEN'] = token
  }
  return req
})

service.interceptors.response.use(
  resp => {
    if (resp.data.code === 0) {
      return Promise.resolve(resp.data)
    } else {
      layer.error(resp.data.message || '系统错误')
      return Promise.reject(resp.data)
    }
  },
  err => {
    if (err && err.response) {
      console.log(err.response)
      let message = '连接服务器失败'
      switch (err.response.status) {
        case 401:
          // 认证失败删除 token, 重新登录
          message = '认证失败，请重新登录'
          removeToken()
          router.push({
            name: route.loginName
          })
          break
        case 404:
          message = `找不到 ${err.response.config.url}`
          break
        default:
          message = err.response.data.message
      }
      layer.error(message)
    } else {
      layer.error('连接服务器失败')
    }
  }
)

export default service
