<script lang="ts"></script>

<template>
  <el-config-provider namespace="ep">
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

#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 52px);
}
</style>
