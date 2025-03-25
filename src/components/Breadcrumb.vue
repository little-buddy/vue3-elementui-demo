<script lang="ts" setup>
import { ArrowRight, Platform } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { breadMap } from '~/constants'

const route = useRoute()

// const router = useRouter()

const breads = ref<any>([])

function sureBreads(path: string) {
  const info = breadMap[path]

  const res = [{ icon: Platform, name: '工作台' }]

  if (info) {
    let p = info.parent
    while (p) {
      res.push({ ...p })
      p = p.parent
    }

    res.push({ ...info })
  }

  breads.value = res
}

sureBreads(route.path)
watch(() => route.path, sureBreads)
</script>

<!-- 仅展示不跳转 -->
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <transition-group name="list" tag="div">
      <el-breadcrumb-item v-for="bread in breads" :key="bread.name">
        <div class="flex items-center space-x-2">
          <el-icon> <Component :is="bread.icon" />  </el-icon>
          <span>
            {{ bread.name }}
          </span>
        </div>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style>
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
