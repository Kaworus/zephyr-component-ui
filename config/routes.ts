﻿export default [
  { path: '/home', name: '首页', icon: 'home', component: './Home' },
  { path: '/boss', name: 'BOSS计时器', icon: 'fieldTime', component: './Boss' },
  { path: '/items', name: '物品搜索', icon: 'search', component: './Items' },
  { path: '/introduction', name: '攻略合集', icon: 'book', component: './Introduction' },
  { path: '/simulation', name: '特长模拟器', icon: 'experiment', component: './Simulation' },
  { path: '/', redirect: '/home' },
  { component: './404' },
];