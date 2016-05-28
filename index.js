const express = require("express");
const http = require("http");
const Promise = require("bluebird");
const RethinkdbWebsocketServer = require("rethinkdb-websocket-server");

let r = RethinkdbWebsocketServer.r;
let RP = RethinkdbWebsocketServer.RP;

let options = {
  unsafelyAllowAnyQuery: true,
};

let rethinkConn = Promise.promisify(r.connect)({
  host: options.dbHost,
  port: options.dbPort,
  db: "test",
});


let app = express();

app.use("/", express.static("dist"));

let httpServer = http.createServer(app);

options.httpServer = httpServer;
options.httpPath = "/rethink";

RethinkdbWebsocketServer.listen(options);
httpServer.listen(8000);
