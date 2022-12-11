<template>
  <button @click="change('green')">变</button>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const change = inject("change", Function);
</script>

<style lang="less" scoped></style>
