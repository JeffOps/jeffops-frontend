import balalaika from "balalaika"
import React from 'react'

import { Link } from 'react-router'

import Repositories from "./repositories"

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>JeffOps</h1>
        <Repositories />
      </div>
    )
  }
}

export class Modal extends React.Component {
  render() {
    return (
      <h3><Link to="/">Home</Link> / {this.props.params.id}</h3>
    )
  }
}
