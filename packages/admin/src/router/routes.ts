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
  },
  {
    path: '/test',
    redirect: '/test/index',
    component: Layout,
    children: [
      {
        path: '/test/index',
        name: 'Test',
        meta: {
          title: '测试'
        },
        component: () => import('@/views/test/index.vue')
      }
    ]
  },
  {
    path: '/examples',
    redirect: '/examples/form',
    component: Layout,
    children: [
      {
        path: '/examples/form',
        name: 'ExampleForm',
        meta: {
          title: '动态表单'
        },
        component: () => import('@/views/examples/form.vue')
      },
      {
        path: '/examples/layer',
        name: 'ExampleLayer',
        meta: {
          title: '命令式弹窗'
        },
        component: () => import('@/views/examples/layer.vue')
      }
    ]
  },
  {
    path: '/system',
    name: '_System',
    redirect: '/system/index',
    component: Layout,
    children: [
      {
        path: '/system/index',
        name: 'System',
        meta: {
          title: '系统管理'
        },
        component: () => import('@/views/system/index.vue')
      }
    ]
  },
  {
    path: '/my-task',
    name: '_MyTask',
    redirect: '/my-task/index',
    component: Layout,
    children: [
      {
        path: '/my-task/index',
        name: 'MyTask',
        meta: {
          title: '我的任务'
        },
        component: () => import('@/views/my-task/index.vue')
      }
    ]
  }
]

export default routes
