<template>
  <BaseHeader />
  <div class="main-container flex">
    <BaseSide />
    <div w="full" py="4">
      <RouterView />
    </div>
  </div>
</template>

  <!-- 它这里嵌套路由是存在问题的，需要做额外的处理 -->
