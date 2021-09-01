const bossList = [
  {
    id: 1,
    name: 'boss1',
    c_name: '斯瓦尼亚萨满',
    time: [900, 8100, 15300, 22500, 29700, 36900, 44100, 51300, 58500, 65700, 72900, 80100],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/9/9d/Icebrood_Goliath.jpg',
    waypoint: {
      name: '文德里克的山庄',
      coord: [23152.1, 13214.3],
      code: '[&BH4BAAA=]',
    },
    level: '10',
  },
  {
    id: 2,
    name: 'boss2',
    c_name: '巨型丛林地虫',
    time: [4500, 11700, 18900, 26100, 33300, 40500, 47700, 54900, 62100, 69300, 76500, 83700],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/d/d6/Great_Jungle_Wurm.jpg',
    waypoint: {
      name: '暮光之根',
      coord: [9583.34, 16580.6],
      code: '[&BH4BAAA=]',
    },
    level: '15',
  },
  {
    id: 3,
    name: 'boss3',
    c_name: '暗影巨兽',
    time: [6300, 13500, 20700, 27900, 35100, 42300, 49500, 56700, 63900, 71100, 78300, 85500],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/d/da/Shadow_Behemoth.jpg',
    waypoint: {
      name: '迷沼避难所',
      coord: [12191.4, 13952.3],
      code: '[&BEEFAAA=]',
    },
    level: '15',
  },
  {
    id: 4,
    name: 'boss4',
    c_name: '火焰元素',
    time: [2700, 9900, 17100, 24300, 31500, 38700, 45900, 53100, 60300, 67500, 74700, 81900],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url:
      'https://wiki.guildwars2.com/images/thumb/8/89/Greater_Fire_Elemental.jpg/710px-Greater_Fire_Elemental.jpg',
    waypoint: {
      name: '幸存者营地',
      coord: [7809.93, 18081.8],
      code: '[&BEYAAAA=]',
    },
    level: '15',
  },
  {
    id: 5,
    name: 'boss5',
    c_name: '三重麻烦',
    time: [3600, 18000, 32400, 43200, 57600, 73800],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/1/1f/Amber_Great_Jungle_Wurm.jpg',
    waypoint: {
      name: '峡口驻守站',
      coord: [16633.4, 17687.5],
      code: '[&BKoBAAA=]',
    },
    level: '37',
  },
  {
    id: 6,
    name: 'boss6',
    c_name: '莫迪尔沃尔格斯',
    time: [1800, 12600, 23400, 34200, 45000, 55800, 66600, 77400],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/f/ff/Modniir_Sage.jpg',
    waypoint: {
      name: '偶蹄',
      coord: [16041.3, 9790.83],
      code: '[&BLEAAAA=]',
    },
    level: '43',
  },
  {
    id: 7,
    name: 'boss7',
    c_name: '泰达·科文顿',
    time: [7200, 18000, 28800, 39600, 50400, 61200, 72000, 82800],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/8/8d/Admiral_Taidha_Covington.jpg',
    waypoint: {
      name: '笑鸥',
      coord: [16147.9, 17388.2],
      code: '[&BKgBAAA=]',
    },
    level: '50',
  },
  {
    id: 8,
    name: 'boss8',
    c_name: '碎裂巨兽',
    time: [0, 10800, 21600, 32400, 43200, 54000, 64800, 75600],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/f/fb/The_Shatterer_original.jpg',
    waypoint: {
      name: '灼热盆地',
      coord: [29823.4, 12884.3],
      code: '[&BE4DAAA=]',
    },
    level: '50',
  },
  {
    id: 9,
    name: 'boss9',
    c_name: '吞噬托',
    time: [0, 14400, 28800, 39600, 54000, 70200],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'http://gw2.kongzhong.com/act/gw2pic/wallpaper/lw_4_1920x1080.jpg',
    waypoint: {
      name: '破碎海岸',
      coord: [15879.6, 21976.6],
      code: '[&BNABAAA=]',
    },
    level: '65',
  },
  {
    id: 10,
    name: 'boss10',
    c_name: '超能毁灭者',
    time: [9000, 19800, 30600, 41400, 52200, 63000, 73800, 84600],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url:
      'https://wiki.guildwars2.com/images/thumb/d/dc/Destroyer_Emberknight.jpg/1024px-Destroyer_Emberknight.jpg',
    waypoint: {
      name: '漩涡',
      coord: [19219.3, 23131.1],
      code: '[&BM0CAAA=]',
    },
    level: '66',
  },
  {
    id: 11,
    name: 'boss11',
    c_name: '魔像马克II型',
    time: [3600, 14400, 25200, 36000, 46800, 57600, 68400, 79200],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/4/4f/Inquest_Golem_Mark_II.jpg',
    waypoint: {
      name: '旧锤据点',
      coord: [21149.5, 22916.4],
      code: '[&BNQCAAA=]',
    },
    level: '68',
  },
  {
    id: 12,
    name: 'boss12',
    c_name: '卓玛之爪',
    time: [5400, 16200, 27000, 37800, 48600, 59400, 70200, 81000],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url: 'https://wiki.guildwars2.com/images/1/15/Claw_of_Jormag.jpg',
    waypoint: {
      name: '地震',
      coord: [23529, 9500.75],
      code: '[&BHoCAAA=]',
    },
    level: '80',
  },
  {
    id: 13,
    name: 'boss13',
    c_name: '喀壳虫女王',
    time: [10800, 25200, 36000, 50400, 66600, 82800],
    lastTime: 0,
    nextTime: 0,
    alarm: false,
    link_url:
      'https://wiki.guildwars2.com/images/thumb/9/9e/Legendary_Karka_Queen.jpg/240px-Legendary_Karka_Queen.jpg',
    waypoint: {
      name: '喀壳营地',
      coord: [12837.9, 20382.5],
      code: '[&BNcGAAA=]',
    },
    level: '80',
  },
];

export default bossList;
