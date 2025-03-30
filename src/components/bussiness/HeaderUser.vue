<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue';
import { ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router';
import logo from '~/assets/imgs/login-icon.png';
import { useUserStore } from '~/store';

const router = useRouter();

const userStore = useUserStore();

const { userInfo } = userStore;

function onUser() {
  router.push('/usercenter');
}

function onClearUserCache() {
  ElMessageBox.confirm(
    '清除缓存会将系统初始化，包括登录状态、主题、通用设置等，是否继续？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'info',
    }
  );
}

async function onLogout() {
  try {
    await ElMessageBox.confirm('确认是否退出当前用户？', '提示', {
      confirmButtonText: '退出',
      cancelButtonText: '取消',
      type: 'warning',
    });

    console.log(router);

    userStore.logout();
  } catch (error) {
    console.log(error.message);
  }
}
</script>

<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link flex cursor-pointer items-center space-x-2">
      <el-avatar :src="userInfo.avatar" size="small" />
      <span> {{ userInfo.name }} </span>

      <el-icon class="el-icon--right"><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="onUser()"> 账号信息 </el-dropdown-item>
        <el-dropdown-item @click="onClearUserCache()">
          清除缓存
        </el-dropdown-item>
        <el-dropdown-item divided @click="onLogout()">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
