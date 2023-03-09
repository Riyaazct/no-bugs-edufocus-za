"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _api = _interopRequireDefault(require("./api"));
var _config = _interopRequireDefault(require("./utils/config"));
var _middleware = require("./utils/middleware");
const apiRoot = "/api";
const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _middleware.configuredHelmet)());
app.use((0, _middleware.configuredMorgan)());
if (_config.default.production) {
  app.enable("trust proxy");
  app.use((0, _middleware.httpsOnly)());
}
app.use(apiRoot, _api.default);
app.use("/health", (_, res) => res.sendStatus(200));
app.use((0, _middleware.clientRouter)(apiRoot));
app.use((0, _middleware.logErrors)());
var _default = app;
exports.default = _default;