import { RouteRecordRaw } from 'vue-router';
import { LayoutVideo } from '@/router/constant';

// 外部链接模块
const videoLinkRouter: Array<RouteRecordRaw> = [
  {
    path: '/videocreation',
    component: LayoutVideo,
    redirect: '/videocreation/videoAdjust',
    children: [
      {
        path: '/videocreation/videoAdjust',
        name: 'adjust',
        component: () => import('@/views/videocreation/videoAdjust/index.vue'),
        meta: {
          keepAlive: true,
          title: '视频调试',
          key: 'adjust',
        },
      },
      {
        path: '/videocreation/videoSynthesis',
        name: 'synthesis',
        component: () =>
          import('@/views/videocreation/videoSynthesis/index.vue'),
        meta: {
          keepAlive: true,
          title: '视频合成',
          key: 'synthesis',
        },
      },
      {
        path: '/videocreation/videoCombination',
        name: 'combination',
        component: () =>
          import('@/views/videocreation/videoCombination/index.vue'),
        meta: {
          keepAlive: true,
          title: '组合优化',
          key: 'combination',
        },
      },
    ],
  },
];

export default videoLinkRouter;
