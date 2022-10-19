import axios, {
  AxiosRequestHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
// import { ACCESS_TOKEN } from '@/store/mutation-types';
// import ls from '@/utils/Storage';
import { ElNotification } from 'element-plus';
// import { logout } from '@/api/index';
// import { clearUserInfo } from '@/utils/util';
// import router from '@/router';

const ContentType = {
  urlencoded: 'application/x-www-form-urlencoded;charset=UTF-8',
  json: 'application/json',
  formData: 'multipart/form-data',
};

// 创建 axios 实例   withCredentials: true,
const service = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 1000 * 60 * 5, // 请求超时时间
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// 转换FormData
service.defaults.transformRequest = (data) => {
  const formData = new FormData();
  for (const key in data) {
    if (data[key] && data[key].constructor === Array) {
      if (data[key][0]) {
        if (data[key][0].constructor === Object) {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          data[key].forEach((item: any) => {
            formData.append(key + '[]', item);
          });
        }
      } else {
        formData.append(key + '[]', '');
      }
    } else if (data[key] && data[key].constructor === Object) {
      formData.append(key, JSON.stringify(data[key]));
    } else {
      formData.append(
        key,
        data[key] === 0 || data[key] === false ? data[key] : data[key] || '',
      );
    }
  }
  return formData;
};

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
  if (error && error.message && error.message.includes('timeout')) {
    ElNotification.error({
      title: '请求超时',
      message: '请重试',
      duration: 0,
    });
  }
  if ((error as any).data) {
    const data = (error as any).data;
    if (data.code === 403) {
      ElNotification.error({
        title: '请求错误',
        message: data.message,
      });
    }
  }
  return Promise.reject(error);
};

// 请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!navigator.onLine) {
    ElNotification.error({
      title: '网络断开',
      message: '请检查网络',
    });
  }
  // const token = ls.get(ACCESS_TOKEN);
  // if (token) {
  //   config.headers['X-Token'] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  (config.headers as AxiosRequestHeaders)['X-Token'] =
    '6afc52c24f4f31207d96c2559f399f6c';
  (config.headers as AxiosRequestHeaders)['Content-Type'] =
    ContentType[config.data instanceof FormData ? 'formData' : 'json'];
  return config;
}, errorHandler);

// 响应拦截
let hasExist = false;

service.interceptors.response.use((res: AxiosResponse<any>) => {
  // 身份已失效，请重新登录
  if (res.data.code === 4002) {
    if (!hasExist) {
      hasExist = true;
      ElNotification.error({
        title: '提示',
        message: '身份已失效，请重新登录',
      });
      // 登出操作
      // logout().then((res) => {
      //   clearUserInfo();
      //   router.push({ path: '/user/login' });
      // });
    }
    return false;
  } else {
    hasExist = false;
  }
  return res.data;
}, errorHandler);

// 通用get
const $get = (url: string, params?: object, _object = {}): Promise<any> => {
  return service.get(url, { params, ..._object });
};
// 通用post
const $post = (url: string, params?: object, _object = {}): Promise<any> => {
  return service.post(url, params, _object);
};

export { $get, $post };

export { service as axios };
