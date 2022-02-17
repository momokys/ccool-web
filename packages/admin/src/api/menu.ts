import request from '@/http/request'

const baseURL = '/uaa/menu'

export default {
  qryAllMenus () {
    return request({
      url: `${baseURL}/all`,
      method: 'GET'
    })
  }
}
