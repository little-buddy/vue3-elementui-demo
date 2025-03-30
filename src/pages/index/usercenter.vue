<script lang="ts" setup>
import { Lock, Plus, Postcard } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useUserStore } from '~/store';

const userStore = useUserStore();
const { userInfo } = userStore;

const activeIndex = ref('0');
function onSelect(i: string) {
  activeIndex.value = i;
}
</script>

<template>
  <div class="ep-el-bg h-full w-full flex">
    <div
      class="ep-box__border w-[240px] border border-0 border-r-[1px] border-solid"
    >
      <div
        class="ep-box__border flex flex-col items-center border border-0 border-b-[1px] border-solid py-6"
      >
        <el-avatar size="large" :src="userInfo.avatar"></el-avatar>
        <p class="mt-4 font-bold">{{ userInfo.name }}</p>
      </div>
      <div class="pt-2">
        <el-menu
          :default-active="activeIndex"
          class="border-0!"
          @select="onSelect"
        >
          <el-menu-item-group title="基本设置">
            <el-menu-item
              index="0"
              class="h-[48px] flex cursor-pointer list-none items-center pl-6 space-x-2 hover:bg-[blue]"
            >
              <el-icon>
                <Postcard></Postcard>
              </el-icon>
              <span> 账号信息 </span>
            </el-menu-item>
            <el-menu-item
              index="1"
              class="h-[48px] flex cursor-pointer list-none items-center pl-6 space-x-2 hover:bg-[blue]"
            >
              <el-icon>
                <Postcard></Postcard>
              </el-icon>
              <span> 重置密码 </span>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </div>
    </div>
    <div class="content-bg flex-1 p-2">
      <div class="ep-el-bg p-5">
        <div class="space-y-4">
          <template v-if="activeIndex === '0'">
            <div class="font-bold">个人信息</div>
            <el-form label-position="right" label-width="auto" class="ml-10">
              <el-form-item label="用户头像">
                <el-upload list-type="picture-card">
                  <el-icon><Plus /></el-icon>
                </el-upload>
              </el-form-item>
              <el-form-item label="登录账户名">
                <el-input v-model="userInfo.username" disabled></el-input>
                <div class="ep-text__tip text-xs leading-8">
                  账号信息用于登录，系统不允许修改
                </div>
              </el-form-item>
              <el-form-item label="用户名称">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input></el-input>
              </el-form-item>

              <el-form-item label=" ">
                <el-button type="primary">保存</el-button>
              </el-form-item>
            </el-form>
          </template>
          <template v-else>
            <div class="font-bold">修改密码</div>
            <el-alert
              title="密码更新成功后，您将被重定向到登录页面，您可以使用新密码重新登录。"
              type="info"
              show-icon
              :closable="false"
            />
            <el-form label-position="right" label-width="auto" class="ml-10">
              <el-form-item label="当前密码">
                <el-input placeholder="请输入当前密码"></el-input>
                <div class="ep-text__tip text-xs leading-8">
                  必须提供当前登录用户密码才能进行更改
                </div>
              </el-form-item>
              <el-form-item label="新密码">
                <el-input placeholder="请输入新密码"></el-input>
                <div class="relative w-3/5">
                  <Password strength-meter-only class="w-full"></Password>
                  <div class="ep-text__tip text-xs leading-8">
                    请输入包含英文、数字的6-20位密码
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="确认信密码">
                <el-input placeholder="请再次输入新密码"></el-input>
              </el-form-item>
              <el-form-item label=" ">
                <el-button type="primary">保存密码</el-button>
              </el-form-item>
            </el-form>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
