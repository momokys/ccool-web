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
  },
  {
    url: '/api/user/menu/cur',
    method: 'GET',
    response: (req: any) => {
      return {
        data: [
          {
            menuId: 1,
            menuCode: 'System',
            menuType: 'D',
            menuName: '系统管理',
            parentId: 0,
            path: '/system',
            icon: 'el-icon-operation'
          },
          {
            menuId: 2,
            menuCode: 'SystemMenu',
            menuType: 'M',
            menuName: '菜单管理',
            parentId: 1,
            path: '/system/menu',
            src: '/src/views/system/menu/index.vue',
            icon: 'el-icon-menu'
          },
          {
            menuId: 8,
            menuCode: 'FormDesigner',
            menuType: 'M',
            menuName: '表单设计器',
            parentId: 1,
            path: '/system/designer',
            src: '/src/views/system/designer/index.vue',
            icon: 'el-icon-opportunity'
          },
          {
            menuId: 3,
            menuCode: 'SystemExamples',
            menuType: 'M',
            menuName: '样例演示',
            parentId: 1,
            path: '/system/examples',
            icon: 'el-icon-data-board'
          },
          {
            menuId: 4,
            menuCode: 'SystemTest',
            menuType: 'M',
            menuName: '样例测试',
            parentId: 1,
            path: '/system/test',
            src: '/src/views/system/test/index.vue',
            icon: 'el-icon-setting'
          },
          {
            menuId: 5,
            menuCode: 'SystemMyTask',
            menuType: 'M',
            menuName: '我的任务',
            parentId: 1,
            path: '/system/my-task',
            src: '/src/views/system/my-task/index.vue',
            icon: 'el-icon-checked'
          },
          {
            menuId: 6,
            menuCode: 'ExampleForm',
            menuType: 'M',
            menuName: '动态表单',
            parentId: 3,
            path: '/system/examples/form',
            src: '/src/views/system/examples/form.vue'
          },
          {
            menuId: 7,
            menuCode: 'ExampleLayer',
            menuType: 'M',
            menuName: '命令式弹窗',
            parentId: 3,
            path: '/system/examples/layer',
            src: '/src/views/system/examples/layer.vue'
          }
        ],
        code: 0
      }
    }
  }
]
