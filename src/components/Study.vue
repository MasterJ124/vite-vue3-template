<template>
  <div>{{ count }}</div>
  <div>{{ state.count }}</div>
  <button @click="update">点击</button>
  <div>自定义hook函数</div>
  <div>x: {{ x }}</div>
  <div>y: {{ y }}</div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, watchEffect } from "vue";
import useMouseClick from "../hooks/useMouseClick";
import useRequest from "../hooks/useRequest";

const count = ref<number>(0);
const state = reactive({
  count: 1,
  name: "哈哈哈",
});
const name = ref<string>("啊啊啊");
const gender = "女";

const { x, y } = useMouseClick();

const { loading, data, errorMsg } = useRequest<Array<any>>(
  "https://data.bilibili.com/s/miniloader_online?jsonp=jsonp"
);

watch(data, () => {
  if (data.value) console.log(data.value.length);
});

watch(count, () => {
  console.log("变");
});
/* 
  watch多个数据: 
  使用数组来指定
  如果是ref对象, 直接指定
  如果是reactive对象中的属性,  必须通过函数来指定
*/
watch([() => state.count, () => state.name], () => {
  console.log("多个属性监听");
});
watch([() => gender], () => {
  console.log("监听非响应式属性");
});
watchEffect(() => {
  name.value = state.name;
});

function update(): void {
  count.value++;
  state.count++;
}
</script>
