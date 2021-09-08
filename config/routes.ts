export default [
  { path: '/home', name: '首页', icon: 'home', component: './Home' },
  { path: '/boss', name: 'BOSS计时器', icon: 'fieldTime', component: './Boss' },
  { path: '/items', name: '物品搜索', icon: 'search', component: './Items' },
  { path: '/simulation', name: '属性模拟器', icon: 'experiment', component: './Simulation' },
  { path: '/recruitment', name: '队伍招募', icon: 'Crown', component: './Recruitment' },
  {
    path: '/introduction',
    name: '攻略合集',
    icon: 'book',
    routes: [
      {
        path: '/introduction/bd',
        name: '职业攻略',
        component: './Introduction/Bd',
        icon: 'book',
      },
      {
        path: '/introduction/Festival',
        name: '节日攻略',
        component: './Introduction/Festival',
        icon: 'book',
      },
    ],
  },
  { path: '/', redirect: '/home' },
  { component: './404' },
];
