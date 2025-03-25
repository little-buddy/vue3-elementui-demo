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
    <el-breadcrumb-item v-for="bread in breads" :key="bread.name">
      <div class="flex items-center space-x-2">
        <el-icon> <Component :is="bread.icon" />  </el-icon>
        <span>
          {{ bread.name }}
        </span>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
