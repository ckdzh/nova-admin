import type { RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '@/layouts/index'

/* 页面中的一些固定路由，错误页等 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/appRoot',
    component: BasicLayout,
    children: [
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'), // 注意这里要带上 文件后缀.vue
    meta: {
      title: '登录',
    },
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403/index.vue'),
    meta: {
      title: '用户无权限',
      icon: 'icon-park-outline:error',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404/index.vue'),
    meta: {
      title: '找不到页面',
      icon: 'icon-park-outline:ghost',
    },
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/error/500/index.vue'),
    meta: {
      title: '服务器错误',
      icon: 'icon-park-outline:close-wifi',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },

]
