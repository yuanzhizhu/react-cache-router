(this["webpackJsonpreact-cache-router"]=this["webpackJsonpreact-cache-router"]||[]).push([[4],{254:function(e,t,n){"use strict";n.r(t),t.default='import React from "react";\nimport { Avatar, Rate, Button, Breadcrumb, Icon } from "antd";\nimport { Link } from "react-router-dom";\nimport CodeView from "../CodeView";\nimport { getAppDetail } from "../api";\n\nclass AppDetail extends React.Component {\n  state = {\n    showCode: false,\n    appDetail: {}\n  };\n\n  componentDidMount = () => {\n    const query = decodeURIComponent(this.props.location.search).slice(1);\n    const appName = query.split("=")[1];\n    getAppDetail(appName).then(appDetail => this.setState({ appDetail }));\n  };\n\n  render = () => {\n    const { appDetail, showCode } = this.state;\n\n    return (\n      <>\n        <Button\n          shape="circle"\n          type="primary"\n          style={{ margin: 8 }}\n          onClick={() => this.setState({ showCode: !showCode })}\n        >\n          <Icon type="right-square" />\n        </Button>\n\n        <Breadcrumb style={{ margin: 8 }}>\n          <Breadcrumb.Item>\n            <Link to="/app-list">\u5e94\u7528\u4e2d\u5fc3</Link>\n          </Breadcrumb.Item>\n          <Breadcrumb.Item>{appDetail.title}</Breadcrumb.Item>\n        </Breadcrumb>\n\n        {showCode && (\n          <CodeView src={() => import("!!raw-loader!./AppDetail")} />\n        )}\n        <div style={{ textAlign: "center" }}>\n          <Avatar\n            style={{ margin: "36px 0 12px 0" }}\n            src={appDetail.icon}\n            size={80}\n          />\n          <h3>{appDetail.title}</h3>\n          <Rate allowHalf value={appDetail.rate} defaultValue={4.5} />\n          <h5 style={{ margin: "12px 32px" }}>{appDetail.desc}</h5>\n        </div>\n      </>\n    );\n  };\n}\n\nexport default AppDetail;\n'}}]);
//# sourceMappingURL=4.6884fca8.chunk.js.map