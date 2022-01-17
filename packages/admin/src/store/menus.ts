import { defineStore } from 'pinia'
import { MenuItemType } from '@/components/common/menu'

export const useMenus = defineStore({
  id: 'menus',
  state: () => ({
    menus: [
      {
        path: '/examples',
        title: '样例演示',
        icon: 'DataBoard',
        children: [
          {
            path: '/examples/form',
            title: '动态表单'
          }
        ]
      },
      {
        path: '/system/index',
        title: '系统管理',
        icon: 'Operation'
      },
      {
        path: '/my-task/index',
        title: '我的任务',
        icon: 'Checked'
      }
    ] as MenuItemType[]
  })
})
