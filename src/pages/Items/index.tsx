import React from 'react';
import Skeleton from '@ant-design/pro-skeleton';
import ProTable from '@ant-design/pro-table';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers, Tooltip } from 'armory-component-ui';
import 'armory-component-ui/styles.css';
import { Gw2Item, LanguageProvider } from 'armory-component-ui';
import { Tag, message, Drawer } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import styles from './index.less';
import { getItemsList, getItemsListByPage } from '@/services/items';
import { rarityContent, type, rarityColor } from './dic'

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk),
);

class Items extends React.Component {
  state = {
    loading: true,
    visible: false,
    currentItems: {
      name: ''
    },
    pagination: {
      hideOnSinglePage: false,
      defaultPageSize: 10,
      showTotal: (total) => `共 ${total} 条`
    },
    rarityColor,
    type,
    rarityContent,
    dataSource: [],
    itemList: [],
    columns: [
      {
        title: '唯一标识',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'icon',
        dataIndex: 'icon',
        key: 'icon',
        hideInSearch: true,
        render: (text, record) => <Gw2Item id={record.id} size={32}/>,
      },
      {
        title: '物品名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '物品类型',
        dataIndex: 'type',
        key: 'type',
        render: (text) => <Tag color="#d6230c">{type[text]}</Tag>,
      },
      {
        title: '聊天代码',
        hideInSearch: true,
        dataIndex: 'chat_link',
        key: 'chat_link',
        render: (text) => <div><div className={styles.copyRight}>{text}</div><CopyOutlined style={{ color: '#d6230c', cursor: 'pointer' }} onClick={() => this.copyRight(text)}/></div>,
      },
      {
        title: '稀有度',
        hideInSearch: true,
        dataIndex: 'rarity',
        key: 'rarity',
        render: (text) => <Tag color={this.state.rarityColor[text]}>{this.state.rarityContent[text]}</Tag>,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        hideInSearch: true,
        key: 'operation',
        render: (text, record) => <a onClick={() => this.setState({visible: true, currentItems: record})}>详情</a>,
      },
    ],
  };
  async copyRight (text) {
    await navigator.clipboard.writeText(text);
    message.success('复制成功');
  }
  componentDidMount() {
    this.getItemList()
    Notification.requestPermission(() => {
      let n: Notification;
      setTimeout(() => {
        n = new Notification('德拉克', {
          body: '德拉克将在5min后刷新，立即前往。',
          icon: '/logo.png'
        })
        setTimeout(()=> {
          n.close()
        })
      }, 5000)

    })
  };
  getItemList () {
    getItemsList().then((res: number[]) => {
      this.setState({itemList: res.reverse(),loading: false, pagination:{...this.state.pagination, total: res.length}})
    })
  };
  getItemListByPage () {

  };
  render() {
    return (
      <Provider store={store}>
        <LanguageProvider lang="zh">
          {this.state.loading ? (
            <Skeleton />
          ) : (
            <div>
              <Tooltip />
              <ProTable
                headerTitle="物品列表"
                request={(params: {
                  pageSize: number;
                  current: number;
                },) =>
                  getItemsListByPage(this.state.itemList.splice((params.current - 1) * params.pageSize, params.pageSize)).then((list: any) => {
                    return {
                      data: list,
                      success: true,
                      total: this.state.itemList.length
                    }
                  })
                }
                columns={this.state.columns}
                rowKey="id"
                pagination={this.state.pagination}
              />
              <Drawer
                title={this.state.currentItems.name}
                placement="right"
                closable={false}
                onClose={() =>this.setState({visible: false})}
                visible={this.state.visible}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </div>
          )}
        </LanguageProvider>
      </Provider>
    );
  }
}

export default Items;
