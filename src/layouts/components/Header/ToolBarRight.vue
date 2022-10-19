<template>
  <div class="tool-bar-ri">
    <div class="header-icon" />
    <span class="username">个人信息</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.tool-bar-ri {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  .header-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 230px;
    margin-right: 22px;
  }
  .username {
    margin: 0 20px 0 0;
    font-size: 15px;
  }
}
</style>
