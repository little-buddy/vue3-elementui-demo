import { defineStore } from 'pinia';
import { useUserStore } from './user';

export const useFlagStore = defineStore('flag', {
  state: () => ({
    isMounted: false,
  }),
  actions: {
    checkUser() {
      // TODO 一种是根据当前页面状态
      // TODO 一种是根据可维持时间，会产生一个监听器
      const userStore = useUserStore();

      if (!this.isMounted) {
        if (userStore.isTemp && userStore.isLogin) {
          userStore.clearUserInfo();
        }

        this.isMounted = true;
      }
    },
  },
});
