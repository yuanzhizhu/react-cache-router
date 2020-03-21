import React from "react";
import { Avatar, Rate, Button } from "antd";
import CodeView from "../CodeView";

class AppDetail extends React.Component {
  state = {
    showCode: false,
    params: {}
  };

  componentDidMount = () => {
    const query = decodeURIComponent(this.props.location.search).slice(1);
    const params = {};
    query.split("&").forEach(pair => {
      const [key, value] = pair.split("=");
      params[key] = value;
    });
    this.setState({ params });
  };

  render = () => {
    const { params, showCode } = this.state;

    return (
      <>
        <Button
          type="primary"
          style={{ margin: 8 }}
          onClick={() => this.setState({ showCode: !showCode })}
        >
          {showCode ? "隐藏代码" : "显示代码"}
        </Button>
        {showCode && <CodeView src={() => import("!!raw-loader!./AppDetail")} />}
        <div style={{ textAlign: "center" }}>
          <Avatar
            style={{ margin: "36px 0 12px 0" }}
            src={params.icon}
            size={80}
          />
          <h3>{params.title}</h3>
          <Rate allowHalf defaultValue={4.5} />
        </div>
      </>
    );
  };
}

export default AppDetail;
