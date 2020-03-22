import React from "react";
import { Avatar, Rate, Button, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import CodeView from "../CodeView";
import { getAppDetail } from "../api";

class AppDetail extends React.Component {
  state = {
    showCode: false,
    appDetail: {}
  };

  componentDidMount = () => {
    const query = decodeURIComponent(this.props.location.search).slice(1);
    const appName = query.split("=")[1];
    getAppDetail(appName).then(appDetail => this.setState({ appDetail }));
  };

  render = () => {
    const { appDetail, showCode } = this.state;

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

        <Breadcrumb style={{ margin: 8 }}>
          <Breadcrumb.Item>
            <Link to="/app-list">应用中心</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{appDetail.title}</Breadcrumb.Item>
        </Breadcrumb>

        {showCode && (
          <CodeView src={() => import("!!raw-loader!./AppDetail")} />
        )}
        <div style={{ textAlign: "center" }}>
          <Avatar
            style={{ margin: "36px 0 12px 0" }}
            src={appDetail.icon}
            size={80}
          />
          <h3>{appDetail.title}</h3>
          <Rate allowHalf value={appDetail.rate} defaultValue={4.5} />
          <h5 style={{ margin: "12px 32px" }}>{appDetail.desc}</h5>
        </div>
      </>
    );
  };
}

export default AppDetail;
