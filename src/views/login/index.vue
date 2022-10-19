<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img src="@/assets/images/login_left0.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">程序化创意</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from './components/LoginForm.vue';
</script>

<style scoped lang="less">
@import './index.less';
</style>
