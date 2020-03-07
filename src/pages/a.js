import React from "react";
import { Form, Input, Button } from "antd";

class A extends React.Component {
  componentDidShow = (lastProps, lastState) => {
    console.log("component did show");
    console.log("lastProps:", lastProps, "lastState:", lastState);
  };

  componentDidMount = () => {
    console.log("component did mount");
  };

  componentWillHide = () => {
    console.log("component will hide");
  };

  componentWillUnmount = () => {
    // componentWillUnmount将失效
    // 业务逻辑需要移动到componentWillHide
  };

  handleSubmit = (values) => {
    console.log(values);
  };

  render = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", textAlign: 'left' }}>
          <h1>Page A</h1>

          <Form onFinish={this.handleSubmit}>
            <Form.Item
              label="您的姓名"
              name="name"
              rules={[
                {
                  required: true,
                  message: "请输入您的姓名"
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Button htmlType="submit" style={{ marginRight: 10 }} type="primary">
              提交
            </Button>

            <Button onClick={() => this.props.history.push("/b")}>去页面B</Button>
          </Form>
        </div>
      </div>
    );
  };
}

export default A;
