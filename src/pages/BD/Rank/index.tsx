import React from 'react';
import { Card, Col, Row, Typography, Anchor, Tabs } from 'antd';
import {
  DoubleLeftOutlined,
  SelectOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers, Tooltip } from 'armory-component-ui';
import 'armory-component-ui/styles.css';
import { Gw2Skill, Gw2Trait, LanguageProvider } from 'armory-component-ui';
import styles from './index.less';

const { TabPane } = Tabs;

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk),
);

const { Title, Paragraph } = Typography;
const { Link } = Anchor;

const specialtyIcon = {
  执念剑灵: 'https://snowcrows.com/assets/professions/profession-guardian.svg',
  堕落先知: 'https://snowcrows.com/assets/professions/profession-necromancer.svg',
  灵刃咏者: 'https://snowcrows.com/assets/professions/profession-mesmer.svg',
  守护者: 'https://snowcrows.com/assets/professions/profession-guardian.svg',
  暴风使: 'https://snowcrows.com/assets/professions/profession-tempest.svg',
  编织者: 'https://snowcrows.com/assets/professions/profession-weaver.svg',
  龙魂使: 'https://snowcrows.com/assets/professions/profession-renegade.svg',
  预告者: 'https://snowcrows.com/assets/professions/profession-herald.svg',
  独行侠: 'https://snowcrows.com/assets/professions/profession-daredevil.svg',
  猎龙者: 'https://snowcrows.com/assets/professions/profession-dragonhunter.svg',
  夺魂者: 'https://snowcrows.com/assets/professions/profession-reaper.svg',
  燃火者: 'https://snowcrows.com/assets/professions/profession-firebrand.svg',
  时空术士: 'https://snowcrows.com/assets/professions/profession-chronomancer.svg',
  幻象术士: 'https://snowcrows.com/assets/professions/profession-mirage.svg',
  神枪手: 'https://snowcrows.com/assets/professions/profession-deadeye.svg',
  魂兽师: 'https://snowcrows.com/assets/professions/profession-soulbeast.svg',
  灾厄师: 'https://snowcrows.com/assets/professions/profession-scourge.svg',
  破法者: 'https://snowcrows.com/assets/professions/profession-spellbreaker.svg',
  狂战士: 'https://snowcrows.com/assets/professions/profession-berserker.svg',
  全息师: 'https://snowcrows.com/assets/professions/profession-holosmith.svg',
  机械师: 'https://snowcrows.com/assets/professions/profession-scrapper.svg',
};

const color = {
  幻术: '#724192',
  元素: '#a3362e',
  魂武: '#572435',
  盗贼: '#495578',
  唤灵: '#3f5847',
  守护: '#67aecb',
  游侠: '#8ea53a',
  战士: '#bc8d16',
  工程: '#98692c',
};
const largeData = [
  {
    id: 1,
    dps: 42097,
    type: '幻术',
    specialty: '灵刃咏者',
    name: '直伤',
    avg: 41700,
    href: '/boss',
    bilibili: null,
  },
  {
    id: 2,
    dps: 41335,
    type: '元素',
    specialty: '编织者',
    name: '症状丨匕首',
    avg: 40900,
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=39&share_source=copy_web',
  },
  {
    id: 3,
    dps: 37432,
    type: '元素',
    specialty: '暴风使',
    name: '症状',
    avg: 37000,
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=36&share_source=copy_web',
  },
  {
    id: 8,
    dps: 36585,
    type: '元素',
    specialty: '暴风使',
    name: '直伤',
    avg: 35400,
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=38&share_source=copy_web',
  },
  {
    id: 9,
    dps: 35102,
    type: '魂武',
    specialty: '龙魂使',
    name: '直伤',
    avg: 34700,
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=14&share_source=copy_web',
  },
  {
    id: 4,
    dps: 28439,
    type: '魂武',
    specialty: '龙魂使',
    name: '直伤增益',
    avg: 28000,
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=19&share_source=copy_web',
  },
];

