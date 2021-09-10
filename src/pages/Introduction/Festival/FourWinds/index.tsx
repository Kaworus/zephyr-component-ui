import { Anchor, Breadcrumb, Card, Col, Menu, message, Row, Typography } from 'antd';
import React from 'react';

import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers, Tooltip } from 'armory-component-ui';
import { Gw2Item, LanguageProvider } from 'armory-component-ui';
import fourWinds1 from '@/assets/images/fourWinds/fourWinds-1.png';
import fourWinds2 from '@/assets/images/fourWinds/fourWinds-2.png';
import fourWinds3 from '@/assets/images/fourWinds/fourWinds-3.gif';
import fourWinds4 from '@/assets/images/fourWinds/fourWinds-4.png';
import fourWinds5 from '@/assets/images/fourWinds/fourWinds-5.png';
import fourWinds6 from '@/assets/images/fourWinds/fourWinds-6.png';
import fourWinds7 from '@/assets/images/fourWinds/fourWinds-7.png';
import fourWinds8 from '@/assets/images/fourWinds/fourWinds-8.png';
import fourWinds9 from '@/assets/images/fourWinds/fourWinds-9.png';
import fourWinds10 from '@/assets/images/fourWinds/fourWinds-10.png';
import fourWinds11 from '@/assets/images/fourWinds/fourWinds-11.png';

const { Link } = Anchor;
const { Title, Paragraph } = Typography;

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk),
);

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="http://www.alipay.com/">
        春节
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="http://www.alipay.com/">
        超级冒险盒子
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="http://www.alipay.com/">
        斗龙节
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/introduction/current">
        四风节
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="http://www.alipay.com/">
        万圣节
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="http://www.alipay.com/">
        冬幕节
      </a>
    </Menu.Item>
  </Menu>
);

