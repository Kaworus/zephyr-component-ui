export default [
  { path: '/home', name: '首页', icon: 'home', component: './Home' },
  { path: '/boss', name: 'BOSS计时器', icon: 'fieldTime', component: './Boss' },
  { path: '/items', name: '物品搜索', icon: 'search', component: './Items' },
  {
    path: '/BD',
    name: '职业配装',
    icon: 'experiment',
    routes: [
      { path: '/BD', redirect: '/BD/rank' },
      { path: '/BD/rank', name: '输出排行', icon: 'experiment', component: './BD/Rank' },
    ],
  },
  // { path: '/simulation', name: '属性模拟器', icon: 'experiment', component: './Simulation' },
  // { path: '/recruitment', name: '队伍招募', icon: 'Crown', component: './Recruitment' },
  {
    path: '/introduction',
    name: '攻略合集',
    icon: 'book',
    routes: [
      {
        path: '/introduction/current',
        name: '当前事件',
        component: './Introduction/Current',
        icon: 'book',
      },
      {
        path: '/introduction/Festival',
        name: '节日攻略',
        component: './Introduction/Festival',
        icon: 'book',
      },
      {
        path: '/introduction/FourWinds',
        name: '四风节',
        hideInMenu: true,
        icon: 'experiment',
        component: './Introduction/Festival/FourWinds',
      },
    ],
  },
  { path: '/', redirect: '/home' },
  { component: './404' },
];
