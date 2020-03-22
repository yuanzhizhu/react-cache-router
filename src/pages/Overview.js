import React from "react";
import { Link } from "react-router-dom";
import CodeView from "../CodeView";

class Overview extends React.Component {
  render = () => {
    return (
      <>
        <h1>1、路由代码</h1>
        <CodeView src={() => import("!!raw-loader!../index.js")} />

        <h1>2、简述</h1>
        <p>
          在本demo中，应用列表（app-list）为CacheRoute；所以，该长列表内的应用数据，以及滚动条位置都会被缓存。
        </p>
        <p>
          可以选择某个应用，进入该应用的详情（app-detail）；再返回到列表页，去体验这个效果！
        </p>

        <h3>
          <Link to="/app-list">点击前往应用列表页面</Link>
        </h3>
      </>
    );
  };
}

export default Overview;
