<template>
  <div h-full w-full flex overflow-hidden bg-white>
    <div class="relative h-full w-1/3 bg-[length:100%_100%] bg-[url(~/assets/imgs/login-img.png)] text-white max-md:hidden">
      <div class="relative z-2 w-full p-[40px] space-y-2">
        <p text="[40px]" font-bold>
          美乐低代码—数字化开发平台
        </p>
        <p class="text-[18px] font-bold">
          登录用户/密码：admin/admin (每天重置数据)
        </p>
        <p class="text-[14px] text-gray font-bold leading-6">
          快速搭建企业管理系统：CRM客户管理、OA办公自动化、进销存、工作流、项目管理，无需编程基础，1~3天即可交付上线。
        </p>
      </div>

      <div class="absolute top-0 z-1 h-full w-full bg-[#0000a04d]" />

      <div class="bottom-0 z-2 w-full p-[40px] text-center text-xs text-white font-bold absolute!">
        © 上海极昇数科数字科技有限公司提供技术支持
      </div>
    </div>

    <div flex-1 class="flex bg-[length:100%_100%] bg-[url(~/assets/imgs/login-bg.png)]">
      <div class="m-auto w-[340px] py-[20px]">
        <!-- title -->
        <div class="flex items-center space-x-2">
          <div class="h-10 w-10 bg-[length:100%_100%] bg-[url(~/assets/imgs/login-icon.png)]" />
          <p class="text-[24px] font-bold">
            美乐数字化开发平台
          </p>
        </div>

        <!-- tabs -->
        <el-tabs>
          <el-tab-pane label="账号登录">
            <LoginForm/>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
