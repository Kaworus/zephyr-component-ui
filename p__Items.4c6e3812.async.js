(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[958],{9557:function(I){I.exports={copyRight:"copyRight___2sYTB"}},64111:function(I,j,e){"use strict";e.r(j),e.d(j,{default:function(){return _}});var ne=e(57338),R=e(25084),re=e(98858),h=e(4914),m=e(11849),ie=e(34792),B=e(48086),A=e(3182),se=e(71153),v=e(60331),T=e(69610),E=e(54941),N=e(81306),O=e(19809),L=e(94043),C=e.n(L),M=e(67294),P=e(62022),U=e(82405),F=e(14494),p=e(14890),W=e(53894),g=e(96402),z=e(99165),D=e(9557),G=e.n(D),f=e(21010);function Y(){return new Promise(function(l,u){var c=(0,f.WY)("https://api.guildwars2.com/v2/items");l(c)})}function S(l){return new Promise(function(u,c){var r=(0,f.WY)("https://api.guildwars2.com/v2/items?ids=".concat(l.join(",")));u(r)})}function H(l){return new Promise(function(u,c){var r=(0,f.WY)("https://api.guildwars2.com/v2/recipes/search?output=".concat(l));u(r)})}function ae(l){return new Promise(function(u,c){var r=request("https://api.guildwars2.com/v2/recipes/search?input=".concat(l));u(r)})}function b(l){return new Promise(function(u,c){var r=(0,f.WY)("https://api.guildwars2.com/v2/recipes?ids=".concat(l.join(",")));u(r)})}var K={Basic:"\u666E\u901A",Masterwork:"\u7CBE\u5236",Exotic:"\u7A00\u6709",Rare:"\u7279\u5F02",Ascended:"\u5347\u534E",Legendary:"\u4F20\u5947"},$={Basic:"rgba(156,156,156)",Masterwork:"#1a9306",Exotic:"#ffa405",Rare:"#fcd00b",Ascended:"#fb3e8d",Legendary:"#4C139D"},k={AccountBindOnUse:"\u4F7F\u7528\u540E\u8D26\u6237\u7ED1\u5B9A",AccountBound:"\u8D26\u53F7\u7ED1\u5B9A",ApartmentOutlined:"ApartmentOutlined",BulkConsume:"\u6563\u88C5\u6D88\u8017\u54C1",DeleteWarning:"\u6467\u6BC1\u8B66\u544A",HideSuffix:"\u9690\u85CF\u540E\u7F00",Infused:"\u704C\u6CE8",MonsterOnly:"MonsterOnly",NoMysticForge:"\u4E0D\u53EF\u7528\u4E8E\u795E\u79D8\u7194\u7089",NoSalvage:"\u65E0\u6CD5\u62C6\u89E3",NoSell:"\u65E0\u6CD5\u51FA\u552E",NotUpgradeable:"\u4E0D\u53EF\u5347\u7EA7",NoUnderwater:"\u6C34\u4E0B\u65E0\u6CD5\u4F7F\u7528",SoulbindOnAcquire:"\u88C5\u5907\u540E\u7075\u9B42\u7ED1\u5B9A",SoulBindOnUse:"\u4F7F\u7528\u540E\u7075\u9B42\u7ED1\u5B9A",Tonic:"\u5C0F\u53D1\u660E",Unique:"\u552F\u4E00"},J={AccountBindOnUse:"magenta",AccountBound:"red",ApartmentOutlined:"volcano",BulkConsume:"orange",DeleteWarning:"gold",HideSuffix:"lime",Infused:"green",MonsterOnly:"cyan",NoMysticForge:"blue",NoSalvage:"geekblue",NoSell:"purple",NotUpgradeable:"orange",NoUnderwater:"gold",SoulbindOnAcquire:"lime",SoulBindOnUse:"green",Tonic:"cyan",Unique:"blue"},Z={Container:"\u6D88\u8017\u54C1",Consumable:"\u6D88\u8017\u54C1",Gizmo:"\u5C0F\u53D1\u660E",Bag:"\u5305\u5305",Weapon:"\u6B66\u5668",Armor:"\u62A4\u7532",MiniPet:"\u8FF7\u4F60\u5BA0\u7269",Trinket:"\u9996\u9970",Trophy:"\u6218\u5229\u54C1",UpgradeComponent:"\u5347\u7EA7\u7EC4\u4EF6",Back:"\u80CC\u90E8",Gathering:"\u91C7\u96C6\u5DE5\u5177",Trait:"\u7279\u6B8A\u7269\u54C1",Tool:"\u5DE5\u5177",CraftingMaterial:"\u5236\u4F5C\u6750\u6599"},Q={Asura:"\u963F\u82CF\u62C9",Charr:"\u590F\u5C14",Female:"\u5973\u6027",Human:"\u4EBA\u7C7B",Norn:"\u8BFA\u6069",Sylvari:"\u5E0C\u5C14\u74E6\u91CC",Elementalist:"\u5143\u7D20\u4F7F",Engineer:"Engineer",Guardian:"\u5B88\u62A4\u8005 ",Mesmer:"\u5E7B\u672F\u5E08",Necromancer:"\u5524\u7075\u5E08",Ranger:"\u6E38\u4FA0",Thief:"\u6F5C\u884C\u8005",Warrior:"\u6218\u58EB",Revenant:"\u9B42\u6B66\u8005"},V={Asura:"magenta",Charr:"red",Female:"volcano",Human:"orange",Norn:"gold",Sylvari:"lime",Elementalist:"green",Engineer:"cyan",Guardian:"blue ",Mesmer:"geekblue",Necromancer:"purple",Ranger:"orange",Thief:"gold",Warrior:"lime",Revenant:"green"},X=e(96486),t=e(85893),w=(0,p.MT)((0,p.UY)(g.reducers),(0,p.md)(W.Z)),q=function(l){(0,N.Z)(c,l);var u=(0,O.Z)(c);function c(){var r;(0,T.Z)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return r=u.call.apply(u,[this].concat(n)),r.state={loading:!0,visible:!1,currentItems:{id:null,icon:"",name:"",description:"",vendor_value:0,flags:[],restrictions:[],type:"",details:{type:""}},pagination:{hideOnSinglePage:!1,defaultPageSize:10,showTotal:function(i){return"\u5171 ".concat(i," \u6761")}},dataSource:[],itemList:[],columns:[{title:"\u552F\u4E00\u6807\u8BC6",dataIndex:"id",key:"id"},{title:"icon",dataIndex:"icon",key:"icon",hideInSearch:!0,render:function(i,d){return(0,t.jsx)(g.Gw2Item,{id:d.id,size:32})}},{title:"\u7269\u54C1\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u7269\u54C1\u7C7B\u578B",dataIndex:"type",key:"type",render:function(i){return(0,t.jsx)(v.Z,{color:"#d6230c",children:Z[i]})}},{title:"\u804A\u5929\u4EE3\u7801",hideInSearch:!0,dataIndex:"chat_link",key:"chat_link",render:function(i){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:G().copyRight,children:i}),(0,t.jsx)(z.Z,{style:{color:"#d6230c",cursor:"pointer"},onClick:function(){return r.copyRight(i)}})]})}},{title:"\u7A00\u6709\u5EA6",hideInSearch:!0,dataIndex:"rarity",key:"rarity",render:function(i){return(0,t.jsx)(v.Z,{color:$[i],children:K[i]})}},{title:"\u64CD\u4F5C",dataIndex:"operation",hideInSearch:!0,key:"operation",render:function(i,d){return(0,t.jsx)("a",{onClick:function(){r.setState({visible:!0,currentItems:d}),r.getRecipes(d.id)},children:"\u8BE6\u60C5"})}}],outputIdList:[],currentRecipes:{ingredients:[]}},r}return(0,E.Z)(c,[{key:"copyRight",value:function(){var r=(0,A.Z)(C().mark(function n(s){return C().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,navigator.clipboard.writeText(s);case 2:B.default.success("\u590D\u5236\u6210\u529F");case 3:case"end":return i.stop()}},n)}));function a(n){return r.apply(this,arguments)}return a}()},{key:"getRecipes",value:function(a){var n=this;this.setState({currentRecipes:{ingredients:[]}}),H(a).then(function(s){s.length>0&&(n.setState({outputIdList:s}),b(s).then(function(o){n.setState({currentRecipes:o[0]});var i=[];o[0].ingredients.forEach(function(d){i.push(d.item_id)}),S(i).then(function(d){var y=[];o[0].ingredients.forEach(function(x){var ee=d.find(function(te){return x.item_id===te.id});y.push({item_id:x.item_id,count:x.count,item:ee})}),n.setState({currentRecipes:(0,m.Z)((0,m.Z)({},n.state.currentRecipes),{},{ingredients:y})})})}))})}},{key:"componentDidMount",value:function(){this.getItemList()}},{key:"getItemList",value:function(){var a=this;Y().then(function(n){a.setState({itemList:n.reverse(),loading:!1,pagination:(0,m.Z)((0,m.Z)({},a.state.pagination),{},{total:n.length})})})}},{key:"render",value:function(){var a=this;return(0,t.jsx)(F.Provider,{store:w,children:(0,t.jsx)(g.LanguageProvider,{lang:"zh",children:this.state.loading?(0,t.jsx)(P.ZP,{}):(0,t.jsxs)("div",{children:[(0,t.jsx)(g.Tooltip,{}),(0,t.jsx)(U.ZP,{headerTitle:"\u7269\u54C1\u5217\u8868",request:function(s){return S((0,X.cloneDeep)(a.state.itemList).splice((s.current-1)*s.pageSize,s.pageSize)).then(function(o){return{data:o,success:!0,total:a.state.itemList.length}})},columns:this.state.columns,rowKey:"id",pagination:this.state.pagination}),(0,t.jsxs)(R.Z,{width:"480",title:(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:this.state.currentItems.icon,height:"32px",style:{marginRight:"8px"}}),(0,t.jsx)("span",{children:this.state.currentItems.name})]}),placement:"right",closable:!1,onClose:function(){return a.setState({visible:!1})},visible:this.state.visible,children:[(0,t.jsxs)(h.Z,{column:1,bordered:!0,size:"small",labelStyle:{width:"120px"},children:[(0,t.jsx)(h.Z.Item,{label:"\u7269\u54C1\u5206\u7C7B",children:Z[this.state.currentItems.type]}),(0,t.jsx)(h.Z.Item,{label:"\u4E8C\u7EA7\u5206\u7C7B",children:this.state.currentItems.details.type}),(0,t.jsx)(h.Z.Item,{label:"\u6807\u7B7E",children:this.state.currentItems.flags.map(function(n){return(0,t.jsx)(v.Z,{style:{marginBottom:"4px"},color:J[n],children:k[n]},n)})}),this.state.currentItems.restrictions.length>0?(0,t.jsx)(h.Z.Item,{label:"\u9650\u5236",children:this.state.currentItems.restrictions.map(function(n){return(0,t.jsx)(v.Z,{style:{marginBottom:"4px"},color:V[n],children:Q[n]},n)})}):null,(0,t.jsx)(h.Z.Item,{label:"\u63CF\u8FF0",children:this.state.currentItems.description}),this.state.currentItems.vendor_value?(0,t.jsx)(h.Z.Item,{label:"\u51FA\u552E\u4EF7\u683C",children:(0,t.jsx)(g.Gold,{coins:this.state.currentItems.vendor_value})}):null,(0,t.jsx)(h.Z.Item,{label:"\u83B7\u53D6\u65B9\u5F0F",children:"-"})]}),(0,t.jsx)(g.Tooltip,{})]})]})})})}}]),c}(M.Component),_=q}}]);
