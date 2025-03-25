<template>
  <BaseHeader />
  <div class="h-[40px] w-full flex">
    <div class="w-[280px] flex items-center border-0 border-b-1 border-r-1 border-[#dcdfe6] border-solid pl-[20px] font-bold">
      工作台
    </div>
    <div class="flex flex-1 items-center border-0 border-b-1 border-[#dcdfe6] border-solid pl-[20px]">
      面包屑
    </div>
  </div>
  <div class="main-container flex">
    <BaseSide />
    <div w="full" py="4">
      <RouterView />
    </div>
  </div>
</template>

  <!-- 它这里嵌套路由是存在问题的，需要做额外的处理 -->
