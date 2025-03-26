import type { Router } from 'vue-router';

export default (router: Router) => {
  router.beforeEach((to, _, next) => {
    if (to.path === '/login') {
      // TODO 已登录状态
      const isSavePassword = JSON.parse(
        localStorage.getItem('isSavePassword') as string
      );
      if (isSavePassword) {
        next('/');
      }
    }
    next();
  });
};
