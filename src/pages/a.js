import React from "react";

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
    console.log("component will hide");
  };

  render = () => {
    return (
      <div>
        <h1>Page A</h1>
        <div>
          <input />
        </div>
        <button onClick={() => this.props.history.push("/b")}>go page b</button>
      </div>
    );
  };
}

export default A;
