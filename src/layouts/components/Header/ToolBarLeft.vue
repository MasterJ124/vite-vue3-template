<template>
  <div class="tool-bar-lf">toubu</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { GlobalStore } from '@/store';

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
</script>

<style scoped lang="scss">
.tool-bar-lf {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
