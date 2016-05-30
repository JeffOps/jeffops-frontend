import React from "react";
import reactMixin from "react-mixin";
import ReactRethinkdb from "react-rethinkdb";
import moment from "moment";
import _ from "lodash";

import db from "./db";

moment.locale("en-gb");

class Repositories extends React.Component {
  observe(props, state) {
    return {
      repositories: new ReactRethinkdb.QueryRequest({
        query: db.table("repositories"),
        changes: true,
        initial: [],
      }),
    };
  }

  render() {
    let projectDivs = _(this.data.repositories.value())
      .orderBy("pushed_at", "desc")
      .map(x => {
        return <tr key={x.id}>
          <td><a href={x.html_url}>{x.name}</a></td>
          <td>{x.versions.production}</td>
          <td>{x.versions.staging}</td>
          <td>{x.versions.testing}</td>
          <td>{moment(x.pushed_at).format("lll")}</td>
        </tr>
    }).value();
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
    </table>;
  }
};
reactMixin(Repositories.prototype, ReactRethinkdb.DefaultMixin);

export default Repositories;
