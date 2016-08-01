import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'

import { App, Modal } from './index.jsx'


class Main extends React.Component {
  render(){
    return (
      <Router history={ browserHistory }>
        <Route path="/"         component={ App }/>
        <Route path="/info/:id" component={ Modal }/>
      </Router>
    )
  }
}

ReactDOM.render(<Main />, $("#app")[0]);
