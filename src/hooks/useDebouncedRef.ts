// 自定义ref防抖
import { customRef } from "vue";

export default function <T>(value: T, delay = 500): any {
  let timer: any;
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉vue追踪数据
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
