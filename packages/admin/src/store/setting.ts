import { defineStore } from 'pinia'

export const useSetting = defineStore({
  id: 'setting',
  state: () => ({
    sidebar: {
      minWidth: '58px',
      maxWidth: '210px',
      opened: true
    }
  }),
  actions: {
    toggleSidebar () {
      this.sidebar.opened = !this.sidebar.opened
    }
  }
})
