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
      total: 0,
      showTotal: (total) => `共 ${total} 条`
    },
    rarityColor: {
      Basic: 'rgba(156,156,156)',
      Masterwork: '#1a9306',
      Exotic: '#ffa405',
      Rare: '#fcd00b',
      Ascended: '#fb3e8d'
    },
    rarityContent: {
      Basic: '普通',
      Masterwork: '精制',
      Exotic: '稀有',
      Rare: '特异',
      Ascended: '升华'
    },
    dataSource: [
      {
        name: '火焰强力软木长弓',
        description: '',
        type: 'Weapon',
        level: 44,
        rarity: 'Masterwork',
        vendor_value: 120,
        default_skin: 3942,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['SoulBindOnUse'],
        restrictions: [],
        id: 28445,
        chat_link: '[&AgEdbwAA]',
        icon: 'https://render.guildwars2.com/file/C6110F52DF5AFE0F00A56F9E143E9732176DDDE9/65015.png',
        details: {
          type: 'LongBow',
          damage_type: 'Physical',
          min_power: 385,
          max_power: 452,
          defense: 0,
          infusion_slots: [],
          attribute_adjustment: 242.352,
          infix_upgrade: {
            id: 142,
            attributes: [
              {
                attribute: 'Power',
                modifier: 85,
              },
              {
                attribute: 'Precision',
                modifier: 61,
              },
            ],
          },
          suffix_item_id: 24547,
          secondary_suffix_item_id: '',
        },
      },
      {
        name: '火山背包和滑翔翼套装',
        description: 'This package contains a glider skin and a matching backpack skin.',
        type: 'Consumable',
        level: 0,
        rarity: 'Masterwork',
        vendor_value: 0,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [
          'AccountBound',
          'NoMysticForge',
          'NoSalvage',
          'NoSell',
          'DeleteWarning',
          'AccountBindOnUse',
        ],
        restrictions: [],
        id: 95249,
        chat_link: '[&AgERdAEA]',
        icon: 'https://render.guildwars2.com/file/9324399847756C6BFD995D58595F6F9BFA453BA1/2351602.png',
        details: {
          type: 'Transmutation',
          skins: [9671],
        },
      },
      {
        name: '美味生日蛋糕大餐',
        description: '生日快乐！双击与附近玩家分享美味生日蛋糕。大餐持续5分钟，冷却时间2分钟。',
        type: 'Gizmo',
        level: 80,
        rarity: 'Exotic',
        vendor_value: 264,
        game_types: ['Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'NoMysticForge', 'NoSalvage', 'NoSell', 'AccountBindOnUse'],
        restrictions: [],
        id: 95241,
        chat_link: '[&AgEJdAEA]',
        icon: 'https://render.guildwars2.com/file/4E05BEF09B0A0EB9580C5FA4CF7E5201F71B0E56/2478822.png',
        details: {
          type: 'UnlimitedConsumable',
        },
      },
      {
        name: '指挥官全息巨龙手套盒',
        type: 'Armor',
        level: 80,
        rarity: 'Exotic',
        vendor_value: 238,
        default_skin: 10028,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'SoulBindOnUse'],
        restrictions: [],
        id: 95061,
        chat_link: '[&AgFVcwEA]',
        icon: 'https://render.guildwars2.com/file/579FD9B300F32129BC4329FA25B718D6A092684F/2461198.png',
        details: {
          type: 'Gloves',
          weight_class: 'Light',
          defense: 133,
          infusion_slots: [],
          attribute_adjustment: 128.04,
          infix_upgrade: {
            id: 1131,
            attributes: [
              {
                attribute: 'Power',
                modifier: 38,
              },
              {
                attribute: 'Precision',
                modifier: 38,
              },
              {
                attribute: 'Toughness',
                modifier: 21,
              },
              {
                attribute: 'BoonDuration',
                modifier: 21,
              },
            ],
          },
          secondary_suffix_item_id: '',
        },
      },
      {
        name: '龙鳞披风',
        type: 'Back',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 330,
        default_skin: 9991,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'NotUpgradeable', 'AccountBindOnUse'],
        restrictions: [],
        id: 94947,
        chat_link: '[&AgHjcgEA]',
        icon: 'https://render.guildwars2.com/file/FC6E6203A6B3A5F799404A7051AD5E60AA0E09FD/2433099.png',
        details: {
          infusion_slots: [
            {
              flags: ['Infusion'],
            },
          ],
          attribute_adjustment: 89.628,
          secondary_suffix_item_id: '',
          stat_choices: [
            584, 656, 658, 1119, 657, 1038, 1097, 659, 690, 583, 585, 1037, 586, 1035, 588, 1114,
            1128, 1163, 1066, 1064, 660, 1430, 1436, 591, 581, 592, 1263, 1271, 1265, 1270, 1262,
            1268, 1264, 1267, 1269, 1366, 1367, 1374, 1549, 1566,
          ],
        },
      },
      {
        name: '契约团警惕纹章',
        description:
          '<c=@flavor>这枚戒指表明其持有者加入了契约团，致力于打倒荒野中的巨型猛兽。</c>',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 495,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [
          'HideSuffix',
          'AccountBound',
          'NoMysticForge',
          'NoSalvage',
          'NoSell',
          'NotUpgradeable',
          'DeleteWarning',
          'AccountBindOnUse',
        ],
        restrictions: [],
        id: 95140,
        chat_link: '[&AgGkcwEA]',
        icon: 'https://render.guildwars2.com/file/463A02BD7E6515A968A64C9CA5C8642321B97646/2472305.png',
        details: {
          type: 'Ring',
          infusion_slots: [
            {
              flags: ['Infusion'],
              item_id: 49433,
            },
          ],
          attribute_adjustment: 268.884,
          infix_upgrade: {
            id: 1139,
            buff: {
              skill_id: 32718,
              description: '+32症状伤害\n+18威力\n+18精准',
            },
            attributes: [
              {
                attribute: 'Power',
                modifier: 106,
              },
              {
                attribute: 'Toughness',
                modifier: 106,
              },
              {
                attribute: 'BoonDuration',
                modifier: 56,
              },
              {
                attribute: 'ConditionDuration',
                modifier: 56,
              },
            ],
          },
          secondary_suffix_item_id: '',
        },
      },
      {
        name: '卓玛左眼灌注',
        description: '双击添加至未使用的灌注槽。可能导致轻微的不适。',
        type: 'UpgradeComponent',
        level: 80,
        rarity: 'Exotic',
        vendor_value: 10000,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'NoSalvage', 'NoSell', 'DeleteWarning', 'AccountBindOnUse'],
        restrictions: [],
        id: 94980,
        chat_link: '[&AgEEcwEA]',
        icon: 'https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png',
        details: {
          type: 'Default',
          flags: [
            'ShortBow',
            'HeavyArmor',
            'LightArmor',
            'Dagger',
            'MediumArmor',
            'Focus',
            'Greatsword',
            'Hammer',
            'Trinket',
            'Harpoon',
            'Mace',
            'Pistol',
            'Rifle',
            'Scepter',
            'Shield',
            'Speargun',
            'Axe',
            'Staff',
            'Sword',
            'Torch',
            'Trident',
            'Warhorn',
            'LongBow',
          ],
          infusion_upgrade_flags: ['Infusion'],
          attribute_adjustment: 0,
          infix_upgrade: {
            id: 1656,
            buff: {
              skill_id: 62269,
              description: '+5精准\n+9痛苦抗性',
            },
            attributes: [
              {
                attribute: 'Precision',
                modifier: 5,
              },
              {
                attribute: 'AgonyResistance',
                modifier: 9,
              },
            ],
          },
          suffix: '',
        },
      },
      {
        name: '迷你银色柴犬',
        description:
          '来自迷雾的毛绒朋友。<br>在神秘熔炉里，使用银色柴犬、芝麻柴犬、蓝色柴犬和20个已鉴定的染料，合成迷你星星柴犬。',
        type: 'MiniPet',
        level: 0,
        rarity: 'Rare',
        vendor_value: 0,
        game_types: ['PvpLobby', 'Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['NoSalvage', 'NoSell', 'DeleteWarning'],
        restrictions: [],
        id: 95222,
        chat_link: '[&AgH2cwEA]',
        icon: 'https://render.guildwars2.com/file/01674C5BE4CB515176A5115B6991500BCB32489E/2478833.png',
        details: {
          minipet_id: 823,
        },
      },
      {
        name: '炫彩晶体矿',
        description: '用于制作巨龙屠戮者武器。',
        type: 'CraftingMaterial',
        level: 0,
        rarity: 'Exotic',
        vendor_value: 64,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 94270,
        chat_link: '[&AgE+cAEA]',
        icon: 'https://render.guildwars2.com/file/235F935BC2EC53CF98F3FA90DFA467AFE9710D03/2351508.png',
      },
      {
        name: '熊灵采矿工具',
        description: '用于采集所有金属，无限使用次数。',
        type: 'Gathering',
        level: 0,
        rarity: 'Rare',
        vendor_value: 192,
        game_types: ['PvpLobby', 'Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [
          'HideSuffix',
          'AccountBound',
          'NoMysticForge',
          'NoSalvage',
          'NoSell',
          'DeleteWarning',
          'AccountBindOnUse',
        ],
        restrictions: [],
        id: 94373,
        chat_link: '[&AgGlcAEA]',
        icon: 'https://render.guildwars2.com/file/DB324FFD037D7307B7A27CB85FEDD50E942440BE/2375069.png',
        details: {
          type: 'Mining',
        },
      },
      {
        name: '便携式堆肥器',
        description: '双击分解背包中的一件消耗性食物。',
        type: 'Tool',
        level: 0,
        rarity: 'Ascended',
        vendor_value: 0,
        game_types: ['PvpLobby', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'NoSell', 'DeleteWarning', 'AccountBindOnUse'],
        restrictions: [],
        id: 91745,
        chat_link: '[&AgFhZgEA]',
        icon: 'https://render.guildwars2.com/file/B1511017627B0937A80D1797EF530B07982BD9EC/2191005.png',
        details: {
          type: 'Salvage',
          charges: 1,
        },
      },
      {
        name: '美味干燥树皮',
        description: '把这个带回烈阳难民营给你的飞天鳞龙吃。',
        type: 'Trophy',
        level: 0,
        rarity: 'Rare',
        vendor_value: 10,
        game_types: ['Pve'],
        flags: ['AccountBound', 'NoMysticForge', 'NoSalvage', 'NoSell', 'AccountBindOnUse'],
        restrictions: [],
        id: 90363,
        chat_link: '[&AgH7YAEA]',
        icon: 'https://render.guildwars2.com/file/29E0635BDA7FD4CE440225E00CDA3DA82ACE6C08/2140337.png',
      },
      {
        name: '绿色皮质包',
        description: '5格',
        type: 'Bag',
        level: 0,
        rarity: 'Basic',
        vendor_value: 4,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 8950,
        chat_link: '[&AgH2IgAA]',
        icon: 'https://render.guildwars2.com/file/F5F6BA05016F3E480AA9BA5BE39E060EC362D367/63176.png',
        details: {
          no_sell_or_sort: false,
          size: 5,
        },
      },
    ],
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
        render: (text) => <Tag color="#d6230c">{text}</Tag>,
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
  }
  getItemList () {
    getItemsList().then((res: number[]) => {
      this.setState({loading: false, pagination:{...this.state.pagination, total: res.length}})
      getItemsListByPage(res.splice(res.length - 10, 10)).then((list: any) => {
        this.setState({dataSource: list})
      })
    })
  }
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
                columns={this.state.columns}
                dataSource={this.state.dataSource}
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
