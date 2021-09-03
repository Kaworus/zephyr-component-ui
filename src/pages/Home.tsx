import React from 'react';
import { Carousel, Timeline, Card, Calendar } from 'antd';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers, Tooltip, LanguageProvider, Gw2Item } from 'armory-component-ui';
import 'armory-component-ui/styles.css';

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk),
);

class Items extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LanguageProvider lang="zh">
          <div style={{ width: 1292, display: 'inline-block', marginRight: 24 }}>
            <Carousel effect="fade" autoplay>
              <div>
                <div style={{ position: 'absolute', height: 444, padding: '128px 48px' }}>
                  <div style={{ color: 'rgba(0,0,0,.85)', fontSize: 42 }}>重返世界动态第四季</div>
                  <div style={{ fontSize: 24, color: 'rgba(0,0,0,.65)' }}>
                    Return to Living World Season 4
                  </div>
                  <br />
                  <a>查看重返第四季攻略</a>
                </div>
                <img src="https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2017/11/3d7c22017-11_LWS4_Ep1_HomeBanner_Art.jpg" />
              </div>
              <div>
                <div style={{ position: 'absolute', height: 444, padding: '128px 48px' }}>
                  <div style={{ color: 'rgba(0,0,0,.85)', fontSize: 42 }}>四风节来啦!</div>
                  <div style={{ fontSize: 24, color: 'rgba(0,0,0,.65)' }}>
                    Festival of the Four Winds
                  </div>
                  <br />
                  <a>查看四风节攻略</a>
                </div>
                <img src="https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2019/08/fc439homepage_190730-GW2-Carousel-Festival-Four-Winds.jpg" />
              </div>
              <div style={{ background: 'white' }}>
                <div style={{ position: 'absolute', height: 444, padding: '128px 48px' }}>
                  <div
                    style={{
                      color: 'rgba(255,255,255,.85)',
                      fontSize: 42,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Gw2Item id={91048} />
                    <span style={{ marginLeft: 24 }}>[剑来]愿景成就召集令</span>
                  </div>
                  <div style={{ fontSize: 18, color: 'rgba(255,255,255,.65)' }}>
                    小学生.1121将于9月16日开始每天20:30为期3天的愿景成就召集, 欢迎参加！
                  </div>
                  <br />
                  <div>YY:12131</div>
                  <div>9月16日：伊斯坦/沙掠</div>
                  <div>9月17日：雷云/亚哈</div>
                  <div>9月18日：伊斯坦/沙掠</div>
                </div>
                <img
                  src="http://gw2.kongzhong.com/act/gw2pic/wallpaper/zd_11_1920x1200.jpg"
                  width={1292}
                  height={444}
                  style={{ objectFit: 'cover', objectPosition: '0px -108px' }}
                />
              </div>
            </Carousel>
          </div>
          <div style={{ display: 'inline-block' }}>123123</div>
          <Calendar />
          <Card>
            <Timeline>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
          </Card>
          <Tooltip />
        </LanguageProvider>
      </Provider>
    );
  }
}

export default Items;
