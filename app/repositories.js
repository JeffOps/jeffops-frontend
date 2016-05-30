import React from "react"
import reactMixin from "react-mixin"
import ReactRethinkdb from "react-rethinkdb"
import moment from "moment"
import _ from "lodash"

import { Link } from 'react-router'

import db from "./db"

moment.locale("en-gb")

class Repositories extends React.Component {
  observe(props, state) {
    return {
      repositories: new ReactRethinkdb.QueryRequest({
        query: db.table("repositories"),
        changes: true,
        initial: [],
      }),
    }
  }

  render() {
    let projectDivs = _(this.data.repositories.value())
      .orderBy("pushed_at", "desc")
      .map(x => {
        return <Repo
          key={x.id}
          name={x.name}
          id={x.id}
          versions={x.versions}
          url={x.html_url}/>
    }).value()
    return <table className="u-full-width">
      <thead>
        <tr>
          <th>Name</th>
          <th>Production</th>
          <th>Staging</th>
          <th>Testing</th>
          <th>Last pushed</th>
        </tr>
      </thead>
      <tbody>
        {projectDivs}
      </tbody>
    </table>
  }
}

class Repo extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <tr>
        <td><Link to={`/info/${this.props.name}`}> {this.props.name}</Link></td>
        <td>{this.props.versions.production}</td>
        <td>{this.props.versions.staging}</td>
        <td>{this.props.versions.testing}</td>
        <td>{moment(this.props.pushed_at).format("lll")}</td>
      </tr>
    )
  }
}

reactMixin(Repositories.prototype, ReactRethinkdb.DefaultMixin)

export default Repositories
