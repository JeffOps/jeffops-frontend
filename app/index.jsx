import React from "react";
import ReactDOM from "react-dom";
import balalaika from "balalaika";

import Projects from "./projects";

class App extends React.Component {
  render() {
    return <div>
      <h1>JeffOps</h1>
      <Projects />
    </div>;
  }
};

ReactDOM.render(<App/>, $("#app")[0]);
