<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { delayTime } from '~/utils';

// import { useUserStore } from '~/store';

const psm = ref();

const formRef = ref();
const form = ref({
  pwd: '',
  newPwd: '',
  sureNewPwd: '',
});

const formRules = {
  pwd: [{ required: true, message: '[当前密码]不能为空' }],
  newPwd: [{ required: true, message: '[新密码]不能为空' }],
  sureNewPwd: [
    { required: true, message: '[确认新密码]不能为空' },
    {
      validator(_, val) {
        return val === form.value.newPwd;
      },
      message: '确认新密码 与 新密码不一致',
    },
  ],
};

const loading = ref(false);
async function onSave() {
  try {
    loading.value = true;
    await formRef.value.validate();
    await delayTime();
    ElMessage.success('保存密码成功');
  } catch (error) {
    error?.message && ElMessage.error(error.message);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="font-bold">修改密码</div>
  <el-alert
    title="密码更新成功后，您将被重定向到登录页面，您可以使用新密码重新登录。"
    type="info"
    show-icon
    :closable="false"
  />
  <el-form
    ref="formRef"
    label-position="right"
    label-width="auto"
    class="ml-10"
    :model="form"
    :rules="formRules"
  >
    <el-form-item label="当前密码" prop="pwd">
      <el-input
        v-model="form.pwd"
        placeholder="请输入当前密码"
        type="password"
      ></el-input>
      <div class="ep-text__tip text-xs leading-8">
        必须提供当前登录用户密码才能进行更改
      </div>
    </el-form-item>
    <el-form-item label="新密码" prop="newPwd">
      <el-input
        v-model="form.newPwd"
        placeholder="请输入新密码"
        type="password"
      ></el-input>
      <div class="relative w-3/5">
        <PasswordStrengthMeter
          ref="psm"
          :value="form.newPwd"
          strength-meter-only
          class="w-full"
        />
        <div class="ep-text__tip text-xs leading-8">
          请输入包含英文、数字的6-20位密码
        </div>
      </div>
    </el-form-item>
    <el-form-item label="确认信密码" prop="sureNewPwd">
      <el-input
        v-model="form.sureNewPwd"
        placeholder="请再次输入新密码"
        type="password"
      ></el-input>
    </el-form-item>
    <el-form-item label=" ">
      <el-button :loading="loading" type="primary" @click="onSave"
        >保存密码</el-button
      >
    </el-form-item>
  </el-form>
</template>
