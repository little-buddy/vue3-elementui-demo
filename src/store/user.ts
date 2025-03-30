import { defineStore } from 'pinia';
import { Md5 } from 'ts-md5';
import { useId } from 'vue';
import { useRouter$ } from '~/composables';
import { delayTime } from '~/utils';

interface UserInfo {
  userid: string;
  username: string;
  avatar: string;
  name: string;
  phone: string;
  email: string;
  token: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({ userInfo: {} as Partial<UserInfo>, isTemp: true }),
  getters: {
    isLogin: (state: any) => state.userInfo.token,
  },
  actions: {
    updateUserInfo(info: Partial<UserInfo>) {
      this.userInfo = { ...this.userInfo, ...info };
    },
    clearUserInfo() {
      this.userInfo = {};
    },
    async login(username: string, pwd: string, isTemp = true) {
      // console.log(`${username} 使用密码 ${Md5.hashStr(pwd)} 正在登陆`);
      // mock 服务端请求时间
      await delayTime();

      if (username !== 'admin' && pwd !== 'admin') {
        throw new Error('账号密码错误');
      }

      // mock 模拟请求成功
      const info = {
        userid: useId(),
        username: 'admin',
        name: '系统管理员',
        phone: '13000000000',
        email: 'xxx@qq.com',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5M149o-bYEUK9AJetZcHTYiP384VMnu2gzw&s',
        token: '0001007-772f1650f45e417b859828e32f4d4f5d',
      };

      this.updateUserInfo(info);
      // 存储用户登录维持的状态信息
      this.isTemp = isTemp;
    },
    logout() {
      const router = useRouter$();

      this.clearUserInfo();
      router.replace('/login');
    },
  },
  persist: true,
});
