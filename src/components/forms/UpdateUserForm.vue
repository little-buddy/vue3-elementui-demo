<script lang="ts" setup>
import type { UploadFile, UploadRawFile } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';

import { ElMessage, genFileId } from 'element-plus';
import { ref, toRaw, watch, watchEffect } from 'vue';
import { useUserStore } from '~/store';
import {
  delayTime,
  emailValidator,
  phoneValidator,
  upl,
  uploadImg,
} from '~/utils';

const userStore = useUserStore();
const { userInfo } = userStore;

const loading = ref(false);

const formRef = ref();

const form = ref({
  ...userInfo,
  formAvatar: [],
});

const formRules = {
  name: [{ required: true, message: '[用户名称]不能为空' }],
  email: [
    {
      validator(_: any, val: string) {
        return emailValidator(val);
      },
      message: '邮箱格式不符合规范',
    },
  ],
  phone: [
    {
      validator(_: any, val: string) {
        return phoneValidator(val);
      },
      message: '手机号不符合规范',
    },
  ],
};

const uploadRef = ref();
const avatarLoading = ref(false);
async function onImgChange(img: UploadFile) {
  avatarLoading.value = true;

  try {
    const url = await uploadImg(img.raw!);

    form.value.avatar = url;
  } catch (error) {
    ElMessage.error(error.message);
  } finally {
    avatarLoading.value = false;
  }
}

async function onSave() {
  try {
    loading.value = true;
    await formRef.value.validate();
    // 模拟请求
    await delayTime();
    userStore.updateUserInfo(form.value);

    ElMessage.success('修改个人信息成功');

    // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (error) {
    /*  */
  } finally {
    loading.value = false;
  }
}

watchEffect(() => {
  console.log(form.value);
});
</script>

<template>
  <div class="font-bold">个人信息</div>
  <el-form
    ref="formRef"
    :model="form"
    label-position="right"
    label-width="auto"
    class="update-userinfo ml-10"
    :rules="formRules"
  >
    <el-form-item label="用户头像" prop="formAvatar">
      <el-upload
        ref="uploadRef"
        v-loading="avatarLoading"
        :file-list="[]"
        action="#"
        :auto-upload="false"
        :limit="0"
        accept="image/*"
        @change="onImgChange"
      >
        <div class="el-upload__avatar">
          <el-image
            :src="form.avatar"
            fit="contain"
            class="h-full w-full"
          ></el-image>
        </div>
      </el-upload>
    </el-form-item>
    <el-form-item label="登录账户名">
      <el-input v-model="form.username" disabled></el-input>
      <div class="ep-text__tip text-xs leading-8">
        账号信息用于登录，系统不允许修改
      </div>
    </el-form-item>
    <el-form-item label="用户名称" prop="name">
      <el-input v-model="form.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="form.phone" clearable></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" clearable></el-input>
    </el-form-item>

    <el-form-item label=" ">
      <el-button type="primary" :loading="loading" @click="onSave"
        >保存</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style lang="scss">
.update-userinfo {
  & .ep-upload--picture-card {
    --ep-upload-picture-card-size: 84px;
  }

  & .ep-upload-list--picture-card {
    --ep-upload-list-picture-card-size: 84px;
  }
}

.el-upload__avatar {
  --ep-upload-picture-card-size: 84px;
  width: var(--ep-upload-picture-card-size);
  height: var(--ep-upload-picture-card-size);
  border: 1px dashed var(--ep-menu-border-color);
  border-radius: 4px;
  transition: border-color 0.5s;
  &:hover {
    border-color: var(--ep-color-primary);
  }
}
</style>
