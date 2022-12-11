<template>
  <div>
    <p>使用自定义ref实现防抖</p>
    <input v-model="keyword" type="text" />
    <p>{{ keyword }}</p>
  </div>
</template>

<script lang="ts" setup>
import useDebouncedRef from "../hooks/useDebouncedRef";

const keyword = useDebouncedRef<string>("试试");
</script>

<style lang="less" scoped></style>
