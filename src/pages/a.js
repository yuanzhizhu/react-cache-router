import React from "react";
import { Form, Input, Button, Select, message, Alert } from "antd";

const { Option } = Select;

class A extends React.Component {
  state = {
    records: []
  };

  constructor(props) {
    super(props);
    props.$CacheRouteInjectPageElement(this);
  }

  componentDidShow = (lastProps, lastState) => {
    console.log("page A: component did show");
  };

  componentDidMount = () => {
    console.log("page A: component did mount");
  };

  componentWillHide = () => {
    console.log("page A: component will hide");
  };

  componentWillUnmount = () => {
    // componentWillUnmount将失效
    // 业务逻辑需要移动到componentWillHide
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.form.resetFields();
        const records = [...this.state.records, values];
        this.setState({ records });
        message.success("提交成功");
      }
    });
  };

  render = () => {
    const { getFieldDecorator } = this.props.form;
    const { records } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", textAlign: "left" }}>
          <h1>Page A</h1>
          <h3>该页面采用CacheRoute</h3>

          <Alert
            message={<div>请打开devTool 查看Page A的生命周期</div>}
            type="success"
          />

          {records.length > 0 && <div>操作记录：</div>}
          {records.map((item, index) => {
            return (
              <div key={index} style={{ maxWidth: 300, wordBreak: 'break-all' }}>
                姓名{item.name}，工作{item.staff}
              </div>
            );
          })}

          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="您的姓名">
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "请输入您的姓名" }]
              })(<Input style={{ width: 300 }} />)}
            </Form.Item>

            <Form.Item label="您的职业">
              {getFieldDecorator("staff", {
                rules: [{ required: true, message: "请选择您的职业" }]
              })(
                <Select style={{ width: 300 }} allowClear>
                  <Option value="开发">开发</Option>
                  <Option value="产品">产品</Option>
                  <Option value="设计">设计</Option>
                </Select>
              )}
            </Form.Item>

            <Button
              htmlType="submit"
              type="primary"
              style={{ marginRight: 10 }}
            >
              提交
            </Button>

            <Button onClick={() => this.props.history.push("/b")}>
              去页面B
            </Button>
          </Form>
        </div>
      </div>
    );
  };
}

export default Form.create()(A);
