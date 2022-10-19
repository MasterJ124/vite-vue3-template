import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// * 导入所有router
const metaRouters = import.meta.glob('./modules/*.ts', { eager: true });
console.log('metaRouters', metaRouters);

// * 处理路由表
export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item] as object).forEach((key) => {
    routerArray.push(...(metaRouters[item] as any)[key]);
  });
});
console.log('routerArray', routerArray);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'login' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  {
    path: '/videocreation/videoAdjust',
    name: 'videoCreation',
    meta: {
      requiresAuth: false,
      title: 'adjust制作',
      key: 'adjust',
    },
    component: () => import('@/layouts/LayoutVideocreation/index.vue'),
  },
  ...routerArray,
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: { name: '404' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
