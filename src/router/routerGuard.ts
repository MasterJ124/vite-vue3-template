import router from '@/router/index';
import NProgress from '@/config/nprogress';
import { HOME_URL } from '@/config/config';
import { AxiosCanceler } from '@/utils/axios/axiosCancel';
// import { ACCESS_TOKEN } from '@/store/mutation-types';
// import ls from '@/utils/Storage';

const axiosCanceler = new AxiosCanceler();

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach((to, from, next) => {
  NProgress.start();
  // * 在跳转路由之前，清除所有的请求
  axiosCanceler.removeAllPending();

  // * 判断当前路由是否需要访问权限
  if (!to.matched.some((record) => record.meta.requiresAuth)) return next();

  // * 判断是否有Token
  // const token = ls.get(ACCESS_TOKEN);
  // if (!token) {
  //   next({
  //     path: '/login',
  //   });
  //   NProgress.done();
  //   return;
  // }
  const routerList = [HOME_URL, '/403'];

  // * 如果访问的地址没有在路由表中重定向到403页面
  if (routerList.indexOf(to.path) !== -1) return next();
  next({
    path: '/403',
  });
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
