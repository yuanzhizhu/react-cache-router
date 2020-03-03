import React from "react";

class A extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Page A</h1>
        <div>
          <input />
        </div>
        <button onClick={() => this.props.history.push('/b')}>go page b</button>
      </div>
    )
  };
}

export default A;
