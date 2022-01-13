import { defineStore } from 'pinia'

export const useMenus = defineStore({
  id: 'menus',
  state: () => ({
    menus: []
  })
})
