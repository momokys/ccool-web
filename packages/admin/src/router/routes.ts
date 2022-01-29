import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/refresh',
    name: '',
    component: () => import('@/views/refresh/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
  // {
  //   path: '/system',
  //   name: 'System',
  //   redirect: '/system/menu',
  //   component: Layout,
  //   meta: {
  //     title: '系统管理'
  //   },
  //   children: [
  //     {
  //       path: '/system/menu',
  //       name: 'SystemMenu',
  //       meta: {
  //         title: '菜单管理'
  //       },
  //       component: () => import('@/views/system/menu/index.vue')
  //     },
  //     {
  //       path: '/system/examples',
  //       redirect: '/system/examples/form',
  //       component: Layout,
  //       children: [
  //         {
  //           path: '/system/examples/form',
  //           name: 'ExampleForm',
  //           meta: {
  //             title: '动态表单'
  //           },
  //           component: () => import('@/views/examples/form.vue')
  //         },
  //         {
  //           path: '/system/examples/layer',
  //           name: 'ExampleLayer',
  //           meta: {
  //             title: '命令式弹窗'
  //           },
  //           component: () => import('@/views/examples/layer.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: '/system/my-task',
  //       name: 'MyTask',
  //       meta: {
  //         title: '我的任务'
  //       },
  //       component: () => import('@/views/system/my-task/index.vue')
  //     },
  //     {
  //       path: '/system/test',
  //       name: 'Test',
  //       meta: {
  //         title: '测试'
  //       },
  //       component: () => import('@/views/system/test/index.vue')
  //     }
  //   ]
  // }
]

export default routes
