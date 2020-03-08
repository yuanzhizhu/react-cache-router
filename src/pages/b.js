import React from "react";
import { Select, Form, Button, message } from "antd";

const { Option } = Select;

class B extends React.Component {
  state = {
    records: []
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
          <h1>Page B</h1>
          <h3>该页面采用普通Route</h3>

          {records.length > 0 && <div>操作记录：</div>}
          {records.map((item, index) => {
            return <div key={index}>编程语言{item.lang}</div>;
          })}

          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="您的语言">
              {getFieldDecorator("lang", {
                rules: [{ required: true, message: "请选择您的主要编程语言" }]
              })(
                <Select style={{ width: 300 }} allowClear>
                  <Option value="Java">Java</Option>
                  <Option value="Node">Node</Option>
                  <Option value="Php">Php</Option>
                </Select>
              )}
            </Form.Item>

            <Button
              htmlType="submit"
              style={{ marginRight: 10 }}
              type="primary"
            >
              提交
            </Button>
            <Button onClick={() => this.props.history.push("/a")}>
              去页面A
            </Button>
          </Form>
        </div>
      </div>
    );
  };
}

export default Form.create()(B);
