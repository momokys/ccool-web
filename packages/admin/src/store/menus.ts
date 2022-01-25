import { defineStore } from 'pinia'
import { MenuItemType } from '@/layout/sidebar/menu'

export const useMenus = defineStore({
  id: 'menus',
  state: () => ({
    menus: [
      {
        path: '/test/index',
        title: '测试',
        icon: 'el-icon-setting'
      },
      {
        path: '/examples',
        title: '样例演示',
        icon: 'el-icon-data-board',
        children: [
          {
            path: '/examples/form',
            title: '动态表单'
          },
          {
            path: '/examples/layer',
            title: '命令式弹窗'
          }
        ]
      },
      {
        path: '/system/index',
        title: '系统管理',
        icon: 'el-icon-operation'
      },
      {
        path: '/my-task/index',
        title: '我的任务',
        icon: 'el-icon-checked'
      }
    ] as MenuItemType[]
  })
})
