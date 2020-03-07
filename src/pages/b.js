import React from "react";
import { Input, Form, Button } from "antd";

class B extends React.Component {
  render = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", textAlign: 'left' }}>
          <h1>Page B</h1>
          <Form onFinish={this.handleSubmit}>
            <Form.Item
              label="编程语言"
              name="lang"
              rules={[
                {
                  required: true,
                  message: "请输入您的主要编程语言"
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Button htmlType="submit" style={{ marginRight: 10 }} type="primary">
              提交
            </Button>
            <Button onClick={() => this.props.history.push("/a")}>去页面A</Button>
          </Form>
        </div>
      </div>
    );
  };
}

export default B;
