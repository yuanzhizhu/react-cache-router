(this["webpackJsonpreact-cache-router"]=this["webpackJsonpreact-cache-router"]||[]).push([[0],{138:function(e,t,n){e.exports=n(247)},246:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=n(53),l=n(34);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?d(e):t}window.history&&window.history.scrollRestoration&&"auto"===window.history.scrollRestoration&&(window.history.scrollRestoration="manual");var b=function(e){return JSON.parse(JSON.stringify(e))},y=function(e){function t(){var e,n;u(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return s(d(n=g(this,(e=f(t)).call.apply(e,[this].concat(o)))),"visible",!1),s(d(n),"matchCount",0),s(d(n),"scrollTop",0),s(d(n),"$pageElement",null),s(d(n),"pageRef",r.a.createRef()),s(d(n),"lastProps",{}),s(d(n),"lastState",{}),s(d(n),"shouldComponentUpdate",(function(){return!1})),s(d(n),"getPageVisible",(function(){return n.visible})),s(d(n),"$CacheRouteInjectPageElement",(function(e){n.$pageElement=e})),s(d(n),"getBodyScrollTop",(function(){return(document.scrollingElement||document.documentElement).scrollTop})),s(d(n),"restoreScrollInfoIfShowPage",(function(e){n.visible&&!e&&setTimeout((function(){(document.scrollingElement||document.documentElement).scrollTo(0,n.scrollTop);var e=n.$pageElement||n.pageRef.current;n.matchCount>1&&e&&e.componentDidShow&&e.componentDidShow(n.lastProps,n.lastState)}),0)})),s(d(n),"storeScrollInfoIfLeavePage",(function(e){if(!n.visible&&e){n.scrollTop=n.getBodyScrollTop();var t=n.$pageElement||n.pageRef.current;t&&t.componentWillHide&&(n.lastProps=b(t.props),n.lastState=b(t.state),t.componentWillHide())}})),s(d(n),"render",(function(){var e=n.props,t=e.component,a=h(e,["component"]);return r.a.createElement(l.b,p({},a,{children:function(e){var a=e.match,o=h(e,["match"]),c=n.visible;return a?(n.visible=!0,n.matchCount++):n.visible=!1,n.storeScrollInfoIfLeavePage(c),n.restoreScrollInfoIfShowPage(c),n.matchCount>0?r.a.createElement("div",{style:{display:n.visible?"block":"none"}},r.a.createElement(t,p({},o,{getPageVisible:n.getPageVisible,$CacheRouteInjectPageElement:n.$CacheRouteInjectPageElement,ref:n.pageRef}))):null}}))})),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),t}(a.Component),v=(n(248),n(72)),E=(n(100),n(69)),w=(n(76),n(71)),O=(n(101),n(6)),j=(n(156),n(99)),S=n(45),C=n(48),P=n(46),I=n(64),R=n(49),x=n(95),T=n.n(x),D=n(129),_=n(96),k=n.n(_),$=n(130),A=n.n($);n(159);k.a.registerLanguage("javascript",A.a);var L=function(e){function t(){var e,n;Object(S.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(C.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(o)))).state={fileContent:""},n.componentDidMount=Object(D.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.src();case 2:t=e.sent,a=k.a.highlight("javascript",t.default).value,n.setState({fileContent:a});case 5:case"end":return e.stop()}}),e)}))),n.render=function(){var e=n.state.fileContent;return r.a.createElement("pre",null,r.a.createElement("code",{className:"hljs",dangerouslySetInnerHTML:{__html:e}}))},n}return Object(R.a)(t,e),t}(r.a.Component),H=n(97),M=n.n(H),J=/github/.test(window.location.host)?"/react-cache-router/build":"",V=function(e){return new Promise((function(t){M.a.get("".concat(J,"/app-list.json")).then((function(e){return e.data})).then((function(n){var a=(n=n.map((function(e){return e.icon="".concat(J,"/").concat(e.icon,".svg"),e}))).find((function(t){return t.title===e}));t(a)}))}))},W=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(P.a)(t).call(this,e))).state={showCode:!1,loading:!1,apps:[]},a.componentDidShow=function(e,t){j.a.success("\u81ea\u52a8\u6062\u590d\u6eda\u52a8\u6761\u4f4d\u7f6e")},a.componentDidMount=function(){a.setState({loading:!0}),new Promise((function(e){M.a.get("".concat(J,"/app-list.json")).then((function(e){return e.data})).then((function(t){t=t.map((function(e){return e.icon="".concat(J,"/").concat(e.icon,".svg"),e})),setTimeout((function(){e(t)}),1e3)}))})).then((function(e){return a.setState({apps:e})})).finally((function(){a.setState({loading:!1})}))},a.componentWillHide=function(){j.a.success("\u81ea\u52a8\u4fdd\u5b58\u6eda\u52a8\u6761\u4f4d\u7f6e")},a.componentWillUnmount=function(){},a.goAppDetail=function(e){a.props.history.push("/app-detail?title=".concat(e.title))},a.render=function(){var e=a.state,t=e.apps,o=e.loading,c=e.showCode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{shape:"circle",type:"primary",style:{margin:8},onClick:function(){return a.setState({showCode:!c})}},r.a.createElement(O.a,{type:"right-square"})),c&&r.a.createElement(L,{src:function(){return n.e(4).then(n.bind(null,251))}}),r.a.createElement(v.a,{itemLayout:"horizontal",loading:o,dataSource:t,renderItem:function(e){return r.a.createElement(v.a.Item,{onClick:function(){return a.goAppDetail(e)}},r.a.createElement(v.a.Item.Meta,{avatar:r.a.createElement(E.a,{style:{marginLeft:8},src:e.icon,size:"large"}),title:e.title,description:r.a.createElement("div",{style:{marginRight:8}},e.desc)}))}}))},e.$CacheRouteInjectPageElement(Object(I.a)(a)),a}return Object(R.a)(t,e),t}(r.a.Component),z=(n(240),n(135)),B=(n(249),n(73)),N=function(e){function t(){var e,a;Object(S.a)(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(c)))).state={showCode:!1,appDetail:{}},a.componentDidMount=function(){var e=decodeURIComponent(a.props.location.search).slice(1).split("=")[1];V(e).then((function(e){return a.setState({appDetail:e})}))},a.render=function(){var e=a.state,t=e.appDetail,o=e.showCode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{shape:"circle",type:"primary",style:{margin:8},onClick:function(){return a.setState({showCode:!o})}},r.a.createElement(O.a,{type:"right-square"})),r.a.createElement(B.a,{style:{margin:8}},r.a.createElement(B.a.Item,null,r.a.createElement(i.b,{to:"/app-list"},"\u5e94\u7528\u4e2d\u5fc3")),r.a.createElement(B.a.Item,null,t.title)),o&&r.a.createElement(L,{src:function(){return n.e(3).then(n.bind(null,252))}}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E.a,{style:{margin:"36px 0 12px 0"},src:t.icon,size:80}),r.a.createElement("h3",null,t.title),r.a.createElement(z.a,{allowHalf:!0,value:t.rate,defaultValue:4.5}),r.a.createElement("h5",{style:{margin:"12px 32px"}},t.desc)))},a}return Object(R.a)(t,e),t}(r.a.Component);n(246);c.a.render(r.a.createElement((function(){return r.a.createElement("div",{id:"app"},r.a.createElement(i.a,null,r.a.createElement(l.b,{path:"/",exact:!0,render:function(){return r.a.createElement(l.a,{to:"/app-list"})}}),r.a.createElement(y,{path:"/app-list",component:W}),r.a.createElement(l.b,{path:"/app-detail",component:N})))}),null),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.9fbcb023.chunk.js.map