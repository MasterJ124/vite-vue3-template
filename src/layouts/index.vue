<!-- 这里是一次性加载 LayoutComponents -->
<template>
  <component :is="LayoutComponents[themeConfig.layout]" />
</template>

<script setup lang="ts" name="layout">
import { computed, onMounted } from 'vue';
import { GlobalStore } from '@/store';
import LayoutBasic from './LayoutBasic/index.vue';
import LayoutVideocreation from './LayoutVideocreation/index.vue';

const LayoutComponents: any = {
  basic: LayoutBasic,
  videocreation: LayoutVideocreation,
};

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);

onMounted(() => {
  // 可设置按钮权限列表和菜单权限
});
</script>
