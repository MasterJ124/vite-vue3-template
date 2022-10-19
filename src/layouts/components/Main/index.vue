<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive v-if="isRouterRefresh">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
  <el-footer v-if="themeConfig.footer">
    <Footer />
  </el-footer>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import { GlobalStore } from '@/store';
import Footer from '@/layouts/components/Footer/index.vue';

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);

// 刷新当前页面
const isRouterRefresh = ref(true);
const refreshCurrentPage = () => {
  isRouterRefresh.value = false;
  nextTick(function () {
    isRouterRefresh.value = true;
  });
};
</script>

<style scoped lang="less">
.el-main {
  box-sizing: border-box;
  padding: 10px 12px;
  overflow-x: hidden;
  background: #f0f2f5;
  &::-webkit-scrollbar {
    background-color: #f0f2f5;
  }
}
.el-footer {
  height: auto;
  padding: 0;
}
</style>
