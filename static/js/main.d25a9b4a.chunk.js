(this["webpackJsonpreact-cache-router"]=this["webpackJsonpreact-cache-router"]||[]).push([[0],{22:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(19),l=n.n(r),c=n(13),i=n(6),u=n(14),s=n(7),p=n(9),m=n(8),h=n(10);window.history&&window.history.scrollRestoration&&"auto"===window.history.scrollRestoration&&(window.history.scrollRestoration="manual");var f=function(e){return JSON.parse(JSON.stringify(e))},g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).visible=!1,n.matchCount=0,n.scrollTop=0,n.$pageElement=null,n.pageRef=a.a.createRef(),n.lastProps={},n.lastState={},n.shouldComponentUpdate=function(){return!1},n.getPageVisible=function(){return n.visible},n.$CacheRouteInjectPageElement=function(e){n.$pageElement=e},n.getBodyScrollTop=function(){return(document.scrollingElement||document.documentElement).scrollTop},n.restoreScrollInfoIfShowPage=function(e){n.visible&&!e&&setTimeout((function(){(document.scrollingElement||document.documentElement).scrollTo(0,n.scrollTop);var e=n.$pageElement||n.pageRef.current;n.matchCount>1&&e&&e.componentDidShow&&e.componentDidShow(n.lastProps,n.lastState)}),0)},n.storeScrollInfoIfLeavePage=function(e){if(!n.visible&&e){n.scrollTop=n.getBodyScrollTop();var t=n.$pageElement||n.pageRef.current;t&&t.componentWillHide&&(n.lastProps=f(t.props),n.lastState=f(t.state),t.componentWillHide())}},n.render=function(){var e=n.props,t=e.component,o=Object(u.a)(e,["component"]);return a.a.createElement(i.b,Object.assign({},o,{children:function(e){var o=e.match,r=Object(u.a)(e,["match"]),l=n.visible;return o?(n.visible=!0,n.matchCount++):n.visible=!1,n.storeScrollInfoIfLeavePage(l),n.restoreScrollInfoIfShowPage(l),n.matchCount>0?a.a.createElement("div",{style:{display:n.visible?"block":"none"}},a.a.createElement(t,Object.assign({},r,{getPageVisible:n.getPageVisible,$CacheRouteInjectPageElement:n.$CacheRouteInjectPageElement,ref:n.pageRef}))):null}}))},n}return Object(h.a)(t,e),t}(o.Component),d=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidShow=function(e,t){console.log("component did show"),console.log("lastProps:",e,"lastState:",t)},n.componentDidMount=function(){console.log("component did mount")},n.componentWillHide=function(){console.log("component will hide")},n.componentWillUnmount=function(){},n.render=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Page A"),a.a.createElement("div",null,a.a.createElement("input",null)),a.a.createElement("button",{onClick:function(){return n.props.history.push("/b")}},"go page b"))},n}return Object(h.a)(t,e),t}(a.a.Component),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Page B"),a.a.createElement("div",null,a.a.createElement("input",null)),a.a.createElement("button",{onClick:function(){return n.props.history.push("/a")}},"go page a"))},n}return Object(h.a)(t,e),t}(a.a.Component);var E=function(){return a.a.createElement(c.a,null,a.a.createElement(i.b,{path:"/",exact:!0,render:function(){return a.a.createElement(i.a,{to:"/a"})}}),a.a.createElement(g,{path:"/a",component:d}),a.a.createElement(i.b,{path:"/b",component:b}))};l.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d25a9b4a.chunk.js.map