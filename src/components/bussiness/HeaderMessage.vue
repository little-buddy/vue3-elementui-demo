<script lang="ts" setup>
import { ChatDotRound } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(false);
const drawerRef = ref();

const list = ref(Array.from({ length: 88 }).fill(0));

const router = useRouter();

function goMsgCenter() {
  router.push('/messagecenter');
  drawerRef.value.handleClose();
}

function handleClose(done: () => void) {
  done();
}
</script>

<template>
  <div>
    <el-tooltip content="消息">
      <el-button
        link
        class="relative mr-4! hover:text-white!"
        @click="drawer = true"
      >
        <el-icon>
          <ChatDotRound />
        </el-icon>
        <el-tag
          type="danger"
          size="small"
          effect="dark"
          round
          hit
          class="absolute left-[30%] top-[-30%] border-white!"
        >
          <span class="font-bold"> 11 </span>
        </el-tag>
      </el-button>
    </el-tooltip>

    <el-drawer
      ref="drawerRef"
      v-model="drawer"
      title="新消息"
      direction="rtl"
      :before-close="handleClose"
      class="ep-drawer__body-nopadding"
    >
      <template #footer>
        <div class="w-full space-x-4">
          <el-button type="primary" @click="goMsgCenter()">
            消息中心
          </el-button>
          <el-button @click="list = []"> 全部设为已读 </el-button>
        </div>
      </template>
      <el-scrollbar v-if="list && list.length > 0">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="ep-box__border border border-0 border-t-[1px] border-solid"
        >
          <div class="ep-box__card flex p-[20px] space-x-4">
            <el-badge is-dot>
              <el-avatar> user </el-avatar>
            </el-badge>
            <div class="flex flex-1 justify-between space-x-8">
              <div class="text-left space-y-2">
                <div>UserName</div>
                <div class="text-xs leading-6">
                  冷藏品库存数量小于5，已生成采购订单，请及时处理
                </div>
              </div>
              <div class="w-[80px] text-right text-xs">2025-01-10 10:40:46</div>
            </div>
          </div>
        </div>
      </el-scrollbar>
      <el-empty v-else />
    </el-drawer>
  </div>
</template>

<style></style>
