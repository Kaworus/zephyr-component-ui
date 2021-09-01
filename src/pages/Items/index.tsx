import React from 'react';
import Skeleton from '@ant-design/pro-skeleton';
import ProTable from '@ant-design/pro-table';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers, Tooltip } from 'armory-component-ui';
import 'armory-component-ui/styles.css';
import { Gw2Item, LanguageProvider, Gold } from 'armory-component-ui';
import { Tag, message, Drawer, Descriptions } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import styles from './index.less';
import { getItemsList, getItemsListByPage, getRecipesOutput, getRecipes } from '@/services/items';
import { rarityContent, type, rarityColor, flag, flagColor, restrictions, restrictionsColor } from './dic'
import { cloneDeep } from 'lodash';

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
      id: null,
      icon: '',
      name: '',
      description: '',
      vendor_value: 0,
      flags: [],
      restrictions: [],
      type: '',
      details: {
        type: ''
      }
    },
    pagination: {
      hideOnSinglePage: false,
      defaultPageSize: 10,
      showTotal: (total) => `共 ${total} 条`
    },
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
        render: (text) => <Tag color={rarityColor[text]}>{rarityContent[text]}</Tag>,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        hideInSearch: true,
        key: 'operation',
        render: (text, record) => <a onClick={() => {this.setState({visible: true, currentItems: record});this.getRecipes(record.id);}}>详情</a>,
      },
    ],
    outputIdList: [],
    currentRecipes: {
      ingredients:[]
    }
  };
  async copyRight (text) {
    await navigator.clipboard.writeText(text);
    message.success('复制成功');
  }
  getRecipes (id) {
    this.setState({currentRecipes: {ingredients:[]}})
    getRecipesOutput(id).then(res => {
      if(res.length > 0) {
        this.setState({outputIdList: res})
        getRecipes(res).then(recipes => {
          this.setState({currentRecipes: recipes[0]})
          const itemIds: number[] = []
          recipes[0].ingredients.forEach(item => {
            itemIds.push(item.item_id)
          })
          getItemsListByPage(itemIds).then(items => {
            const result: any[] = []
            recipes[0].ingredients.forEach(item => {
              const data = items.find(i=> {return item.item_id === i.id})
              result.push({
                item_id: item.item_id,
                count: item.count,
                item: data
              })
            })
            this.setState({currentRecipes: {...this.state.currentRecipes, ingredients: result}})
          })
        })
      }
    })
  };
  componentDidMount() {
    this.getItemList()
  };
  getItemList () {
    getItemsList().then((res: number[]) => {
      this.setState({itemList: res.reverse(),loading: false, pagination:{...this.state.pagination, total: res.length}})
    })
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
                  getItemsListByPage(cloneDeep(this.state.itemList).splice((params.current - 1) * params.pageSize, params.pageSize)).then((list: any) => {
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
                width="480"
                title={(
                  <div>
                    <img src={this.state.currentItems.icon} height="32px" style={{marginRight: '8px'}}></img>
                    <span>{this.state.currentItems.name}</span>
                  </div>
                )}
                placement="right"
                closable={false}
                onClose={() =>this.setState({visible: false})}
                visible={this.state.visible}
              >
                <Descriptions column={1} bordered size={'small'} labelStyle={{width: '120px'}}>
                  <Descriptions.Item label="物品分类">{type[this.state.currentItems.type]}</Descriptions.Item>
                  <Descriptions.Item label="二级分类">{this.state.currentItems.details.type}</Descriptions.Item>
                  <Descriptions.Item label="标签">
                    {
                      this.state.currentItems.flags.map((item: string) =>
                        <Tag key={item} style={{marginBottom: '4px'}} color={flagColor[item]}>{flag[item]}</Tag>
                      )
                    }
                  </Descriptions.Item>
                  {this.state.currentItems.restrictions.length > 0 ? (<Descriptions.Item label="限制">
                    {
                      this.state.currentItems.restrictions.map((item: string) =>
                        <Tag key={item} style={{marginBottom: '4px'}} color={restrictionsColor[item]}>{restrictions[item]}</Tag>
                      )
                    }
                  </Descriptions.Item>): (null)}
                  <Descriptions.Item label="描述">{this.state.currentItems.description}</Descriptions.Item>
                  {this.state.currentItems.vendor_value ? (<Descriptions.Item label="出售价格"><Gold coins={this.state.currentItems.vendor_value} /></Descriptions.Item>) : (null)}
                  {/* {this.state.currentRecipes.ingredients.length > 0 ?
                    (<Descriptions.Item label="制作配方">
                      {
                        this.state.currentRecipes.ingredients.map((item: any) =>
                          <div><Gw2Item id={item.item_id} size={24}/>{item.item_id}</div>
                        )
                      }
                    </Descriptions.Item>
                    ) : null
                  }
                  <Descriptions.Item label="制作配方">{this.state.currentItems.description}</Descriptions.Item> */}
                  <Descriptions.Item label="获取方式">-</Descriptions.Item>
                </Descriptions>
                <Tooltip />
              </Drawer>
            </div>
          )}
        </LanguageProvider>
      </Provider>
    );
  }
}

export default Items;
