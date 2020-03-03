# React-Cache-Router 文档

## 场景

当路由`/a`变为`/b`后，将由页面 A 跳转至页面 B。

假设，此时页面 A 已经有了填写一半的 Form 表单数据，并且我希望再次从路由`/b`切回`/a`的时候，表单数据依然存在。一个常见的方法是，将页面 A 的数据临时存放在状态管理工具里面，比如 redux。

但是在大多数时候，项目的状态并不复杂，多引入一个 redux 来单纯做这个事情，又有点大材小用，且增加代码复杂度。

所以需要一个 React-Cache-Router，用最低的成本，一样来实现这个事儿。

## 原理

`<CacheRoute />` 的基本原理：因 `<Route />` 组件的[children](https://reacttraining.com/react-router/web/api/Route/children-func) 函数，具备忽视路由变化的特性，可以用来做页面缓存。 `<CacheRoute />` 所做的主要工作是：进一步封装了 `<Route children={...} />` ，并为常见的开发场景，提供了一系列 API。

## 基本用法

```jsx
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import CacheRoute from "./lib/CacheRoute";
import PageA from "./pages/a";
import PageB from "./pages/b";

function App() {
  return (
    <HashRouter>
      <CacheRoute path="/a" component={PageA} />
      <Route path="/b" component={PageB} />
    </HashRouter>
  );
}

export default App;
```

用 `<CacheRoute />` 代替 `<Route />`后 ，其 `component` 将会被缓存。

故在上述例子中，PageA 组件将被缓存。

## 生命周期

在使用 `<CacheRoute />` 后，将会为被包裹的组件，自动注入两个生命周期。分别是：

#### 1、componentWillHide()

因页面被缓存，将不再被卸载。故 `componentWillUnmount` 生命周期将失效。每次离开页面，将触发 `componentWillHide` ，可代替 `componentWillUnmount`。

#### 2、componentDidShow(lastProps, lastState)

因页面被缓存，将不再被卸载。故`componentDidMount`生命周期只会触发一次。第二次、第三次……进入页面，将触发 `componentDidShow` 。因可能存在特殊场景，`componentDidShow` 支持获取到跳出页面前的 `props` 和 `state`（很少会用到）。

Demo 如下：

```jsx
import React from "react";

class PageA extends React.Component {
  componentDidShow = (lastProps, lastState) => {
    // 每次进入页面都会触发
    console.log("component did show");
    console.log("lastProps:", lastProps, "lastState:", lastState);
  };

  componentDidMount = () => {
    // 只会触发一次
    console.log("component did mount");
  };

  componentWillHide = () => {
    // 每次离开页面都会触发
    console.log("component will hide");
  };

  componentWillUnmount = () => {
    // componentWillUnmount将失效
    // 这个生命周期中的业务逻辑，需移至componentWillHide
  };

  render = () => {
    return (
      <div>
        <h1>Page A</h1>
        <div>
          <input />
        </div>
        <button onClick={() => this.props.history.push("/b")}>go page b</button>
      </div>
    );
  };
}

export default PageA;
```

## API

目前 CacheRoute 提供了两个 API，分别是：

#### 1、getPageVisible()

获取当前页面显隐状态。返回：true 或 false。

#### 2、\$CacheRouteInjectPageElement()

当 页面 被高阶函数包裹时使用，务必请调用\$CacheRouteInjectPageElement()，把页面实例抛给CacheRoute

Demo 如下：

```jsx
class PageA extends React.Component {
  constructor(props) {
    this.props.$CacheRouteInjectPageElement(this);
    super(props);
  }

  render = () => {
    const visible = this.props.getPageVisible();
    return visible ? "pageA可见" : "pageA隐藏";
  };
}

export default SomeHoc(PageA);
```

