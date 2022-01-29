import request from '@/http/request'

const baseURL = '/user'

export default {
  login (data: { userName: string, password: string }) {
    return request({
      url: `${baseURL}/login`,
      method: 'POST',
      data
    })
  },
  logout () {
    return request({
      url: `${baseURL}/logout`,
      method: 'GET'
    })
  },
  qryCurUser () {
    return request({
      url: `${baseURL}/cur`,
      method: 'GET'
    })
  },
  qryCurMenu () {
    return request({
      url: `${baseURL}/menu/cur`,
      method: 'GET'
    })
  }
}
