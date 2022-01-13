import { defineStore } from 'pinia'

export const useViewCache = defineStore({
  id: 'view-cache',
  state: () => ({
    viewsCache: []
  })
})
