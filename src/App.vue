<script lang="ts">

</script>

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

#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 52px);
}
</style>
