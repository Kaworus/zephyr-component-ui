(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[704],{49101:function(He,be,u){"use strict";u.d(be,{Z:function(){return H}});var J=u(28991),R=u(67294),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},y=t,he=u(27029),pe=function(z,Ie){return R.createElement(he.Z,(0,J.Z)((0,J.Z)({},z),{},{ref:Ie,icon:y}))};pe.displayName="PlusOutlined";var H=R.forwardRef(pe)},3749:function(){},51752:function(He,be,u){"use strict";u.d(be,{Z:function(){return ra}});var J=u(22122),R=u(96156),t=u(67294),y=u(28481),he=u(90484),pe=u(81253),H=u(28991),Ve=u(94184),z=u.n(Ve),Ie=u(50344),wt=u(31131),ze=u(21770),je=u(85061),oe=u(75164),Fe=u(4084);function Ue(e){var o=(0,t.useRef)(),n=(0,t.useRef)(!1);function r(){for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];n.current||(oe.Z.cancel(o.current),o.current=(0,oe.Z)(function(){e.apply(void 0,i)}))}return(0,t.useEffect)(function(){return function(){n.current=!0,oe.Z.cancel(o.current)}},[]),r}function Mt(e){var o=(0,t.useRef)([]),n=(0,t.useState)({}),r=(0,y.Z)(n,2),a=r[1],i=(0,t.useRef)(typeof e=="function"?e():e),c=Ue(function(){var s=i.current;o.current.forEach(function(h){s=h(s)}),o.current=[],i.current=s,a({})});function l(s){o.current.push(s),c()}return[i.current,l]}var Y=u(15105);function At(e,o){var n,r=e.prefixCls,a=e.id,i=e.active,c=e.tab,l=c.key,s=c.tab,h=c.disabled,p=c.closeIcon,d=e.closable,E=e.renderWrapper,k=e.removeAriaLabel,C=e.editable,f=e.onClick,W=e.onRemove,D=e.onFocus,w=e.style,m="".concat(r,"-tab");t.useEffect(function(){return W},[]);var x=C&&d!==!1&&!h;function K(Z){h||f(Z)}function N(Z){Z.preventDefault(),Z.stopPropagation(),C.onEdit("remove",{key:l,event:Z})}var V=t.createElement("div",{key:l,ref:o,className:z()(m,(n={},(0,R.Z)(n,"".concat(m,"-with-remove"),x),(0,R.Z)(n,"".concat(m,"-active"),i),(0,R.Z)(n,"".concat(m,"-disabled"),h),n)),style:w,onClick:K},t.createElement("div",{role:"tab","aria-selected":i,id:a&&"".concat(a,"-tab-").concat(l),className:"".concat(m,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(l),"aria-disabled":h,tabIndex:h?null:0,onClick:function(b){b.stopPropagation(),K(b)},onKeyDown:function(b){[Y.Z.SPACE,Y.Z.ENTER].includes(b.which)&&(b.preventDefault(),K(b))},onFocus:D},s),x&&t.createElement("button",{type:"button","aria-label":k||"remove",tabIndex:0,className:"".concat(m,"-remove"),onClick:function(b){b.stopPropagation(),N(b)}},p||C.removeIcon||"\xD7"));return E?E(V):V}var Lt=t.forwardRef(At),Ge={width:0,height:0,left:0,top:0};function Wt(e,o,n){return(0,t.useMemo)(function(){for(var r,a=new Map,i=o.get((r=e[0])===null||r===void 0?void 0:r.key)||Ge,c=i.left+i.width,l=0;l<e.length;l+=1){var s=e[l].key,h=o.get(s);if(!h){var p;h=o.get((p=e[l-1])===null||p===void 0?void 0:p.key)||Ge}var d=a.get(s)||(0,H.Z)({},h);d.right=c-d.left-d.width,a.set(s,d)}return a},[e.map(function(r){return r.key}).join("_"),o,n])}var Ye={width:0,height:0,left:0,top:0,right:0};function Ot(e,o,n,r,a){var i=a.tabs,c=a.tabPosition,l=a.rtl,s,h,p;["top","bottom"].includes(c)?(s="width",h=l?"right":"left",p=Math.abs(o.left)):(s="height",h="top",p=-o.top);var d=o[s],E=n[s],k=r[s],C=d;return E+k>d&&(C=d-k),(0,t.useMemo)(function(){if(!i.length)return[0,0];for(var f=i.length,W=f,D=0;D<f;D+=1){var w=e.get(i[D].key)||Ye;if(w[h]+w[s]>p+C){W=D-1;break}}for(var m=0,x=f-1;x>=0;x-=1){var K=e.get(i[x].key)||Ye;if(K[h]<p){m=x+1;break}}return[m,W]},[e,p,C,c,i.map(function(f){return f.key}).join("_"),l])}var Xe=u(10985),Bt=u(70271);function Dt(e,o){var n=e.prefixCls,r=e.editable,a=e.locale,i=e.style;return!r||r.showAdd===!1?null:t.createElement("button",{ref:o,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(a==null?void 0:a.addAriaLabel)||"Add tab",onClick:function(l){r.onEdit("add",{event:l})}},r.addIcon||"+")}var Je=t.forwardRef(Dt);function Kt(e,o){var n=e.prefixCls,r=e.id,a=e.tabs,i=e.locale,c=e.mobile,l=e.moreIcon,s=l===void 0?"More":l,h=e.moreTransitionName,p=e.style,d=e.className,E=e.editable,k=e.tabBarGutter,C=e.rtl,f=e.onTabClick,W=(0,t.useState)(!1),D=(0,y.Z)(W,2),w=D[0],m=D[1],x=(0,t.useState)(null),K=(0,y.Z)(x,2),N=K[0],V=K[1],Z="".concat(r,"-more-popup"),b="".concat(n,"-dropdown"),P=N!==null?"".concat(Z,"-").concat(N):null,M=i==null?void 0:i.dropdownAriaLabel,v=t.createElement(Xe.ZP,{onClick:function(O){var j=O.key,F=O.domEvent;f(j,F),m(!1)},id:Z,tabIndex:-1,role:"listbox","aria-activedescendant":P,selectedKeys:[N],"aria-label":M!==void 0?M:"expanded dropdown"},a.map(function(I){return t.createElement(Xe.sN,{key:I.key,id:"".concat(Z,"-").concat(I.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(I.key),disabled:I.disabled},I.tab)}));function T(I){for(var O=a.filter(function(_){return!_.disabled}),j=O.findIndex(function(_){return _.key===N})||0,F=O.length,q=0;q<F;q+=1){j=(j+I+F)%F;var G=O[j];if(!G.disabled){V(G.key);return}}}function A(I){var O=I.which;if(!w){[Y.Z.DOWN,Y.Z.SPACE,Y.Z.ENTER].includes(O)&&(m(!0),I.preventDefault());return}switch(O){case Y.Z.UP:T(-1),I.preventDefault();break;case Y.Z.DOWN:T(1),I.preventDefault();break;case Y.Z.ESC:m(!1);break;case Y.Z.SPACE:case Y.Z.ENTER:N!==null&&f(N,I);break}}(0,t.useEffect)(function(){var I=document.getElementById(P);I&&I.scrollIntoView&&I.scrollIntoView(!1)},[N]),(0,t.useEffect)(function(){w||V(null)},[w]);var L=(0,R.Z)({},C?"marginRight":"marginLeft",k);a.length||(L.visibility="hidden",L.order=1);var Q=z()((0,R.Z)({},"".concat(b,"-rtl"),C)),te=c?null:t.createElement(Bt.Z,{prefixCls:b,overlay:v,trigger:["hover"],visible:w,transitionName:h,onVisibleChange:m,overlayClassName:Q,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:L,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":Z,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:A},s));return t.createElement("div",{className:z()("".concat(n,"-nav-operations"),d),style:p,ref:o},te,t.createElement(Je,{prefixCls:n,locale:i,editable:E}))}var $t=t.forwardRef(Kt),Ne=(0,t.createContext)(null),Ht=.1,Qe=.01,ye=20,qe=Math.pow(.995,ye);function Vt(e,o){var n=(0,t.useState)(),r=(0,y.Z)(n,2),a=r[0],i=r[1],c=(0,t.useState)(0),l=(0,y.Z)(c,2),s=l[0],h=l[1],p=(0,t.useState)(0),d=(0,y.Z)(p,2),E=d[0],k=d[1],C=(0,t.useState)(),f=(0,y.Z)(C,2),W=f[0],D=f[1],w=(0,t.useRef)();function m(b){var P=b.touches[0],M=P.screenX,v=P.screenY;i({x:M,y:v}),window.clearInterval(w.current)}function x(b){if(!!a){b.preventDefault();var P=b.touches[0],M=P.screenX,v=P.screenY;i({x:M,y:v});var T=M-a.x,A=v-a.y;o(T,A);var L=Date.now();h(L),k(L-s),D({x:T,y:A})}}function K(){if(!!a&&(i(null),D(null),W)){var b=W.x/E,P=W.y/E,M=Math.abs(b),v=Math.abs(P);if(Math.max(M,v)<Ht)return;var T=b,A=P;w.current=window.setInterval(function(){if(Math.abs(T)<Qe&&Math.abs(A)<Qe){window.clearInterval(w.current);return}T*=qe,A*=qe,o(T*ye,A*ye)},ye)}}var N=(0,t.useRef)();function V(b){var P=b.deltaX,M=b.deltaY,v=0,T=Math.abs(P),A=Math.abs(M);T===A?v=N.current==="x"?P:M:T>A?(v=P,N.current="x"):(v=M,N.current="y"),o(-v,-v)&&b.preventDefault()}var Z=(0,t.useRef)(null);Z.current={onTouchStart:m,onTouchMove:x,onTouchEnd:K,onWheel:V},t.useEffect(function(){function b(T){Z.current.onTouchStart(T)}function P(T){Z.current.onTouchMove(T)}function M(T){Z.current.onTouchEnd(T)}function v(T){Z.current.onWheel(T)}return document.addEventListener("touchmove",P,{passive:!1}),document.addEventListener("touchend",M,{passive:!1}),e.current.addEventListener("touchstart",b,{passive:!1}),e.current.addEventListener("wheel",v),function(){document.removeEventListener("touchmove",P),document.removeEventListener("touchend",M)}},[])}function zt(){var e=(0,t.useRef)(new Map);function o(r){return e.current.has(r)||e.current.set(r,t.createRef()),e.current.get(r)}function n(r){e.current.delete(r)}return[o,n]}function _e(e,o){var n=t.useRef(e),r=t.useState({}),a=(0,y.Z)(r,2),i=a[1];function c(l){var s=typeof l=="function"?l(n.current):l;s!==n.current&&o(s,n.current),n.current=s,i({})}return[n.current,c]}var et=function(o){var n=o.position,r=o.prefixCls,a=o.extra;if(!a)return null;var i,c={};return a&&(0,he.Z)(a)==="object"&&!t.isValidElement(a)?c=a:c.right=a,n==="right"&&(i=c.right),n==="left"&&(i=c.left),i?t.createElement("div",{className:"".concat(r,"-extra-content")},i):null};function jt(e,o){var n,r=t.useContext(Ne),a=r.prefixCls,i=r.tabs,c=e.className,l=e.style,s=e.id,h=e.animated,p=e.activeKey,d=e.rtl,E=e.extra,k=e.editable,C=e.locale,f=e.tabPosition,W=e.tabBarGutter,D=e.children,w=e.onTabClick,m=e.onTabScroll,x=(0,t.useRef)(),K=(0,t.useRef)(),N=(0,t.useRef)(),V=(0,t.useRef)(),Z=zt(),b=(0,y.Z)(Z,2),P=b[0],M=b[1],v=f==="top"||f==="bottom",T=_e(0,function(S,g){v&&m&&m({direction:S>g?"left":"right"})}),A=(0,y.Z)(T,2),L=A[0],Q=A[1],te=_e(0,function(S,g){!v&&m&&m({direction:S>g?"top":"bottom"})}),I=(0,y.Z)(te,2),O=I[0],j=I[1],F=(0,t.useState)(0),q=(0,y.Z)(F,2),G=q[0],_=q[1],ge=(0,t.useState)(0),Se=(0,y.Z)(ge,2),se=Se[0],Ee=Se[1],ke=(0,t.useState)(0),xe=(0,y.Z)(ke,2),ce=xe[0],we=xe[1],Ce=(0,t.useState)(0),re=(0,y.Z)(Ce,2),Ze=re[0],$=re[1],ae=(0,t.useState)(null),Te=(0,y.Z)(ae,2),X=Te[0],ia=Te[1],oa=(0,t.useState)(null),ot=(0,y.Z)(oa,2),ie=ot[0],sa=ot[1],ca=(0,t.useState)(0),st=(0,y.Z)(ca,2),la=st[0],ua=st[1],da=(0,t.useState)(0),ct=(0,y.Z)(da,2),va=ct[0],fa=ct[1],ma=Mt(new Map),lt=(0,y.Z)(ma,2),ba=lt[0],ha=lt[1],Re=Wt(i,ba,G),ut="".concat(a,"-nav-operations-hidden"),le=0,ue=0;v?d?(le=0,ue=Math.max(0,G-X)):(le=Math.min(0,X-G),ue=0):(le=Math.min(0,ie-se),ue=0);function Me(S){return S<le?le:S>ue?ue:S}var dt=(0,t.useRef)(),pa=(0,t.useState)(),vt=(0,y.Z)(pa,2),Ae=vt[0],ft=vt[1];function Le(){ft(Date.now())}function We(){window.clearTimeout(dt.current)}Vt(x,function(S,g){function B(U,ne){U(function(ve){var fe=Me(ve+ne);return fe})}if(v){if(X>=G)return!1;B(Q,S)}else{if(ie>=se)return!1;B(j,g)}return We(),Le(),!0}),(0,t.useEffect)(function(){return We(),Ae&&(dt.current=window.setTimeout(function(){ft(0)},100)),We},[Ae]);function mt(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p,g=Re.get(S)||{width:0,height:0,left:0,right:0,top:0};if(v){var B=L;d?g.right<L?B=g.right:g.right+g.width>L+X&&(B=g.right+g.width-X):g.left<-L?B=-g.left:g.left+g.width>-L+X&&(B=-(g.left+g.width-X)),j(0),Q(Me(B))}else{var U=O;g.top<-O?U=-g.top:g.top+g.height>-O+ie&&(U=-(g.top+g.height-ie)),Q(0),j(Me(U))}}var ya=Ot(Re,{width:X,height:ie,left:L,top:O},{width:ce,height:Ze},{width:la,height:va},(0,H.Z)((0,H.Z)({},e),{},{tabs:i})),bt=(0,y.Z)(ya,2),ga=bt[0],Sa=bt[1],Pe={};f==="top"||f==="bottom"?Pe[d?"marginRight":"marginLeft"]=W:Pe.marginTop=W;var ht=i.map(function(S,g){var B=S.key;return t.createElement(Lt,{id:s,prefixCls:a,key:B,tab:S,style:g===0?void 0:Pe,closable:S.closable,editable:k,active:B===p,renderWrapper:D,removeAriaLabel:C==null?void 0:C.removeAriaLabel,ref:P(B),onClick:function(ne){w(B,ne)},onRemove:function(){M(B)},onFocus:function(){mt(B),Le(),!!x.current&&(d||(x.current.scrollLeft=0),x.current.scrollTop=0)}})}),Oe=Ue(function(){var S,g,B,U,ne,ve,fe,Ke,$e,Ra=((S=x.current)===null||S===void 0?void 0:S.offsetWidth)||0,Pa=((g=x.current)===null||g===void 0?void 0:g.offsetHeight)||0,Zt=((B=V.current)===null||B===void 0?void 0:B.offsetWidth)||0,Tt=((U=V.current)===null||U===void 0?void 0:U.offsetHeight)||0,Ia=((ne=N.current)===null||ne===void 0?void 0:ne.offsetWidth)||0,Na=((ve=N.current)===null||ve===void 0?void 0:ve.offsetHeight)||0;ia(Ra),sa(Pa),ua(Zt),fa(Tt);var Rt=(((fe=K.current)===null||fe===void 0?void 0:fe.offsetWidth)||0)-Zt,Pt=(((Ke=K.current)===null||Ke===void 0?void 0:Ke.offsetHeight)||0)-Tt;_(Rt),Ee(Pt);var It=($e=N.current)===null||$e===void 0?void 0:$e.className.includes(ut);we(Rt-(It?0:Ia)),$(Pt-(It?0:Na)),ha(function(){var Nt=new Map;return i.forEach(function(ka){var kt=ka.key,me=P(kt).current;me&&Nt.set(kt,{width:me.offsetWidth,height:me.offsetHeight,left:me.offsetLeft,top:me.offsetTop})}),Nt})}),Ea=i.slice(0,ga),xa=i.slice(Sa+1),pt=[].concat((0,je.Z)(Ea),(0,je.Z)(xa)),Ca=(0,t.useState)(),yt=(0,y.Z)(Ca,2),Za=yt[0],Ta=yt[1],ee=Re.get(p),gt=(0,t.useRef)();function St(){oe.Z.cancel(gt.current)}(0,t.useEffect)(function(){var S={};return ee&&(v?(d?S.right=ee.right:S.left=ee.left,S.width=ee.width):(S.top=ee.top,S.height=ee.height)),St(),gt.current=(0,oe.Z)(function(){Ta(S)}),St},[ee,v,d]),(0,t.useEffect)(function(){mt()},[p,ee,Re,v]),(0,t.useEffect)(function(){Oe()},[d,W,p,i.map(function(S){return S.key}).join("_")]);var Et=!!pt.length,de="".concat(a,"-nav-wrap"),Be,De,xt,Ct;return v?d?(De=L>0,Be=L+X<G):(Be=L<0,De=-L+X<G):(xt=O<0,Ct=-O+ie<se),t.createElement("div",{ref:o,role:"tablist",className:z()("".concat(a,"-nav"),c),style:l,onKeyDown:function(){Le()}},t.createElement(et,{position:"left",extra:E,prefixCls:a}),t.createElement(Fe.Z,{onResize:Oe},t.createElement("div",{className:z()(de,(n={},(0,R.Z)(n,"".concat(de,"-ping-left"),Be),(0,R.Z)(n,"".concat(de,"-ping-right"),De),(0,R.Z)(n,"".concat(de,"-ping-top"),xt),(0,R.Z)(n,"".concat(de,"-ping-bottom"),Ct),n)),ref:x},t.createElement(Fe.Z,{onResize:Oe},t.createElement("div",{ref:K,className:"".concat(a,"-nav-list"),style:{transform:"translate(".concat(L,"px, ").concat(O,"px)"),transition:Ae?"none":void 0}},ht,t.createElement(Je,{ref:V,prefixCls:a,locale:C,editable:k,style:(0,H.Z)((0,H.Z)({},ht.length===0?void 0:Pe),{},{visibility:Et?"hidden":null})}),t.createElement("div",{className:z()("".concat(a,"-ink-bar"),(0,R.Z)({},"".concat(a,"-ink-bar-animated"),h.inkBar)),style:Za}))))),t.createElement($t,(0,J.Z)({},e,{ref:N,prefixCls:a,tabs:pt,className:!Et&&ut})),t.createElement(et,{position:"right",extra:E,prefixCls:a}))}var tt=t.forwardRef(jt);function Ft(e){var o=e.id,n=e.activeKey,r=e.animated,a=e.tabPosition,i=e.rtl,c=e.destroyInactiveTabPane,l=t.useContext(Ne),s=l.prefixCls,h=l.tabs,p=r.tabPane,d=h.findIndex(function(E){return E.key===n});return t.createElement("div",{className:z()("".concat(s,"-content-holder"))},t.createElement("div",{className:z()("".concat(s,"-content"),"".concat(s,"-content-").concat(a),(0,R.Z)({},"".concat(s,"-content-animated"),p)),style:d&&p?(0,R.Z)({},i?"marginRight":"marginLeft","-".concat(d,"00%")):null},h.map(function(E){return t.cloneElement(E.node,{key:E.key,prefixCls:s,tabKey:E.key,id:o,animated:p,active:E.key===n,destroyInactiveTabPane:c})})))}function at(e){var o=e.prefixCls,n=e.forceRender,r=e.className,a=e.style,i=e.id,c=e.active,l=e.animated,s=e.destroyInactiveTabPane,h=e.tabKey,p=e.children,d=t.useState(n),E=(0,y.Z)(d,2),k=E[0],C=E[1];t.useEffect(function(){c?C(!0):s&&C(!1)},[c,s]);var f={};return c||(l?(f.visibility="hidden",f.height=0,f.overflowY="hidden"):f.display="none"),t.createElement("div",{id:i&&"".concat(i,"-panel-").concat(h),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(h),"aria-hidden":!c,style:(0,H.Z)((0,H.Z)({},f),a),className:z()("".concat(o,"-tabpane"),c&&"".concat(o,"-tabpane-active"),r)},(c||k||n)&&p)}var Ut=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],nt=0;function Gt(e){return(0,Ie.Z)(e).map(function(o){if(t.isValidElement(o)){var n=o.key!==void 0?String(o.key):void 0;return(0,H.Z)((0,H.Z)({key:n},o.props),{},{node:o})}return null}).filter(function(o){return o})}function Yt(e,o){var n,r=e.id,a=e.prefixCls,i=a===void 0?"rc-tabs":a,c=e.className,l=e.children,s=e.direction,h=e.activeKey,p=e.defaultActiveKey,d=e.editable,E=e.animated,k=E===void 0?{inkBar:!0,tabPane:!1}:E,C=e.tabPosition,f=C===void 0?"top":C,W=e.tabBarGutter,D=e.tabBarStyle,w=e.tabBarExtraContent,m=e.locale,x=e.moreIcon,K=e.moreTransitionName,N=e.destroyInactiveTabPane,V=e.renderTabBar,Z=e.onChange,b=e.onTabClick,P=e.onTabScroll,M=(0,pe.Z)(e,Ut),v=Gt(l),T=s==="rtl",A;k===!1?A={inkBar:!1,tabPane:!1}:k===!0?A={inkBar:!0,tabPane:!0}:A=(0,H.Z)({inkBar:!0,tabPane:!1},(0,he.Z)(k)==="object"?k:{});var L=(0,t.useState)(!1),Q=(0,y.Z)(L,2),te=Q[0],I=Q[1];(0,t.useEffect)(function(){I((0,wt.Z)())},[]);var O=(0,ze.Z)(function(){var $;return($=v[0])===null||$===void 0?void 0:$.key},{value:h,defaultValue:p}),j=(0,y.Z)(O,2),F=j[0],q=j[1],G=(0,t.useState)(function(){return v.findIndex(function($){return $.key===F})}),_=(0,y.Z)(G,2),ge=_[0],Se=_[1];(0,t.useEffect)(function(){var $=v.findIndex(function(Te){return Te.key===F});if($===-1){var ae;$=Math.max(0,Math.min(ge,v.length-1)),q((ae=v[$])===null||ae===void 0?void 0:ae.key)}Se($)},[v.map(function($){return $.key}).join("_"),F,ge]);var se=(0,ze.Z)(null,{value:r}),Ee=(0,y.Z)(se,2),ke=Ee[0],xe=Ee[1],ce=f;te&&!["left","right"].includes(f)&&(ce="top"),(0,t.useEffect)(function(){r||(xe("rc-tabs-".concat(nt)),nt+=1)},[]);function we($,ae){b==null||b($,ae),q($),Z==null||Z($)}var Ce={id:ke,activeKey:F,animated:A,tabPosition:ce,rtl:T,mobile:te},re,Ze=(0,H.Z)((0,H.Z)({},Ce),{},{editable:d,locale:m,moreIcon:x,moreTransitionName:K,tabBarGutter:W,onTabClick:we,onTabScroll:P,extra:w,style:D,panes:l});return V?re=V(Ze,tt):re=t.createElement(tt,Ze),t.createElement(Ne.Provider,{value:{tabs:v,prefixCls:i}},t.createElement("div",(0,J.Z)({ref:o,id:r,className:z()(i,"".concat(i,"-").concat(ce),(n={},(0,R.Z)(n,"".concat(i,"-mobile"),te),(0,R.Z)(n,"".concat(i,"-editable"),d),(0,R.Z)(n,"".concat(i,"-rtl"),T),n),c)},M),re,t.createElement(Ft,(0,J.Z)({destroyInactiveTabPane:N},Ce,{animated:A}))))}var rt=t.forwardRef(Yt);rt.TabPane=at;var Xt=rt,Jt=Xt,Qt=u(44545),qt=u(49101),_t=u(54549),ea=u(21687),ta=u(65632),aa=u(97647),na=function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)o.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function it(e){var o=e.type,n=e.className,r=e.size,a=e.onEdit,i=e.hideAdd,c=e.centered,l=e.addIcon,s=na(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),h=s.prefixCls,p=s.moreIcon,d=p===void 0?t.createElement(Qt.Z,null):p,E=t.useContext(ta.E_),k=E.getPrefixCls,C=E.direction,f=k("tabs",h),W;o==="editable-card"&&(W={onEdit:function(m,x){var K=x.key,N=x.event;a==null||a(m==="add"?N:K,m)},removeIcon:t.createElement(_t.Z,null),addIcon:l||t.createElement(qt.Z,null),showAdd:i!==!0});var D=k();return(0,ea.Z)(!("onPrevClick"in s)&&!("onNextClick"in s),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),t.createElement(aa.Z.Consumer,null,function(w){var m,x=r!==void 0?r:w;return t.createElement(Jt,(0,J.Z)({direction:C,moreTransitionName:"".concat(D,"-slide-up")},s,{className:z()((m={},(0,R.Z)(m,"".concat(f,"-").concat(x),x),(0,R.Z)(m,"".concat(f,"-card"),["card","editable-card"].includes(o)),(0,R.Z)(m,"".concat(f,"-editable-card"),o==="editable-card"),(0,R.Z)(m,"".concat(f,"-centered"),c),m),n),editable:W,moreIcon:d,prefixCls:f}))})}it.TabPane=at;var ra=it},18106:function(He,be,u){"use strict";var J=u(43673),R=u.n(J),t=u(3749),y=u.n(t)}}]);
