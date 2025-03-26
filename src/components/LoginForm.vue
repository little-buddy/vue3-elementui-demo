<script lang="ts" setup>
import { Lock, Message, Unlock, User } from '@element-plus/icons-vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { isVNode, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { delayTime } from '~/utils';

interface LoginInfo {
  username: string;
  password: string;
  imgcode: string;
  savepassword: boolean;
}

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
    return valid;
  });

  if (isValid) {
    loading.value = true;
    await delayTime();
    loading.value = false;

    if (loginInfo.username !== 'admin' && loginInfo.password !== 'admin') {
      ElMessage.error('账号密码错误');
    } else {
      if (loginInfo.savepassword) {
        // TODO 登录操作
        localStorage.setItem('isSavePassword', 'true');
      }

      ElMessage.success('登录成功');
      router.push('/');
    }
  }

  // 提交登录
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
        @keyup.enter="doSbumit"
        clearable
        show-password
      />
    </el-form-item>
    <!-- <el-form-item prop="imgcode">
      <el-input v-model="loginInfo.imgcode" class="h-[40px]" :prefix-icon="Unlock" placeholder="图片验证码" clearable />
    </el-form-item> -->
    <!-- 记住密码就是本地缓存数据 -->
    <el-checkbox v-model="loginInfo.savepassword" label="记住密码" />
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
