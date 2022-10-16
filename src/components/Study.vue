<template>
  <div>{{ count }}</div>
  <div>{{ state.count }}</div>
  <button @click="update">点击</button>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

const count = ref<number>(0);
const state = reactive({
  count: 1,
});

function update(): void {
  count.value++;
  state.count++;
}
</script>
