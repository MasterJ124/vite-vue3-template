<template>
  <h3>provide 与 inject</h3>
  <p>当前颜色：{{ color }}</p>
  <Son></Son>
</template>

<script lang="ts" setup>
import { ref, provide } from "vue";
import Son from "./Son.vue";

const color = ref<string>("red");
provide("change", change);

function change(value: string): void {
  color.value = value;
}
</script>

<style lang="less" scoped></style>
