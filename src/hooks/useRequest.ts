// 发送ajax的请求
import { ref } from "vue";
import axios from "axios";

export default function <T>(url: string): any {
  const loading = ref<boolean>(true);
  const data = ref<T>();
  const errorMsg = ref<string>("");

  axios
    .get(url)
    .then((res) => {
      data.value = res.data;
    })
    .catch((err) => {
      errorMsg.value = err;
    })
    .finally(() => {
      loading.value = false;
    });

  return {
    loading,
    data,
    errorMsg,
  };
}
