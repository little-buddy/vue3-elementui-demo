<template>
  <BaseHeader />
  <div class="h-[48px] w-full flex">
    <div
      class="ep-box__border w-[240px] flex items-center border-0 border-b-1 border-r-1 border-solid pl-[20px] font-bold"
    >
      工作台
    </div>
    <div
      class="ep-box__border flex flex-1 items-center border-0 border-b-1 border-solid pl-[20px]"
    >
      <!-- 这个面包屑的功能有点难搞的 -->
      <Breadcrumb />
    </div>
  </div>
  <div class="main-container flex">
    <div class="h-full">
      <BaseSide />
    </div>
    <div w="full" class="bg-[#f6f8f9]">
      <RouterView />
    </div>
  </div>
</template>

<!-- 它这里嵌套路由是存在问题的，需要做额外的处理 -->
