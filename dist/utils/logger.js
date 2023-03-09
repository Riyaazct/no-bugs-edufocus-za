"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _winston = require("winston");
var _config = _interopRequireDefault(require("./config"));
const logger = (0, _winston.createLogger)({
  format: _winston.format.combine(_winston.format.align(), _winston.format.colorize(), _winston.format.errors({
    stack: true
  }), _winston.format.splat(), _winston.format.simple()),
  level: _config.default.logLevel,
  transports: [new _winston.transports.Console()]
});
if (!_config.default.production) {
  logger.debug("configured with: %O", _config.default);
}
var _default = logger;
exports.default = _default;