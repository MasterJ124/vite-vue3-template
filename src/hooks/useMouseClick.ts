import { ref, onMounted, onBeforeUnmount } from "vue";
// 收集鼠标点击
export default function (): any {
  const x = ref<number>(0);
  const y = ref<number>(0);

  onMounted(() => {
    window.addEventListener("click", mouseClick);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", mouseClick);
  });

  function mouseClick(event: MouseEvent): void {
    x.value = event.pageX;
    y.value = event.pageY;
  }
  return {
    x,
    y,
  };
}
