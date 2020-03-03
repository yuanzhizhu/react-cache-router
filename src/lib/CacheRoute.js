import React, { Component } from "react";
import { Route } from "react-router-dom";

if (
  window.history &&
  window.history.scrollRestoration &&
  window.history.scrollRestoration === "auto"
) {
  window.history.scrollRestoration = "manual";
}

const copy = (obj) => JSON.parse(JSON.stringify(obj));

class CacheRoute extends Component {
  display = false; // 默认不展示组件
  matchCount = 0; // 每一次match到路由，都会自加1
  scrollTop = 0; // 用于保存滚动高度信息

  $component = null;

  lastProps = {};
  lastState = {};

  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  // 防止因父层render对本层造成影响
  shouldComponentUpdate = () => {
    return false;
  };

  getPageVisible = () => {
    return this.display;
  };

  getMatchCount = () => {
    return this.matchCount;
  };

  getBodyScrollTop = () => {
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
  };

  restoreScrollInfoIfShowPage = lastDisplay => {
    if (this.display && !lastDisplay) {
      setTimeout(() => {
        const el = document.scrollingElement || document.documentElement;
        el.scrollTo(0, this.scrollTop);

        const $component = this.$component || this.componentRef.current;

        if (this.matchCount > 1 && $component && $component.componentDidShow) {
          // componentDidShow在componentDidUpdate后触发
          // 当触发componentDidShow的时候，滚动条位置已经恢复
          // 第一次进入页面，不会执行componentDidShould
          $component.componentDidShow(this.lastProps, this.lastState);
        }
      }, 0);
    }
  };

  storeScrollInfoIfLeavePage = lastDisplay => {
    if (!this.display && lastDisplay) {
      this.scrollTop = this.getBodyScrollTop();

      const $component = this.$component || this.componentRef.current;
      if ($component && $component.componentWillHide) {
        this.lastProps = copy($component.props);
        this.lastState = copy($component.state);
        $component.componentWillHide();
      }
    }
  };

  getInstance = ($instance) => {
    this.$component = $instance;
  };

  render = () => {
    const { component: Component, ...restProps } = this.props;
    return (
      <Route
        {...restProps}
        children={({ match, ...restProps }) => {
          const lastDisplay = this.display;

          if (match) {
            this.display = true;
            this.matchCount++;
          } else {
            this.display = false;
          }

          this.storeScrollInfoIfLeavePage(lastDisplay);
          this.restoreScrollInfoIfShowPage(lastDisplay);

          return this.matchCount > 0 ? (
            <div style={{ display: this.display ? "block" : "none" }}>
              <Component
                {...restProps}
                getPageVisible={this.getPageVisible}
                getMatchCount={this.getMatchCount}
                ref={this.componentRef}
                getInstance={this.getInstance}
              />
            </div>
          ) : null;
        }}
      />
    );
  };
}

export default CacheRoute;
