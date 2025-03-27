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
      <Breadcrumb />
    </div>
  </div>
  <div class="main-container flex">
    <div class="h-full">
      <BaseSide />
    </div>
    <div class="content-bg w-full overflow-hidden">
      <RouterView />
    </div>
  </div>
</template>

<style>
.content-bg {
  background-color: var(--ep-fill-color-light);
}
</style>
