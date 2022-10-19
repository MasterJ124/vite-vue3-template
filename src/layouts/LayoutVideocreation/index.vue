<!-- 纵向布局 -->
<template>
  <el-container>
    <el-header>
      <span>程序化创意</span>
      <el-button-group class="ml-4">
        <el-button type="primary" @click="handleClickButonRoute('adjust')">
          视频调试
        </el-button>
        <el-button type="primary" @click="handleClickButonRoute('synthesis')">
          视频组合
        </el-button>
        <el-button type="primary" @click="handleClickButonRoute('combination')">
          组合优化
        </el-button>
      </el-button-group>
    </el-header>
    <el-main>
      <router-view v-slot="{ Component, route }">
        <transition appear name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts" name="layoutVertical">
import { useRouter } from 'vue-router';

const router = useRouter();
const handleClickButonRoute = (videoType: string) => {
  console.log('videoType', videoType);
  if (videoType === 'synthesis') {
    router.push('/videocreation/videoSynthesis');
  } else if (videoType === 'adjust') {
    router.push('/videocreation/videoAdjust');
  } else {
    router.push('/videocreation/videoCombination');
  }
  //router.push(subItem.path);
};
</script>

<style scoped lang="less"></style>
