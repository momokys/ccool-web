const info = {
  userName: '',
  hasLogin: false,
  token: 'momoky'
}

export default [
  {
    url: '/api/user/login',
    method: 'POST',
    response: (req: any) => {
      info.userName = req.body.userName
      info.hasLogin = true
      return {
        data: {
          userName: info,
          token: 'momoky'
        },
        code: 0
      }
    }
  },
  {
    url: '/api/user/logout',
    method: 'GET',
    response: () => {
      info.hasLogin = false
      return {
        data: {
          userName: 'admin',
          token: 'momoky'
        },
        code: 0
      }
    }
  },
  {
    url: '/api/user/cur',
    method: 'GET',
    response: (req: any) => {
      return {
        data: {
          userName: info.userName
        },
        code: 0
      }
    }
  }
]
