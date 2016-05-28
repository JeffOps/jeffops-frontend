import React from "react";
import reactMixin from "react-mixin";
import ReactRethinkdb from "react-rethinkdb";

import db from "./db";


class Projects extends React.Component {
  observe(props, state) {
    return {
      projects: new ReactRethinkdb.QueryRequest({
        query: db.table("projects"),
        changes: true,
        initial: [],
      }),
    };
  }

  render() {
    let projectDivs = this.data.projects.value().map(x => {
      return <tr key={x.id}>
        <td>{x.name}</td>
        <td>{x.versions.production}</td>
        <td>{x.versions.staging}</td>
        <td>{x.versions.testing}</td>
      </tr>
    });
    return <table className="u-full-width">
      <thead>
        <tr>
          <th>Name</th>
          <th>Production</th>
          <th>Staging</th>
          <th>Testing</th>
        </tr>
      </thead>
      <tbody>
        {projectDivs}
      </tbody>
    </table>;
  }
};
reactMixin(Projects.prototype, ReactRethinkdb.DefaultMixin);

export default Projects;
