import React, { Component } from "react";
import { Route } from "react-router-dom";

if (
  window.history &&
  window.history.scrollRestoration &&
  window.history.scrollRestoration === "auto"
) {
  window.history.scrollRestoration = "manual";
}

const deepCopy = obj => JSON.parse(JSON.stringify(obj));

class CacheRoute extends Component {
  visible = false; // 默认不展示组件
  matchCount = 0; // 每一次match到路由，都会自加1
  scrollTop = 0; // 用于保存滚动高度信息
  $pageElement = null; // 页面元素实例
  pageRef = React.createRef();

  lastProps = {};
  lastState = {};

  // 防止因父层render对本层造成影响
  shouldComponentUpdate = () => {
    return false;
  };

  getPageVisible = () => {
    return this.visible;
  };

  $CacheRouteInjectPageElement = $instance => {
    this.$pageElement = $instance;
  };

  getBodyScrollTop = () => {
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
  };

  restoreScrollInfoIfShowPage = lastVisible => {
    if (this.visible && !lastVisible) {
      setTimeout(() => {
        const el = document.scrollingElement || document.documentElement;
        el.scrollTo(0, this.scrollTop);

        const $pageElement = this.$pageElement || this.pageRef.current;

        /**
         * componentDidShow在componentDidUpdate后触发
         * 当触发componentDidShow的时候，滚动条位置已经恢复
         * 第一次进入页面，不会执行componentDidShould
         */
        if (
          this.matchCount > 1 &&
          $pageElement &&
          $pageElement.componentDidShow
        ) {
          $pageElement.componentDidShow(this.lastProps, this.lastState);
        }
      }, 0);
    }
  };

  storeScrollInfoIfLeavePage = lastVisible => {
    if (!this.visible && lastVisible) {
      this.scrollTop = this.getBodyScrollTop();
      const $pageElement = this.$pageElement || this.pageRef.current;

      if ($pageElement && $pageElement.componentWillHide) {
        this.lastProps = deepCopy($pageElement.props);
        this.lastState = deepCopy($pageElement.state);
        $pageElement.componentWillHide();
      }
    }
  };

  render = () => {
    const { component: Component, ...restProps } = this.props;
    return (
      <Route
        {...restProps}
        children={({ match, ...restProps }) => {
          const lastVisible = this.visible;

          if (match) {
            this.visible = true;
            this.matchCount++;
          } else {
            this.visible = false;
          }

          this.storeScrollInfoIfLeavePage(lastVisible);
          this.restoreScrollInfoIfShowPage(lastVisible);

          return this.matchCount > 0 ? (
            <div style={{ display: this.visible ? "block" : "none" }}>
              <Component
                {...restProps}
                getPageVisible={this.getPageVisible}
                $CacheRouteInjectPageElement={this.$CacheRouteInjectPageElement}
                ref={this.pageRef}
              />
            </div>
          ) : null;
        }}
      />
    );
  };
}

export default CacheRoute;
