<script lang="ts" setup>
// import { useUserStore } from '~/store';
</script>

<template>
  <div class="font-bold">修改密码</div>
  <el-alert
    title="密码更新成功后，您将被重定向到登录页面，您可以使用新密码重新登录。"
    type="info"
    show-icon
    :closable="false"
  />
  <el-form label-position="right" label-width="auto" class="ml-10">
    <el-form-item label="当前密码">
      <el-input placeholder="请输入当前密码"></el-input>
      <div class="ep-text__tip text-xs leading-8">
        必须提供当前登录用户密码才能进行更改
      </div>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input placeholder="请输入新密码"></el-input>
      <div class="relative w-3/5">
        <PasswordStrengthMeter strength-meter-only class="w-full" />
        <div class="ep-text__tip text-xs leading-8">
          请输入包含英文、数字的6-20位密码
        </div>
      </div>
    </el-form-item>
    <el-form-item label="确认信密码">
      <el-input placeholder="请再次输入新密码"></el-input>
    </el-form-item>
    <el-form-item label=" ">
      <el-button type="primary">保存密码</el-button>
    </el-form-item>
  </el-form>
</template>
