import ReactRethinkdb from "react-rethinkdb";

let r = ReactRethinkdb.r;

ReactRethinkdb.DefaultSession.connect({
  host: "localhost",
  port: 8000,
  path: "/rethink",
  secure: false,
  db: "test",
  autoReconnectDelayMs: 2000,
});

export default r;
