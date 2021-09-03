import React from 'react';
import {
  PageHeader,
  Descriptions,
  Input,
  Breadcrumb,
  Menu,
  Tag,
  Card,
  Tooltip,
  Row,
  Col,
} from 'antd';

const { Search } = Input;

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
      <a rel="noopener noreferrer" href="http://www.alipay.com/">
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

class Introduction extends React.Component {
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
          <Search
            placeholder="输入检索攻略"
            allowClear
            enterButton="搜索"
            style={{ width: 240, marginLeft: 'auto' }}
          />
        </div>
        <Tooltip title="点击查看相关攻略">
          <Card bordered={false} hoverable bodyStyle={{ padding: 0, marginBottom: 24 }}>
            <PageHeader
              ghost={false}
              title="四风节"
              tags={<Tag color="red">进行中</Tag>}
              subTitle="准备好前往迷城峭壁享受节日，或是去皇冠高阁挑战自我了吗？"
            >
              <Row>
                <Col span={18}>
                  <Descriptions size="small" column={3}>
                    <Descriptions.Item label="编辑">鬼鬼.7777</Descriptions.Item>
                    <Descriptions.Item label="发布时间">2021-09-03</Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col span={6}>
                  <img
                    height={80}
                    style={{ position: 'absolute', top: -48, right: 0 }}
                    src="https://wiki.guildwars2.com/images/thumb/b/bb/Divinity%27s_Reach_%28Lunar_New_Year%29_loading_screen.jpg/300px-Divinity%27s_Reach_%28Lunar_New_Year%29_loading_screen.jpg"
                  ></img>
                </Col>
              </Row>
            </PageHeader>
          </Card>
        </Tooltip>
      </div>
    );
  }
}

export default Introduction;
