import React from "react";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";

hljs.registerLanguage("javascript", javascript);

class CodeView extends React.Component {
  state = {
    fileContent: ""
  };

  componentDidMount = async () => {
    const res = await this.props.src();
    const fileContent = hljs.highlight("javascript", res.default).value;
    this.setState({ fileContent });
  };

  render = () => {
    const { fileContent } = this.state;
    return (
      <pre>
        <code
          className="hljs"
          dangerouslySetInnerHTML={{ __html: fileContent }}
        />
      </pre>
    );
  };
}

export default CodeView;
