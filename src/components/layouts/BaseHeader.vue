<script lang="ts" setup>
import { repository } from '~/../package.json'

import { toggleDark } from '~/composables'
</script>

<template>
  <el-menu class="el-menu-demo bg-primary!" mode="horizontal" :ellipsis="false" router>
    <el-menu-item index="/">
      <div class="flex items-center justify-center gap-2">
        <div class="flex items-center space-x-2">
          <div class="h-10 w-10 bg-[length:100%_100%] bg-[url(~/assets/imgs/login-icon.png)]" />
          <p class="text-[24px] text-white font-bold">
            美乐数字化开发平台
          </p>
        </div>
      </div>
    </el-menu-item>

    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="w-full cursor-pointer border-none bg-transparent"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>

    <el-menu-item h="full">
      <a class="size-full flex items-center justify-center" :href="repository.url" target="_blank">
        <div i-ri-github-fill />
      </a>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss">
.el-menu-demo {
  &.ep-menu--horizontal > .ep-menu-item:nth-child(1) {
    margin-right: auto;
  }
}
</style>
