import React from "react";
import { List, Avatar, Button, message, Icon } from "antd";
import CodeView from "../CodeView";
import { getAppList } from "../api";

class AppList extends React.Component {
  state = {
    showCode: false,
    loading: false,
    apps: []
  };

  constructor(props) {
    super(props);
    props.$CacheRouteInjectPageElement(this);
  }

  componentDidShow = (lastProps, lastState) => {
    message.success("自动恢复滚动条位置");
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    getAppList()
      .then(apps => this.setState({ apps }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  componentWillHide = () => {
    message.success("自动保存滚动条位置");
  };

  componentWillUnmount = () => {
    // componentWillUnmount将失效
    // 业务逻辑需要移动到componentWillHide
  };

  goAppDetail = item => {
    this.props.history.push(`/app-detail?title=${item.title}`);
  };

  render = () => {
    const { apps, loading, showCode } = this.state;

    return (
      <>
        <Button
          shape="circle"
          type="primary"
          style={{ margin: 8 }}
          onClick={() => this.setState({ showCode: !showCode })}
        >
          <Icon type="right-square" />
        </Button>
        {showCode && <CodeView src={() => import("!!raw-loader!./AppList")} />}
        <List
          itemLayout="horizontal"
          loading={loading}
          dataSource={apps}
          renderItem={item => (
            <List.Item onClick={() => this.goAppDetail(item)}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{ marginLeft: 8 }}
                    src={item.icon}
                    size="large"
                  />
                }
                title={item.title}
                description={<div style={{ marginRight: 8 }}>{item.desc}</div>}
              />
            </List.Item>
          )}
        />
      </>
    );
  };
}

export default AppList;
