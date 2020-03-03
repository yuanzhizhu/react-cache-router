import React from "react";

class B extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Page B</h1>
        <div>
          <input />
        </div>
        <button onClick={() => this.props.history.push('/a')}>go page a</button>
      </div>
    )
  };
}

export default B;
