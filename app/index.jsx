import React from "react";
import ReactDOM from "react-dom";
import balalaika from "balalaika";

import Repositories from "./repositories";

class App extends React.Component {
  render() {
    return <div>
      <h1>JeffOps</h1>
      <Repositories />
    </div>;
  }
};

ReactDOM.render(<App/>, $("#app")[0]);
