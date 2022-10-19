export const menu = [
  {
    icon: 'home-filled',
    title: '首页',
    path: '/home/index',
  },
  {
    icon: 'paperclip',
    title: '视频制作',
    path: '/videocreation/videoAdjust',
    isLink: true,
  },
  {
    icon: 'warning-filled',
    title: '错误页面',
    path: '/error',
    children: [
      {
        path: '/404',
        title: '404页面',
        icon: 'menu',
      },
      {
        path: '/403',
        title: '403页面',
        icon: 'menu',
      },
      {
        path: '/500',
        title: '500页面',
        icon: 'menu',
      },
    ],
  },
  //{
  //icon: 'paperclip',
  //title: '视频制作',
  //path: '/videocreation/videoAdjust',
  //isLink: true,
  //children: [
  //  {
  //    path: '/videocreation/videoAdjust',
  //    title: '视频调试',
  //    icon: 'menu',
  //    isLink: true,
  //  },
  //  {
  //    path: '/videocreation/videoSynthesis',
  //    title: '视频合成',
  //    icon: 'menu',
  //    isLink: true,
  //  },
  //  {
  //    path: '/videocreation/videoCombination',
  //    title: '组合优化',
  //    icon: 'menu',
  //    isLink: true,
  //  },
  //],
  //},
];
