import { createApp } from 'vue';
import App from './App.vue';
import '@/style/reset.less';
import '@/style/common.less';
import router from './router';
// pinia store
import pinia from '@/store/index';
// 自定义指令
import directives from '@/directives/index';

createApp(App).use(router).use(pinia).use(directives).mount('#app');
