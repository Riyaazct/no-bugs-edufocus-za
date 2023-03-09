"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnectDb = exports.default = exports.connectDb = void 0;
var _pg = require("pg");
var _config = _interopRequireDefault(require("./utils/config"));
var _logger = _interopRequireDefault(require("./utils/logger"));
const pool = new _pg.Pool({
  connectionString: _config.default.dbUrl,
  connectionTimeoutMillis: 5000,
  ssl: _config.default.dbUrl.includes("localhost") ? false : {
    rejectUnauthorized: false
  }
});
const connectDb = async () => {
  let client;
  try {
    client = await pool.connect();
  } catch (err) {
    _logger.default.error("%O", err);
    process.exit(1);
  }
  _logger.default.info("Postgres connected to %s", client.database);
  client.release();
};
exports.connectDb = connectDb;
const disconnectDb = () => pool.end();

/**
 * Access this with `import db from "path/to/db";` then use it with
 * `await db.query("<SQL>", [...<variables>])`.
 */
exports.disconnectDb = disconnectDb;
var _default = {
  query: (...args) => {
    _logger.default.debug("Postgres querying %O", args);
    return pool.query.apply(pool, args);
  }
};
exports.default = _default;