import { defineStore } from 'pinia'
import { MenuItemType } from '@/components/common/menu'

export const useMenus = defineStore({
  id: 'menus',
  state: () => ({
    menus: [
      {
        path: '/system',
        title: '系统管理',
        icon: 'DataBoard',
        children: [
          {
            path: '/system/menu',
            title: '功能菜单',
            children: [
              {
                path: '/system/menu/action',
                title: '动作列表'
              }
            ]
          }
        ]
      },
      {
        path: '/my-task',
        title: '我的任务',
        icon: 'Checked'
      }
    ] as MenuItemType[]
  })
})
