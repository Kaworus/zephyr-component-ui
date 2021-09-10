import { Breadcrumb, Menu } from 'antd';
import React from 'react';

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
            <Breadcrumb.Item>四风节</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    );
  }
}

export default FourWinds;
