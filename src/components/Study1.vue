<template>
  <h2>计算属性和监视</h2>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const video = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { d: 4 },
  { e: 1 },
  { f: 2 },
  { g: 3 },
  { h: 4 },
  { i: 4 },
  { j: 4 },
];
const audio = [
  { a1: 1 },
  { b1: 2 },
  { c1: 3 },
  { d1: 4 },
  { e1: 1 },
  { f1: 2 },
  { g1: 3 },
  { h1: 4 },
  { i1: 4 },
  { j1: 4 },
];

onMounted(() => {
  mergeArray(video, audio);
});

function mergeArray(arr1, arr2) {
  const time = Date.now();
  const arr = [arr1, arr2];
  const newArry = arr
    .reduce(
      (pre, cur) =>
        pre
          .map((x) => cur.map((y) => x.concat(y)))
          .reduce((pre, cur) => pre.concat(cur), []),
      [[]]
    )
    .map((item) =>
      item.reduce((a, b) => {
        return { ...a, ...b };
      }, {})
    );
  console.log(`耗时 ${Date.now() - time}s`);
  console.log(JSON.stringify(newArry));
}
</script>

<style lang="less" scoped></style>
