<script lang="ts" setup>
import { Lock, Message, Unlock, User } from '@element-plus/icons-vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { isVNode, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/store';
import { delayTime } from '~/utils';

interface LoginInfo {
  username: string;
  password: string;
  imgcode: string;
  savepassword: boolean;
}

const userStore = useUserStore();

const rules: FormRules<LoginInfo> = {
  username: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }],
  imgcode: [{ required: true, message: '请输入图片验证码' }],
};

const loading = ref(false);
const formRef = ref<FormInstance>();

const loginInfo = reactive<LoginInfo>({
  username: '',
  password: '',
  imgcode: '',
  savepassword: false,
});

const router = useRouter();

async function doSbumit() {
  if (!formRef.value) return;

  const isValid = await formRef.value.validate((valid, fields) => {
    return valid as boolean;
  });

  if (!isValid) return;

  loading.value = true;
  // TODO 这里是发生 api 登录请求

  try {
    await userStore.login(
      loginInfo.username,
      loginInfo.password,
      !loginInfo.savepassword
    );

    ElMessage.success('登录成功');
    router.push('/');
  } catch (error) {
    ElMessage.error((error as Error)?.message);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <el-form
    ref="formRef"
    :model="loginInfo"
    :rules="rules"
    class="space-y-6"
    @submit.enter.prevent
  >
    <el-form-item prop="username">
      <el-input
        v-model="loginInfo.username"
        class="h-[40px]"
        :prefix-icon="User"
        placeholder="用户名"
        clearable
        @keyup.enter="doSbumit"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginInfo.password"
        class="h-[40px]"
        :prefix-icon="Lock"
        placeholder="请输入密码"
        type="password"
        clearable
        show-password
        @keyup.enter="doSbumit"
      />
    </el-form-item>
    <!-- <el-form-item prop="imgcode">
      <el-input v-model="loginInfo.imgcode" class="h-[40px]" :prefix-icon="Unlock" placeholder="图片验证码" clearable />
    </el-form-item> -->
    <!-- 记住密码就是本地缓存数据 -->
    <el-checkbox
      v-model="loginInfo.savepassword"
      label="记住密码"
      class="pl-2"
    />
    <!-- 登录进行表单校验 -->
    <el-button
      :loading="loading"
      type="primary"
      round
      class="mt-4 h-[40px]! w-full!"
      @click="doSbumit"
    >
      登录
    </el-button>
  </el-form>
</template>
