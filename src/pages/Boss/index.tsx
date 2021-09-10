import React from 'react';
import bossList from './data';
import { Card, Row, Col, message, Switch, Radio } from 'antd';
import { HistoryOutlined } from '@ant-design/icons';
import { reducers } from 'armory-component-ui';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { EnvironmentOutlined, CopyOutlined, ClockCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { cloneDeep } from 'lodash';

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk),
);

const compare = (obj1, obj2) => {
  const now = moment().hour() * 3600 + moment().minutes() * 60 + moment().second();
  const val1 = obj1.nextTime > now ? obj1.nextTime - now : obj1.nextTime + (86400 - now);
  const val2 = obj2.nextTime > now ? obj2.nextTime - now : obj2.nextTime + (86400 - now);
  if (now - obj1.lastTime < 15 * 60) {
    return -1;
  }
  if (val1 < val2) {
    return -1;
  }
  if (val1 > val2) {
    return 1;
  }
  return 0;
};
const { Meta } = Card;
class Boss extends React.Component {
  state = {
    data: bossList,
    now: moment().hour() * 3600 + moment().minutes() * 60 + moment().second(),
    alarmList: {},
    selectedTags: 'all',
  };
  componentDidMount() {
    this.calcData();
    const alarmList = [];
    bossList.forEach((item) => {
      alarmList[item.name] = false;
    });
    this.setState(alarmList);
    setInterval(() => {
      this.calcData();
      this.setState({ now: moment().hour() * 3600 + moment().minutes() * 60 + moment().second() });
    }, 1000);
  }
  calcData() {
    const now = moment().hour() * 3600 + moment().minutes() * 60 + moment().second();
    const data: any[] = [];
    bossList.forEach((item) => {
      let nextTime: number = 0;
      let lastTime: number = 0;
      item.time.forEach((t, i) => {
        const nextNum = item.time[i + 1 === item.time.length ? 0 : i + 1];
        if (now >= t && now <= nextNum) {
          nextTime = nextNum;
          lastTime = item.time[i];
        }
        if (nextTime === 0 && lastTime === 0 && i === item.time.length - 1) {
          nextTime = nextNum;
          lastTime = item.time[i];
        }
      });
      data.push({ ...item, nextTime, lastTime });
      if (nextTime - now === 5 * 60 && this.state.alarmList[item.name]) {
        Notification.requestPermission(() => {
          let n: Notification;
          setTimeout(() => {
            n = new Notification(item.c_name, {
              body: `${item.c_name}将在5min后刷新，请注意前往。`,
              icon: item.link_url,
            });
            setTimeout(() => {
              n.close();
            });
          }, 5000);
        });
      }
    });
    data.sort(compare);
    const pending: any[] = [];
    const not: any[] = [];
    data.forEach((item) => {
      if (now - item.lastTime < 15 * 60) {
        pending.push(item);
      } else {
        not.push(item);
      }
    });
    this.setState({ data: [...pending, ...not] });
  }
  timeNum(data) {
    let num = data;
    if (num < 0) {
      num = 86400 + data;
    }
    const hour = Math.floor(num / 3600);
    const min = Math.floor((num - hour * 3600) / 60);
    const sec = num - hour * 3600 - min * 60;
    return `${hour >= 10 ? hour : `0${hour}`}:${min >= 10 ? min : `0${min}`}:${
      sec >= 10 ? sec : `0${sec}`
    }`;
  }
  alarmChange(checked: boolean, name) {
    const data = cloneDeep(this.state.alarmList);
    data[name] = checked;
    this.setState({ alarmList: data });
  }
  async copyRight(item) {
    let text = '';
    const now = moment().hour() * 3600 + moment().minutes() * 60 + moment().second();
    if (now - item.lastTime < 15 * 60) {
      text = `${item.c_name}(已刷新)  +${this.timeNum(now - item.lastTime)}   ${
        item.waypoint.name
      }传送点${item.waypoint.code}[和风议会]`;
    } else {
      text = `${item.c_name}(未刷新)  ${this.timeNum(
        item.nextTime > now ? item.nextTime - now : item.nextTime + (86400 - now),
      )}   ${item.waypoint.name}传送点${item.waypoint.code}[和风议会]`;
    }
    await navigator.clipboard.writeText(text);
    message.success('复制成功');
  }
  radioChange(e) {
    this.setState({ selectedTags: e.target.value });
  }
  render() {
    return (
      <Provider store={store}>
        <div style={{ textAlign: 'end', marginBottom: 24 }}>
          <Radio.Group
            value={this.state.selectedTags}
            buttonStyle="solid"
            onChange={(e) => this.radioChange(e)}
          >
            <Radio.Button value="all">全部</Radio.Button>
            <Radio.Button value="a">泰瑞亚中心</Radio.Button>
            <Radio.Button value="b">决战买古码</Radio.Button>
            <Radio.Button value="c">烈焰征途</Radio.Button>
            <Radio.Button value="d">冰潮传说</Radio.Button>
            <Radio.Button value="e">巨龙绝境</Radio.Button>
          </Radio.Group>
        </div>
        <Row gutter={24}>
          {this.state.data
            .filter((i) => {
              if (this.state.selectedTags === 'all') {
                return true;
              }
              if (i.type === this.state.selectedTags) {
                return true;
              }
              return false;
            })
            .map((item) => (
              <Col xxl={4} xl={6} lg={8} xs={24} md={12} key={item.id}>
                <Card
                  hoverable
                  style={{ width: '100%', marginBottom: 24 }}
                  bodyStyle={{ padding: 18 }}
                  cover={
                    <template>
                      <div
                        style={{
                          background: `url(${item.link_url})`,
                          height: 248,
                          backgroundSize: 'cover',
                          opacity: 0.65,
                          filter: 'blur(0px)',
                        }}
                      ></div>
                      <div
                        style={{
                          fontSize: 48,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          lineHeight: '248px',
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                        }}
                      >
                        {this.state.now - item.lastTime < 15 * 60
                          ? `+${this.timeNum(this.state.now - item.lastTime)}`
                          : this.timeNum(item.nextTime - this.state.now)}
                      </div>
                      {this.state.now - item.lastTime < 15 * 60 ||
                      (item.nextTime > this.state.now
                        ? item.nextTime - this.state.now
                        : item.nextTime + (86400 - this.state.now)) <
                        15 * 60 ? (
                        <div style={{ position: 'absolute', top: -1, right: -1 }}>
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderTop:
                                this.state.now - item.lastTime < 15 * 60
                                  ? '50px solid #d6230c'
                                  : '50px solid #ffa940',
                              borderLeft: '50px solid transparent',
                            }}
                          ></div>
                          <div
                            style={{
                              fontSize: 8,
                              transform: 'rotate(45deg)',
                              position: 'absolute',
                              top: 14,
                              zoom: '0.8',
                              right: 0,
                            }}
                          >
                            {this.state.now - item.lastTime < 15 * 60 ? '正在进行' : '即将开始'}
                          </div>
                        </div>
                      ) : null}
                    </template>
                  }
                  actions={[]}
                >
                  <Meta
                    title={
                      <div>
                        {item.c_name}
                        <CopyOutlined
                          style={{
                            color: '#d6230c',
                            cursor: 'pointer',
                            marginLeft: 8,
                            float: 'right',
                            marginTop: '5px',
                          }}
                          onClick={() => this.copyRight(item)}
                        />
                      </div>
                    }
                    description={
                      <div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
                        >
                          <EnvironmentOutlined style={{ marginRight: 8 }} />
                          <span>{item.waypoint.name}</span>
                          <span style={{ marginLeft: 'auto' }}>{item.waypoint.code}</span>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
                        >
                          <ClockCircleOutlined style={{ marginRight: 8 }} />
                          上次{this.timeNum(item.lastTime)}
                          <span style={{ marginLeft: 'auto' }}>
                            下次{this.timeNum(item.nextTime)}
                          </span>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
                        >
                          <HistoryOutlined style={{ marginRight: 8 }} />
                          BOSS闹钟：
                          <Switch
                            style={{ marginLeft: 'auto' }}
                            size="small"
                            checked={this.state.alarmList[item.name]}
                            onChange={(checked) => this.alarmChange(checked, item.name)}
                          />
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </Provider>
    );
  }
}

export default Boss;
