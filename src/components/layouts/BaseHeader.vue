<script lang="ts" setup>
import { ArrowDown, ChatDotRound, Connection, FullScreen, Refresh } from '@element-plus/icons-vue'

import { useFullscreen } from '@vueuse/core'
import { useRouter } from 'vue-router'

import { repository } from '~/../package.json'
import logo from '~/assets/imgs/login-icon.png'

import { toggleDark } from '~/composables'

const { toggle } = useFullscreen()

const router = useRouter()

function onHandleTodo() {
  router.push('/handletodo')
}
function onHandleCommit() {
  router.push('/handlecommit')
}
function onHandleDone() {
  router.push('/handledone')
}
function onHandleSend() {
  router.push('/handlesend')
}
</script>

<template>
  <div class="bg-primary h-[56px] flex justify-between px-[24px]">
    <div class="flex items-center justify-center gap-2">
      <div class="flex items-center space-x-2">
        <div class="h-10 w-10 bg-[length:100%_100%] bg-[url(~/assets/imgs/login-icon.png)]" />
        <p class="text-[24px] text-white font-bold">
          美乐数字化开发平台
        </p>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <el-tooltip content="审批中心">
        <el-dropdown trigger="click">
          <el-button link class="hover:text-white!">
            <el-icon>
              <Connection />
            </el-icon>
          </el-button>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <div @click="onHandleTodo()">
                  待我处理
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="onHandleCommit()">
                  我提交的
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="onHandleSend()">
                  抄送我的
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="onHandleDone()">
                  审批过的
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-tooltip>

      <el-tooltip content="刷新">
        <el-button link class="hover:text-white!">
          <el-icon>
            <Refresh />
          </el-icon>
        </el-button>
      </el-tooltip>

      <el-tooltip content="全屏">
        <el-button link class="hover:text-white!" @click="toggle">
          <el-icon>
            <FullScreen />
          </el-icon>
        </el-button>
      </el-tooltip>

      <HeaderMessage />

      <el-dropdown trigger="click">
        <span class="el-dropdown-link flex cursor-pointer items-center space-x-2">

          <el-image :src="logo" fit="fill" class="h-[24px] w-[24px]" />
          <span>
            用户名
          </span>

          <el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Plus">
              账号信息
            </el-dropdown-item>
            <el-dropdown-item :icon="CirclePlusFilled">
              清除缓存
            </el-dropdown-item>
            <el-dropdown-item :icon="CirclePlus" divided>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-tooltip content="切换主题">
        <el-button
          link
          class="bg-transparent text-xl hover:text-white!"
          @click="toggleDark()"
        >
          <i inline-flex i="dark:ep-moon ep-sunny" class="text-[16px]" />
        </el-button>
      </el-tooltip>

      <el-button class="bg-transparent hover:text-white!" link :href="repository.url" tag="a" target="_blank">
        <div i-ri-github-fill class="text-xl" />
      </el-button>
    </div>
  </div>
</template>

<style lang="scss">
.el-menu-demo {
  &.ep-menu--horizontal > .ep-menu-item:nth-child(1) {
    margin-right: auto;
  }
}
</style>
