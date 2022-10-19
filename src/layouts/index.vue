<!-- 这里是一次性加载 LayoutComponents -->
<template>
  <component :is="LayoutComponents[themeConfig.layout]" />
</template>

<script setup lang="ts" name="layout">
import { computed, onMounted } from 'vue';
import { GlobalStore } from '@/store';
import { MenuStore } from '@/store/modules/menu';
import { menu } from './mockData/menu';
import LayoutBasic from './LayoutBasic/index.vue';
import LayoutVideocreation from './LayoutVideocreation/index.vue';

const LayoutComponents: any = {
  basic: LayoutBasic,
  videocreation: LayoutVideocreation,
};

const globalStore = GlobalStore();
const menuStore = MenuStore();
const themeConfig = computed(() => globalStore.themeConfig);

onMounted(() => {
  // 可设置按钮权限列表和菜单权限
  getMenuList();
});

// 获取菜单列表中
const getMenuList = async () => {
  //const { data } = await getAuthMenu();
  // 把路由菜单处理成一维数组（存储到 pinia ）
  menuStore.setMenuList(menu);
};
</script>
