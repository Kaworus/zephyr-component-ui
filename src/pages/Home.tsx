import React from 'react';
import { Row, Col, Statistic } from 'antd';
import 'armory-component-ui/styles.css';
import home_bg from '@/assets/images/home_bg.png';
import footer_bg from '@/assets/images/footer_bg.png';
import logo_black from '@/assets/images/logo_black.png';
import footer_slogan from '@/assets/images/footer_slogan.png';
import { TeamOutlined, QqOutlined, WeiboOutlined } from '@ant-design/icons';

const Point: React.FC = () => {
  return (
    <div
      style={{
        width: 5,
        height: 5,
        background: '#121116',
        borderRadius: '50%',
        border: '1px solid rgb(153, 153, 153)',
        display: 'inline-block',
      }}
    ></div>
  );
};

const Line: React.FC = () => {
  return (
    <div
      style={{
        marginLeft: '0.2vw',
        height: '0.2vw',
        width: 'calc(100% - 2vw - 24px)',
        background: 'linear-gradient(to right,rgba(62, 58, 88, 0.5),rgba(62, 58, 88, 0))',
        display: 'inline-block',
      }}
    ></div>
  );
};

const Bilibili: React.FC = () => {
  return (
    <img
      width="12"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII="
    ></img>
  );
};
const currentYear = new Date().getFullYear();
class Home extends React.Component {
  render() {
    return (
      <div>
        <div style={{ margin: '-24px' }}>
          <img src={home_bg} width="100%"></img>
        </div>
        <div
          style={{
            color: 'rgba(25, 45, 104, 1)',
            fontSize: '3vw',
            position: 'absolute',
            top: '6vw',
            left: '8vw',
            width: '50%',
          }}
        >
          <div style={{ marginBottom: '2vw' }}>欢迎你，指挥官。</div>
          <Row gutter={24}>
            <Col sm={6} xs={12}>
              <div
                style={{
                  fontSize: '1vw',
                  color: 'rgba(25, 45, 104, 1)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>资讯</span>
                <Line />
              </div>
              <Statistic
                value={1231}
                valueStyle={{ color: 'rgba(73, 85, 120, 1)', fontSize: '3vw' }}
              />
            </Col>
            <Col sm={6} xs={12}>
              <div
                style={{
                  fontSize: '1vw',
                  color: 'rgba(25, 45, 104, 1)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>攻略</span>
                <Line />
              </div>
              <Statistic
                value={241}
                valueStyle={{ color: 'rgba(73, 85, 120, 1)', fontSize: '3vw' }}
              />
            </Col>
            <Col sm={6} xs={12}>
              <div
                style={{
                  fontSize: '1vw',
                  color: 'rgba(25, 45, 104, 1)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>活动</span>
                <Line />
              </div>
              <Statistic
                value={31}
                valueStyle={{ color: 'rgba(73, 85, 120, 1)', fontSize: '3vw' }}
              />
            </Col>
            <Col sm={6} xs={12}>
              <div
                style={{
                  fontSize: '1vw',
                  color: 'rgba(25, 45, 104, 1)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>BD</span>
                <Line />
              </div>
              <Statistic
                value={12}
                valueStyle={{ color: 'rgba(73, 85, 120, 1)', fontSize: '3vw' }}
              />
            </Col>
          </Row>
        </div>
        <div
          style={{
            background: `url(${footer_bg}) no-repeat`,
            backgroundSize: 'cover',
            margin: '-24px',
            position: 'absolute',
            bottom: '0px',
            width: '100vw',
          }}
        >
          <Row style={{ width: '100%', padding: '0px 24px' }} justify="center" gutter={48}>
            <Col sm={8} xs={0} style={{ textAlign: 'center', marginTop: 256 }}>
              <img src={logo_black} style={{ maxWidth: 233, marginBottom: 24 }}></img>
              <br />
              <img src={footer_slogan} style={{ maxWidth: 300, marginBottom: 24 }}></img>
              {/* <div style={{textAlign: 'center', maxWidth: '100%'}}>{`${currentYear} 和风议会  渝ICP备20001576号-1`}</div> */}
            </Col>
            <Col sm={16} xs={0} style={{ marginTop: 256 }}>
              <div style={{ padding: 48 }}>
                <Row>
                  <Col sm={8} xs={24} style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 20, marginBottom: 24 }}>友情链接</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Point />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="http://gw2.kongzhong.com/"
                      >
                        激战2官网
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Point />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="https://wiki.guildwars2.com/"
                      >
                        美服WIKI
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Point />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="https://gw2.wishingstarmoye.com/"
                      >
                        星岬岛
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Point />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="https://ezgame.cc/"
                      >
                        欧服中文攻略站
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Point />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="https://snowcrows.com/"
                      >
                        Snow Crows
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Point />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="https://metabattle.com/wiki/MetaBattle_Wiki"
                      >
                        METABATTLE
                      </a>
                    </div>
                  </Col>
                  <Col sm={8} xs={24} style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 20, marginBottom: 24 }}>交流社区</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Point />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="https://tieba.baidu.com/f?kw=%BC%A4%D5%BD2"
                      >
                        百度激战2吧
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Point />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="https://bbs.nga.cn/thread.php?fid=-235147&rand=613"
                      >
                        NGA
                      </a>
                    </div>
                  </Col>
                  <Col sm={8} xs={24} style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 20, marginBottom: 24 }}>加入我们</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <TeamOutlined />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        target="blank"
                        href="https://tieba.baidu.com/f?kw=%BC%A4%D5%BD2"
                      >
                        招贤纳士
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <QqOutlined />
                      <a style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}>
                        玩家交流2群-783145339
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Bilibili />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        href="https://space.bilibili.com/409648789?from=search&seid=8105226010192608410&spm_id_from=333.337.0.0"
                        target="blank"
                      >
                        Bilibili-和风议会
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <WeiboOutlined />
                      <a
                        style={{ color: 'rgb(153, 153, 153)', marginLeft: 12 }}
                        href="https://weibo.com/u/5127129348?is_all=1"
                        target="blank"
                      >
                        新浪微博-和风议会
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div>
            <div
              style={{ textAlign: 'center', maxWidth: '100%', height: 72, lineHeight: '72px' }}
            >{`${currentYear} 和风议会  渝ICP备20001576号-1`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
