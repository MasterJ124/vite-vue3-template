<template>
  <div class="not-container">
    <img src="@/assets/images/403.png" class="not-img" alt="403" />
    <div class="not-detail">
      <h2>403</h2>
      <h4>抱歉，您无权访问该页面~</h4>
      <el-button type="primary" @click="goHome">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="403">
import { HOME_URL } from '@/config/config';
import router from '@/router/index';
const goHome = router.push(HOME_URL);
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