class FourWinds extends React.Component {
  async copyRight(text) {
    await navigator.clipboard.writeText(text);
    message.success('复制成功');
  }
  render() {
    return (
      <Provider store={store}>
        <LanguageProvider lang="zh">
          <div>
            <div style={{ display: 'flex', marginBottom: '24px', alignItems: 'center' }}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/home">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>攻略合集</Breadcrumb.Item>
                <Breadcrumb.Item overlay={menu}>节日攻略</Breadcrumb.Item>
                <Breadcrumb.Item>四风节</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Row gutter={24}>
              <Col xs={24} xl={21}>
                <Title level={1} id="main">
                  四风节
                </Title>
                <Card>
                  <Title level={2} id="howToGo">
                    如何前往迷途峭壁
                  </Title>
                  <Paragraph>
                    <ul>
                      <li>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span style={{ marginRight: 8 }}>在四风节通过邮件中获取的</span>
                          <Gw2Item id={92165} size={32}></Gw2Item>
                          <span style={{ marginLeft: 8 }}>四风节日邀请函，双击前往迷途峭壁。</span>
                        </div>
                      </li>
                      <li>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span style={{ marginRight: 8 }}>
                            通过人类主城神佑之城的皇冠高阁传送点
                            <a onClick={() => this.copyRight('[&BCwDAAA=]')}>[&BCwDAAA=]</a>
                            ，与附近高塔上的NPC对话可传送到迷城峭壁（小地图中带气球标志）。
                          </span>
                        </div>
                        <img src={fourWinds1} style={{ margin: '12px 0' }}></img>
                      </li>
                      <li>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span style={{ marginRight: 8 }}>
                            通过乘坐狮子拱门利爪岛运输站传送点附近的运输船，可前往迷城峭壁。
                            <a onClick={() => this.copyRight('[&BA8EAAA=]')}>[&BA8EAAA=]</a>
                            附近的运输船，可前往迷城峭壁。
                          </span>
                        </div>
                        <img src={fourWinds2} style={{ margin: '12px 0' }}></img>
                      </li>
                    </ul>
                  </Paragraph>
                </Card>
                <Card style={{ marginTop: 24 }}>
                  <Title level={2} id="gift">
                    奖励
                  </Title>
                  <Title level={3} id="gift1">
                    旭日祝福系列高亮武器
                  </Title>
                  <Paragraph>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: 8 }}>
                        通过完成活动成就或通过开启任务奖励的风裔补给箱等方式获得
                      </span>
                      <Gw2Item size={32} id={66224}></Gw2Item>
                      <span style={{ marginLeft: 8 }}>
                        节日徽记，使用徽记与NPC【风裔武器附魔师】兑换旭日祝福系列高光武器。
                      </span>
                    </div>
                    <Gw2Item size={32} id={93967}></Gw2Item>
                    <Gw2Item size={32} id={93956}></Gw2Item>
                    <Gw2Item size={32} id={93954}></Gw2Item>
                    <Gw2Item size={32} id={93952}></Gw2Item>
                    <Gw2Item size={32} id={93951}></Gw2Item>
                    <Gw2Item size={32} id={93948}></Gw2Item>
                    <Gw2Item size={32} id={93944}></Gw2Item>
                    <Gw2Item size={32} id={93943}></Gw2Item>
                    <Gw2Item size={32} id={93942}></Gw2Item>
                    <Gw2Item size={32} id={93941}></Gw2Item>
                    <Gw2Item size={32} id={93935}></Gw2Item>
                    <Gw2Item size={32} id={93929}></Gw2Item>
                    <Gw2Item size={32} id={93927}></Gw2Item>
                  </Paragraph>
                  <Title level={3} id="gift2">
                    火花石武器
                  </Title>
                  <Paragraph>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: 8 }}>
                        你也可以与NPC【火花石】兑换特殊武器皮肤。
                      </span>
                    </div>
                    <Gw2Item size={32} id={95254}></Gw2Item>
                    <Gw2Item size={32} id={95252}></Gw2Item>
                    <Gw2Item size={32} id={95262}></Gw2Item>
                  </Paragraph>
                  <Title level={3} id="gift3">
                    节日特殊道具奖励
                  </Title>
                  <Paragraph>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: 8 }}>
                        当然，与NPC【节日奖励商人】兑换材料家园资源点道具，风裔头盔皮肤，小宠物，特异背部装备等等奖励也是一个非常不错的选择。图片中的诺恩，发光眼睛效果（旭日祝福幻境皮肤）也是与NPC兑换获得的。
                      </span>
                    </div>
                    <Gw2Item size={32} id={88126}></Gw2Item>
                    <Gw2Item size={32} id={95276}></Gw2Item>
                    <Gw2Item size={32} id={93931}></Gw2Item>
                    <Gw2Item size={32} id={48875}></Gw2Item>
                    <Gw2Item size={32} id={43902}></Gw2Item>
                    <div>
                      <img src={fourWinds3} style={{ margin: '12px 0' }}></img>
                    </div>
                  </Paragraph>
                </Card>
                <Card style={{ marginTop: 24 }}>
                  <Title level={2} id="achievement">
                    成就
                  </Title>
                  <Title level={3} id="achievement1">
                    成就：典礼大师
                  </Title>
                  <Paragraph>拿上你的邀请函前往迷城峭壁参加四风节的开幕式。</Paragraph>
                  <Title level={3} id="achievement2">
                    事件成就：包裹掠夺者
                  </Title>
                  <Paragraph>
                    在偶数点的30分会出现三轮寻宝事件，在寻宝的活动期间收集250个包裹即可完成成就，收集的兑换包裹用来兑换一些小玩具。
                  </Paragraph>
                  <img src={fourWinds4} style={{ margin: '12px 0' }}></img>
                  <Title level={3} id="achievement3">
                    成就：扑灭烈焰
                  </Title>
                  <Paragraph>
                    在顺利结束3轮寻宝活动之后，前往天空码头传送点，会刷新一个巨大的烈焰军团雕像，使用路边的水球把它熄灭即可完成成就。
                  </Paragraph>
                  <img src={fourWinds5} style={{ margin: '12px 0' }}></img>
                  <Title level={3} id="achievement4">
                    成就：峭壁巡回演
                  </Title>
                  <Paragraph>
                    完成迷城峭壁的狮鹫小游戏获得铜牌即可完成成就，该试炼奖励每日可获得1次。
                  </Paragraph>
                  <img src={fourWinds6} style={{ margin: '12px 0' }}></img>
                  <Title level={3} id="achievement5">
                    成就：有人落水了
                  </Title>
                  <Paragraph>
                    在天空码头传送点，你会看到一个大飞船，在飞船上有一个潜水护目镜，带上它然后做出你最漂亮的跳水动作！
                  </Paragraph>
                  <Title level={3} id="achievement6">
                    成就：石牦牛飞行员
                  </Title>
                  <Paragraph>
                    在集市码头传送点你会看到一个女性NPC在下船的地方，标记为限时试炼，和她对话将变身石牦牛，在2:30s内完成小游戏即可完成成就。
                  </Paragraph>
                  <img src={fourWinds7} style={{ margin: '12px 0' }}></img>
                  <Paragraph>
                    比赛过程，你可以利用路边的各类道具，使用道具赋予的新技能加快比赛进程与比赛乐趣。
                  </Paragraph>
                  <img src={fourWinds8} style={{ margin: '12px 0' }}></img>
                  <img src={fourWinds9} style={{ margin: '12px 0' }}></img>
                  <Title level={3} id="achievement7">
                    成就：货品交易商
                  </Title>
                  <Paragraph>
                    <span>
                      在集市码头传送点附近可以找到很多以物易物的商人，在那里可以选择用不同材料兑换
                    </span>
                    <Gw2Item size={32} id={88145}></Gw2Item>
                    <span>风裔补给箱，交换并打开20个风裔补给箱即可完成成就。</span>
                  </Paragraph>
                  <Title level={3} id="achievement8">
                    成就：货品交易商
                  </Title>
                  <Paragraph>
                    <span>
                      在全泰瑞亚世界的各个角落，都会散落【风裔的盒子】，找到并打开60个即可完成；不用地毯式搜索，它们在地图上有一个红色的小降落伞标记，非常简单
                    </span>
                  </Paragraph>
                  <Title level={3} id="achievement9">
                    成就：飞鱼障碍滑翔
                  </Title>
                  <Paragraph>
                    <span>
                      在天空码头传送点左下角，我们能看到地图上的小人标志，找到NPC，参与飞鱼比赛，我们需要在2:30S内完成这个小游戏来获得成就奖励。
                    </span>
                  </Paragraph>
                  <img src={fourWinds10}></img>
                  <Title level={3} id="achievement10">
                    成就：天相采集者
                  </Title>
                  <Paragraph>
                    <span>收集迷城峭壁的所有52块天际水晶，这些水晶分布与该地图的各个角落。</span>
                  </Paragraph>
                  <Title level={3} id="achievement11">
                    成就：天相采集大师
                  </Title>
                  <Paragraph>
                    <span>收集迷城峭壁的所有10块高等天际水晶。</span>
                  </Paragraph>
                  <Title level={3} id="achievement12">
                    成就：没人喜欢湿透的夏尔
                  </Title>
                  <Paragraph>
                    <span>
                      在集市码头传送点
                      <a onClick={() => this.copyRight('[&BBwHAAA=]')}>[&BBwHAAA=]</a>
                      拿一个水球砸伊凡·咬刃船长，*开头那句话来自这个成就*。
                    </span>
                  </Paragraph>
                  <img src={fourWinds11}></img>
                </Card>
              </Col>
              <Col xs={0} xl={3}>
                <Anchor offsetTop={72}>
                  <Link href="#main" title="四风节">
                    <Link href="#howToGo" title="如何前往迷途峭壁" />
                    <Link href="#gift" title="奖励">
                      <Link href="#gift1" title="旭日祝福系列高亮武器" />
                      <Link href="#gift2" title="火花石武器" />
                      <Link href="#gift3" title="其他奖励" />
                    </Link>
                    <Link href="#achievement" title="成就">
                      <Link href="#achievement1" title="成就：典礼大师" />
                      <Link href="#achievement2" title="成就：包裹掠夺者" />
                      <Link href="#achievement3" title="成就：扑灭烈焰" />
                      <Link href="#achievement4" title="成就：峭壁巡回演" />
                      <Link href="#achievement5" title="成就：有人落水了" />
                      <Link href="#achievement6" title="成就：石牦牛飞行员" />
                      <Link href="#achievement7" title="成就：货品交易商" />
                      <Link href="#achievement8" title="成就：货品交易商" />
                      <Link href="#achievement9" title="成就：飞鱼障碍滑翔" />
                      <Link href="#achievement10" title="成就：天相采集者" />
                      <Link href="#achievement11" title="成就：天相采集大师" />
                      <Link href="#achievement12" title="成就：没人喜欢湿透的夏尔" />
                    </Link>
                  </Link>
                </Anchor>
              </Col>
            </Row>
          </div>
          <Tooltip />
        </LanguageProvider>
      </Provider>
    );
  }
}

export default FourWinds;
