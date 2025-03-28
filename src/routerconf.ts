import type { Router } from 'vue-router';
import { useFlagStore, useUserStore } from './store';

export default (router: Router) => {
  router.beforeEach((to, _, next) => {
    const userStore = useUserStore();
    const flagStore = useFlagStore();

    flagStore.checkUser();

    if (to.path !== '/login' && !userStore.isLogin) {
      next('/login');
    }

    if (to.path === '/login' && userStore.isLogin) {
      next('/');
    }

    next();
  });
};
