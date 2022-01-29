import { defineStore } from 'pinia'
import userApi from '@/api/user'
import { setToken, getToken, removeToken } from '@/http/cookie'
import { useMenu } from '.'

export const useUser = defineStore({
  id: 'user',
  state: () => ({
    hasGetInfo: false,
    info: {
      userName: '',
      avatar: ''
    }
  }),
  actions: {
    hasLogin () {
      return getToken() !== undefined
    },
    async login (data: { userName: string, password: string }) {
      const resp = await userApi.login(data)
      setToken(resp.data.token)
      return resp
    },
    async logout () {
      try {
        await userApi.logout()
      } finally {
        removeToken()
        this.hasGetInfo = false
      }
    },
    async qryCurUser () {
      if (!this.hasGetInfo && this.hasLogin()) {
        const menu = useMenu()
        await menu.qryMenus()
        const resp = await userApi.qryCurUser()
        this.info = resp.data
        this.hasGetInfo = true
      }
      return this.info
    }
  }
})
