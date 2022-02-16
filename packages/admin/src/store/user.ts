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
      const res = await userApi.login(data)
      setToken(res.data.token)
      return res
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
        const res = await userApi.qryCurUser()
        this.info = res.data
        this.hasGetInfo = true
      }
      return this.info
    }
  }
})
