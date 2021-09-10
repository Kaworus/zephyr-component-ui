import React from 'react';
import { PageHeader, Descriptions, Breadcrumb, Menu, Card, Row, Col } from 'antd';
import { Link } from 'umi';

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

const data = [
  {
    title: '四风节',
    subTitle: '没人会喜欢湿透的夏尔',
    pic: 'https://wiki.guildwars2.com/images/thumb/b/bb/Divinity%27s_Reach_%28Lunar_New_Year%29_loading_screen.jpg/300px-Divinity%27s_Reach_%28Lunar_New_Year%29_loading_screen.jpg',
    time: '2021-09-03',
    path: '/introduction/FourWinds',
    author: '鬼祈KGlost',
  },
  {
    title: '斗龙节',
    subTitle: '倾听感受思考 戏龙赌鸟赛跑',
    pic: 'https://wiki.guildwars2.com/images/2/29/Dragon_Bash_2020_promo_Alex_Coadou.jpg',
    time: '2021-09-03',
    author: '鬼祈KGlost',
  },
];
class Festival extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', marginBottom: '24px', alignItems: 'center' }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/home">首页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>攻略合集</Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>节日攻略</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row gutter={24}>
          {data.map((item) => (
            <Col md={24} xl={12} key={item.title}>
              <Link to={`${item.path}`}>
                <Card bordered={false} hoverable bodyStyle={{ padding: 0, marginBottom: 24 }}>
                  <PageHeader ghost={false} title={item.title} subTitle={item.subTitle}>
                    <Row>
                      <Col sm={18} xs={24}>
                        <Descriptions size="small" column={3}>
                          <Descriptions.Item label="编辑">{item.author}</Descriptions.Item>
                          <Descriptions.Item label="发布时间">{item.time}</Descriptions.Item>
                        </Descriptions>
                      </Col>
                      <Col sm={6} xs={0}>
                        <img
                          height={80}
                          style={{ position: 'absolute', top: -48, right: 0 }}
                          src={item.pic}
                        ></img>
                      </Col>
                    </Row>
                  </PageHeader>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Festival;
