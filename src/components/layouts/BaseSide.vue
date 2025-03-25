<script lang="ts" setup>
import { ref , watch } from 'vue'
import { useRoute } from 'vue-router'
import { navConf } from '~/constants'

const route = useRoute()
const activeIndex = ref(route.path)

watch(() => route.path, (n) => {
  activeIndex.value = n
})

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}

const MenuData = navConf
</script>

<template>
  <el-menu
    router
    :default-active="activeIndex"
    class="el-menu-vertical-demo 0px] h-full w-[240px] overflow-scroll"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-scrollbar>
      <div v-for="menu in MenuData" :key="menu.name">
        <el-menu-item v-if="!menu.subMenu" :index="menu.index">
          <el-icon>
            <Component :is="menu.icon" />
          </el-icon>
          <template #title>
            {{ menu.name }}
          </template>
        </el-menu-item>
        <el-sub-menu v-else :index="menu.name">
          <template #title>
            <el-icon>
              <Component :is="menu.icon" />
            </el-icon>
            <span>{{ menu.name }}</span>
          </template>

          <el-menu-item-group v-for="subMenu in menu.subMenu" :key="subMenu.name">
            <el-menu-item :index="subMenu.index">
              <template #title>
                <el-icon>
                  <Component :is="subMenu.icon" />
                </el-icon>
                <span>{{ subMenu.name }}</span>
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </div>
    </el-scrollbar>
  </el-menu>
</template>
