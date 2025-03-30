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
        <el-avatar size="large" :src="userStore.userInfo.avatar"></el-avatar>
        <p class="mt-4 font-bold">{{ userStore.userInfo.name }}</p>
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
                <Lock></Lock>
              </el-icon>
              <span> 重置密码 </span>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </div>
    </div>
    <div class="content-bg flex-1 p-2">
      <div class="ep-el-bg p-6">
        <div class="space-y-4">
          <template v-if="activeIndex === '0'">
            <UpdateUserForm></UpdateUserForm>
          </template>
          <template v-else>
            <ResetPwdForm></ResetPwdForm>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