const smallData = [
  {
    name: '症状',
    id: 1,
    dps: 45376,
    avg: 44000,
    specialty: '堕落先知',
    type: '唤灵',
    href: '/boss',
    bilibili: null,
  },
  {
    name: '症状',
    id: 2,
    dps: 40844,
    avg: 39900,
    specialty: '独行侠',
    type: '盗贼',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=23&share_source=copy_web',
  },
  {
    name: '症状增益',
    id: 3,
    dps: 40322,
    avg: 39900,
    specialty: '龙魂使',
    type: '魂武',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=17&share_source=copy_web',
  },
  {
    name: '直伤丨美德',
    id: 4,
    dps: 40023,
    avg: 39600,
    specialty: '猎龙者',
    type: '守护',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=9&share_source=copy_web',
  },
  {
    name: '症状',
    id: 5,
    dps: 39326,
    avg: 38800,
    specialty: '夺魂者',
    type: '唤灵',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=42&share_source=copy_web',
  },
  {
    name: '症状丨密语档案',
    id: 6,
    dps: 39171,
    avg: 38800,
    specialty: '燃火者',
    type: '守护',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=12&share_source=copy_web',
  },
  {
    name: '直伤丨聚能器+危机时刻',
    id: 7,
    dps: 39146,
    avg: 38800,
    specialty: '时空术士',
    type: '幻术',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=51&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 8,
    dps: 39044,
    avg: 38700,
    specialty: '神枪手',
    type: '盗贼',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=21&share_source=copy_web',
  },
  {
    name: '症状丨单手剑',
    id: 9,
    dps: 38537,
    avg: 38400,
    specialty: '编织者',
    type: '元素',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=37&share_source=copy_web',
  },
  {
    name: '混伤',
    id: 10,
    dps: 38469,
    avg: 38000,
    specialty: '编织者',
    type: '元素',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=35&share_source=copy_web',
  },
  {
    name: '症状丨无情之判',
    id: 11,
    dps: 37683,
    avg: 37000,
    specialty: '燃火者',
    type: '守护',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=11&share_source=copy_web',
  },
  {
    name: '混伤',
    id: 12,
    dps: 37648,
    avg: 37000,
    specialty: '魂兽师',
    type: '游侠',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=25&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 13,
    dps: 37647,
    avg: 37000,
    specialty: '狂战士',
    type: '战士',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=3&share_source=copy_web',
  },
  {
    name: '直伤丨单手剑',
    id: 14,
    dps: 37458,
    avg: 37000,
    specialty: '全息师',
    type: '工程',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=31&share_source=copy_web',
  },
  {
    name: '症状',
    id: 15,
    dps: 37376,
    avg: 36700,
    specialty: '神枪手',
    type: '盗贼',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=20&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 16,
    dps: 37326,
    avg: 36800,
    specialty: '执念剑灵',
    type: '守护',
    href: '/boss',
    bilibili: null,
  },
  {
    name: '直伤丨步枪',
    id: 17,
    dps: 37115,
    avg: 36500,
    specialty: '全息师',
    type: '工程',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=32&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 18,
    dps: 37082,
    avg: 36500,
    specialty: '编织者',
    type: '元素',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=41&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 19,
    dps: 36646,
    avg: 36400,
    specialty: '守护者',
    type: '守护',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=8&share_source=copy_web',
  },
  {
    name: '直伤丨巨剑',
    id: 20,
    dps: 36556,
    avg: 36000,
    specialty: '魂兽师',
    type: '游侠',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=26&share_source=copy_web',
  },
  {
    name: '症状',
    id: 21,
    dps: 36422,
    avg: 36100,
    specialty: '全息师',
    type: '工程',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=29&share_source=copy_web',
  },
  {
    name: '症状',
    id: 22,
    dps: 36325,
    avg: 36000,
    specialty: '狂战士',
    type: '战士',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?share_source=copy_web',
  },
  {
    name: '直伤丨聚能器+强化敏捷',
    id: 23,
    dps: 36008,
    avg: 35700,
    specialty: '时空术士',
    type: '幻术',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=50&share_source=copy_web',
  },
  {
    name: '症状',
    id: 24,
    dps: 35989,
    avg: 35600,
    specialty: '灾厄师',
    type: '唤灵',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=43&share_source=copy_web',
  },
  {
    name: '症状',
    id: 25,
    dps: 35938,
    avg: 35600,
    specialty: '魂兽师',
    type: '游侠',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=28&share_source=copy_web',
  },
  {
    name: '直伤丨光辉',
    id: 26,
    dps: 35501,
    avg: 35200,
    specialty: '猎龙者',
    type: '守护',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=10&share_source=copy_web',
  },
  {
    name: '直伤丨长弓',
    id: 27,
    dps: 35145,
    avg: 34500,
    specialty: '魂兽师',
    type: '游侠',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=27&share_source=copy_web',
  },
  {
    name: '症状',
    id: 28,
    dps: 35129,
    avg: 34800,
    specialty: '幻象术士',
    type: '幻术',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=47&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 29,
    dps: 35070,
    avg: 34600,
    specialty: '独行侠',
    type: '盗贼',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=22&share_source=copy_web',
  },
  {
    name: '症状旗帜',
    id: 30,
    dps: 34617,
    avg: 34200,
    specialty: '狂战士',
    type: '战士',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=2&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 31,
    dps: 34302,
    avg: 33800,
    specialty: '夺魂者',
    type: '唤灵',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=44&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 32,
    dps: 33954,
    avg: 33500,
    specialty: '机械师',
    type: '工程',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=30&share_source=copy_web',
  },
  {
    name: '直伤旗帜丨力量',
    id: 33,
    dps: 33686,
    avg: 33200,
    specialty: '狂战士',
    type: '战士',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=5&share_source=copy_web',
  },
  {
    name: '症状增益',
    id: 34,
    dps: 31200,
    avg: 31200,
    specialty: '燃火者',
    type: '守护',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=13&share_source=copy_web',
  },
  {
    name: '直伤旗帜',
    id: 35,
    dps: 31129,
    avg: 30400,
    specialty: '破法者',
    type: '战士',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=7&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 36,
    dps: 30652,
    avg: 30100,
    specialty: '破法者',
    type: '战士',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=6&share_source=copy_web',
  },
  {
    name: '症状',
    id: 37,
    dps: 30139,
    avg: 29800,
    specialty: '预告者',
    type: '魂武',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=18&share_source=copy_web',
  },
  {
    name: '直伤旗帜丨战术',
    id: 38,
    dps: 30081,
    avg: 29500,
    specialty: '狂战士',
    type: '战士',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=4&share_source=copy_web',
  },
  {
    name: '直伤增益',
    id: 39,
    dps: 28673,
    avg: 28000,
    specialty: '机械师',
    type: '工程',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=33&share_source=copy_web',
  },
  {
    name: '直伤增益丨单手剑＋决斗',
    id: 40,
    dps: 28398,
    avg: 28100,
    specialty: '时空术士',
    type: '幻术',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=52&share_source=copy_web',
  },
  {
    name: '症状增益',
    id: 41,
    dps: 28213,
    avg: 28000,
    specialty: '龙魂使',
    type: '魂武',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=17&share_source=copy_web',
  },
  {
    name: '直伤',
    id: 42,
    dps: 27777,
    avg: 27500,
    specialty: '预告者',
    type: '魂武',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=15&share_source=copy_web',
  },
  {
    name: '直伤增益丨聚能器＋决斗',
    id: 43,
    dps: 27418,
    avg: 27100,
    specialty: '时空术士',
    type: '幻术',
    href: '/boss',
    bilibili: 'https://www.bilibili.com/video/BV1aU4y1j7uM?p=53&share_source=copy_web',
  },
  {
    name: '直伤增益丨聚能器＋灵感',
    id: 44,
    dps: 19607,
    avg: 19100,
    specialty: '时空术士',
    type: '幻术',
    href: '/boss',
    bilibili: null,
  },
  {
    name: '直伤增益丨盾牌＋灵感',
    id: 45,
    dps: 18420,
    avg: 18200,
    specialty: '时空术士',
    type: '幻术',
    href: '/boss',
    bilibili: null,
  },
];
class Rank extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <LanguageProvider lang="zh">
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <BarChartOutlined />
                    输出基准
                  </span>
                }
                key="1"
              >
                <Row gutter={24}>
                  <Col xs={24} xl={21}>
                    <Card bordered={false} style={{ marginBottom: 24 }}>
                      <Paragraph style={{ margin: 0 }}>
                        声明：你在打循环的时候如果能有很好的运气，下面这些数据是可以被超越的，然而当你达到这些数据的时候你肯定已经很了解你这个职业和对应的循环了。有些木桩基准数据是要设置在超大体积下测试，目的是为了降低随机因素。所有的木桩基准数据都是在使用属性灌注下测试的。
                      </Paragraph>
                    </Card>
                    <Title level={1} id="rank">
                      输出基准
                    </Title>
                    <Row gutter={24}>
                      <Col span={24}>
                        <Title level={2} id="large">
                          大体积
                        </Title>
                        {largeData.map((item) => (
                          <Card
                            hoverable
                            bordered={false}
                            bodyStyle={{ padding: 0 }}
                            style={{ background: 'transparent', marginBottom: 24 }}
                            key={item.id}
                          >
                            <div
                              style={{
                                background: color[item.type],
                                borderRadius: '5px 5px 5px 0px',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 12px',
                                width: `${(item.dps / largeData[0].dps) * 100}%`,
                              }}
                            >
                              <img src={specialtyIcon[item.specialty]} height="24px"></img>
                              <span style={{ marginLeft: 12 }}>{item.name}</span>
                              {item.bilibili ? (
                                <a href={item.bilibili} target="_blank">
                                  <VideoCameraOutlined
                                    style={{ marginLeft: 12, fontSize: 20, color: 'white' }}
                                  />
                                </a>
                              ) : null}
                              <SelectOutlined
                                style={{ marginLeft: 8, fontSize: 16, marginRight: 12 }}
                              />
                              <span
                                style={{
                                  marginLeft: 'auto',
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <DoubleLeftOutlined
                                  rotate={90}
                                  style={{ marginRight: 4, marginLeft: 'auto' }}
                                />
                                <span style={{ fontSize: 16 }}>{item.dps}</span>
                                <span style={{ fontSize: 12, marginLeft: 4 }}>DPS</span>
                              </span>
                            </div>
                            <div
                              style={{
                                background: '#27272a',
                                height: '24px',
                                borderRadius: '0px 0px 5px 5px',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 12px',
                                width: `${(item.avg / largeData[0].dps) * 100}%`,
                              }}
                            >
                              <span style={{ fontSize: 12 }}>{item.specialty}</span>
                              <span style={{ marginLeft: 'auto' }}>
                                <span style={{ fontSize: 12 }}>~{item.avg}</span>
                                <span style={{ fontSize: 12, marginLeft: 4 }}>DPS</span>
                              </span>
                            </div>
                          </Card>
                        ))}
                      </Col>
                      <Col span={24}>
                        <Title level={2} id="small">
                          小体积
                        </Title>
                        {smallData.map((item) => (
                          <Card
                            hoverable
                            bordered={false}
                            bodyStyle={{ padding: 0 }}
                            style={{ background: 'transparent', marginBottom: 24 }}
                            key={item.id}
                          >
                            <div
                              style={{
                                background: color[item.type],
                                borderRadius: '5px 5px 5px 0px',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 12px',
                                width: `${(item.dps / smallData[0].dps) * 100}%`,
                              }}
                            >
                              <img src={specialtyIcon[item.specialty]} height="24px"></img>
                              <span style={{ marginLeft: 12 }}>{item.name}</span>
                              {item.bilibili ? (
                                <a href={item.bilibili} target="_blank">
                                  <VideoCameraOutlined
                                    style={{ marginLeft: 12, fontSize: 20, color: 'white' }}
                                  />
                                </a>
                              ) : null}
                              <SelectOutlined
                                style={{ marginLeft: 8, fontSize: 16, marginRight: 12 }}
                              />
                              <span
                                style={{
                                  marginLeft: 'auto',
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <DoubleLeftOutlined
                                  rotate={90}
                                  style={{ marginRight: 4, marginLeft: 'auto' }}
                                />
                                <span style={{ fontSize: 16 }}>{item.dps}</span>
                                <span style={{ fontSize: 12, marginLeft: 4 }}>DPS</span>
                              </span>
                            </div>
                            <div
                              style={{
                                background: '#27272a',
                                height: '24px',
                                borderRadius: '0px 0px 5px 5px',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 12px',
                                width: `${(item.avg / smallData[0].dps) * 100}%`,
                              }}
                            >
                              <span style={{ fontSize: 12 }}>{item.specialty}</span>
                              <span style={{ marginLeft: 'auto' }}>
                                <span style={{ fontSize: 12 }}>~{item.avg}</span>
                                <span style={{ fontSize: 12, marginLeft: 4 }}>DPS</span>
                              </span>
                            </div>
                          </Card>
                        ))}
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={0} xl={3}>
                    <Anchor offsetTop={72}>
                      <Link href="#rank" title="输出基准">
                        <Link href="#large" title="大体积" />
                        <Link href="#small" title="小体积" />
                      </Link>
                    </Anchor>
                    ,
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <SettingOutlined />
                    魔像设置
                  </span>
                }
                key="2"
              >
                <Row gutter={24}>
                  <Col xs={24} xl={21}>
                    <Title level={1} id="golem">
                      魔像设置
                    </Title>
                    <Title level={2} id="boons">
                      增益 & 职业增益
                    </Title>
                    <Row gutter={24}>
                      <Col xs={24} sm={12}>
                        <Card bordered={false} style={{ marginBottom: 24 }}>
                          <Title level={3}>增益</Title>
                          <p>
                            大多数团队都可以在实战中维持以下 7种增益，因此，测试中也使用这7种增益。
                          </p>
                          <Paragraph>
                            <ul>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/might.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  威能（提升伤害，效果可堆叠，最高25层。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/fury.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  激怒（暴击率提高20%。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/alacrity.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  急速（技能和行动速度变快。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/swiftness.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  敏捷（技能冷却时间缩短。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/quickness.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  迅捷（移动速度提高33%。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/regeneration.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  再生（每秒获得生命值。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/vigor.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  活力（耐力回复速度提升50%。）
                                </Paragraph>
                              </li>
                            </ul>
                          </Paragraph>
                        </Card>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Card bordered={false} style={{ marginBottom: 24 }}>
                          <Title level={3}>职业增益</Title>
                          <p>
                            从 2018.10.07 的版本平衡开始，所有症状类配置测试时不再使用 精确分布 （
                            工程师 ）。
                          </p>
                          <Title level={4}>游侠</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Skill id={12497} size={24} className={styles.skill}></Gw2Skill>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  冰霜精魄
                                </span>
                              </li>
                              <li>
                                <Gw2Skill id={12498} size={24} className={styles.skill}></Gw2Skill>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  旭日精魄
                                </span>
                              </li>
                              <li>
                                <Gw2Trait
                                  id={1016}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  眼观六路
                                </span>
                              </li>
                            </ul>
                          </Paragraph>
                          <Title level={4}>战士</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Skill id={14572} size={24} className={styles.skill}></Gw2Skill>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  力量旗帜
                                </span>
                              </li>
                              <li>
                                <Gw2Skill id={14571} size={24} className={styles.skill}></Gw2Skill>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  纪律旗帜
                                </span>
                              </li>
                              <li>
                                <Gw2Trait
                                  id={1482}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  强化盟友
                                </span>
                              </li>
                            </ul>
                          </Paragraph>
                        </Card>
                      </Col>
                    </Row>
                    <Title level={2} id="conditions">
                      症状
                    </Title>
                    <Row gutter={24}>
                      <Col xs={24} sm={12}>
                        <Card bordered={false} style={{ marginBottom: 24 }}>
                          <Title level={3}>受症状影响的特性</Title>
                          <p>
                            以下职业需要通过特定症状才能从特性中获益，使用精英职业时需要留意是否使用以下列出的原职业特性。
                          </p>
                          <Title level={4}>守护者</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Trait
                                  id={634}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  炽热之怒
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/burning.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                              <li>
                                <Gw2Trait
                                  id={568}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  光耀力量
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/burning.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                              <li>
                                <Gw2Trait
                                  id={1835}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  侵略狂热
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/cripple.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                            </ul>
                          </Paragraph>
                          <Title level={4}>魂武者</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Trait
                                  id={1792}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  定点毁灭
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/vulnerability.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                            </ul>
                          </Paragraph>
                          <Title level={4}>游侠</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Trait
                                  id={996}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  猎食突袭
                                </span>
                                <img
                                  src="https://render.guildwars2.com/file/28C4EC547A3516AF0242E826772DA43A5EAC3DF3/102839.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/397A613651BFCA2832B6469CE34735580A2C120E/102844.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/30307A6E766D74B6EB09EDA12A4A2DE50E4D76F4/102869.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/070325E519C178D502A8160523766070D30C0C19/102838.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/9AE125E930C92FEA0DD99E7EBAEDE4CF5EC556B6/433474.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/02EED459AD65FAF7DF32A260E479C625070841B9/1228472.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/1999B9DB355005D2DD19F66DFFBAA6D466057508/522727.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                            </ul>
                          </Paragraph>
                          <Title level={4}>工程师</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Trait
                                  id={429}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  聚能炸药
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/vulnerability.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                              <li>
                                <Gw2Trait
                                  id={536}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  流血追击
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/bleeding.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                              <li>
                                <Gw2Trait
                                  id={526}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  弹药改装
                                </span>
                              </li>
                            </ul>
                          </Paragraph>
                          <Title level={4}>潜行者</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Trait
                                  id={1257}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  破绽揭露
                                </span>
                              </li>
                              <li>
                                <Gw2Trait
                                  id={1887}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  弱化打击
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/weakness.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                            </ul>
                          </Paragraph>
                          <Title level={4}>幻术师</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Trait
                                  id={692}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  优越自尊
                                </span>
                                <img
                                  src="https://render.guildwars2.com/file/30307A6E766D74B6EB09EDA12A4A2DE50E4D76F4/102869.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/070325E519C178D502A8160523766070D30C0C19/102838.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/9AE125E930C92FEA0DD99E7EBAEDE4CF5EC556B6/433474.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/02EED459AD65FAF7DF32A260E479C625070841B9/1228472.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/1999B9DB355005D2DD19F66DFFBAA6D466057508/522727.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                              <li>
                                <Gw2Trait
                                  id={1941}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  脆弱躯体
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/vulnerability.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                              <li>
                                <Gw2Trait
                                  id={1995}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  时不我待
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/chilled.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/cripple.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                                <img
                                  src="https://render.guildwars2.com/file/397A613651BFCA2832B6469CE34735580A2C120E/102844.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                              <li>
                                <Gw2Trait
                                  id={2009}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  危机时刻
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/slow.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                            </ul>
                          </Paragraph>
                          <Title level={4}>唤灵师</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Trait
                                  id={810}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  弱点追击
                                </span>
                              </li>
                              <li>
                                <Gw2Trait
                                  id={2020}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  冰冻新星
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/chilled.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                              <li>
                                <Gw2Trait
                                  id={2018}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  冷眼旁观
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/chilled.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                            </ul>
                          </Paragraph>
                          <Title level={4}>元素使</Title>
                          <Paragraph>
                            <ul>
                              <li>
                                <Gw2Trait
                                  id={2177}
                                  size={24}
                                  active={true}
                                  className={styles.skill}
                                ></Gw2Trait>
                                <span style={{ marginLeft: 12, verticalAlign: 'text-bottom' }}>
                                  超级元素
                                </span>
                                <img
                                  src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/weakness.png"
                                  width="20"
                                  style={{ marginRight: 12, verticalAlign: 'sub', float: 'right' }}
                                />
                              </li>
                            </ul>
                          </Paragraph>
                        </Card>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Card bordered={false} style={{ marginBottom: 24 }}>
                          <Title level={3}>10种症状</Title>
                          <p>
                            当工程师使用
                            <Gw2Trait
                              id={526}
                              size={24}
                              active={true}
                              className={styles.skill}
                            ></Gw2Trait>
                            ，潜行者使用
                            <Gw2Trait
                              id={1257}
                              size={24}
                              active={true}
                              className={styles.skill}
                            ></Gw2Trait>
                            ，唤灵使用
                            <Gw2Trait
                              id={810}
                              size={24}
                              active={true}
                              className={styles.skill}
                            ></Gw2Trait>
                            时，应仅使用10种症状。使用以上特性的配置包括
                            <img src={specialtyIcon['全息师']} height="16" />
                            直伤全息师，
                            <img src={specialtyIcon['夺魂者']} height="16" />
                            症状夺魂者，
                            <img src={specialtyIcon['灾厄师']} height="16" />
                            症状灾厄师，
                            <img src={specialtyIcon['独行侠']} height="16" />
                            直伤独行侠，
                            <img src={specialtyIcon['神枪手']} height="16" />
                            直伤神枪手。
                          </p>
                          <Paragraph>
                            <ul>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/bleeding.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  流血（提升伤害，效果可堆叠，最高25层。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/burning.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  燃烧（每秒造成伤害。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/confusion.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  困惑（技能激活时受到伤害。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/poison.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  中毒（每秒造成伤害，治疗效果降低33%。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/torment.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  折磨（每秒造成伤害。对没有移动的敌人造成额外伤害。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/chilled.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  冰冻（移动速度减少66%，技能冷却时间增加66%。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/cripple.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  残废（移动速度降低50%。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/slow.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  迟缓（施展技能和攻击的速度降低。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/vulnerability.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  易伤（受到的伤害与症状伤害提高，效果可堆叠，最高25层。）
                                </Paragraph>
                              </li>
                              <li>
                                <Paragraph>
                                  <img
                                    src="https://ezgame.cc/snowcrows/assets/icons/nonarmory/weakness.png"
                                    width="20"
                                    style={{ marginRight: 12, verticalAlign: 'top' }}
                                  />
                                  虚弱（耐力回复速度降低50%。50%的几率攻击偏斜。）
                                </Paragraph>
                              </li>
                            </ul>
                          </Paragraph>
                          <Card>
                            对于其他职业，可以任意给魔像施加症状。当幻术师使用特性{' '}
                            <Gw2Trait
                              id={692}
                              size={24}
                              active={true}
                              className={styles.skill}
                            ></Gw2Trait>
                            时，不应为魔像添加
                            <img
                              src="https://render.guildwars2.com/file/30307A6E766D74B6EB09EDA12A4A2DE50E4D76F4/102869.png"
                              width="20"
                              style={{ verticalAlign: 'sub' }}
                            />{' '}
                            和
                            <img
                              src="https://render.guildwars2.com/file/02EED459AD65FAF7DF32A260E479C625070841B9/1228472.png"
                              width="20"
                              style={{ verticalAlign: 'sub' }}
                            />{' '}
                            ，使用该特性的配置包括{' '}
                            <img src={specialtyIcon['时空术士']} height="16" />
                            增益时空术士 , <img src={specialtyIcon['时空术士']} height="16" />
                            直伤时空术士 , <img src={specialtyIcon['幻象术士']} height="16" />
                            症状幻象术士 。
                          </Card>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={0} xl={3}>
                    <Anchor offsetTop={72}>
                      <Link href="#golem" title="魔像设置">
                        <Link href="#boons" title="增益" />
                        <Link href="#conditions" title="症状" />
                      </Link>
                    </Anchor>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
            <Tooltip />
          </LanguageProvider>
        </Provider>
      </div>
    );
  }
}

export default Rank;
