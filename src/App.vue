<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { onBeforeMount } from 'vue';
import { useUserStore } from './store';

// 更改分页文字
zhCn.el.pagination.total = '共 {total} 条';
zhCn.el.pagination.goto = '跳至';
zhCn.el.pagination.pagesize = '条/页';
zhCn.el.pagination.pageClassifier = '页';
</script>

<template>
  <el-config-provider namespace="ep" :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<style>
#app,
body,
html {
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
  text-align: left;
}

p {
  margin: 0;
}
.ep-drawer__header {
  font-weight: bold;
}

.ep-drawer__body-nopadding .ep-drawer__body {
  padding: 0;
}
.ep-box__border {
  border-color: var(--ep-menu-border-color);
}

.ep-box__card {
  cursor: pointer;
  background-color: transparent;
}

.ep-box__card:hover {
  background-color: var(--ep-color-primary-light-9);
}

a {
  text-decoration: none;
}

.ep-dropdown-menu a {
  color: var(--ep-text-color-regular);
}

.ep-dropdown-menu a:hover {
  color: var(--ep-dropdown-menuItem-hover-color);
}

.ep-el-bg {
  background-color: var(--ep-bg-color);
}

#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 52px);
}
</style>
