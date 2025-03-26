<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue';
import { ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router';
import logo from '~/assets/imgs/login-icon.png';

const router = useRouter();

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

function onLogout() {
  ElMessageBox.confirm('确认是否退出当前用户？', '提示', {
    confirmButtonText: '退出',
    cancelButtonText: '取消',
    type: 'warning',
  });
}
</script>

<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link flex cursor-pointer items-center space-x-2">
      <el-image :src="logo" fit="fill" class="h-[24px] w-[24px]" />
      <span> 用户名 </span>

      <el-icon class="el-icon--right"><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <div @click="onUser()">账号信息</div>
        </el-dropdown-item>
        <el-dropdown-item>
          <div @click="onClearUserCache()">清除缓存</div>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <div @click="onLogout()">退出登录</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
