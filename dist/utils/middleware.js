"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logErrors = exports.httpsOnly = exports.configuredMorgan = exports.configuredHelmet = exports.clientRouter = void 0;
var _express = _interopRequireWildcard(require("express"));
var _helmet = _interopRequireDefault(require("helmet"));
var _morgan = _interopRequireDefault(require("morgan"));
var _path = _interopRequireDefault(require("path"));
var _logger = _interopRequireDefault(require("./logger"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const clientRouter = apiRoot => {
  const staticDir = _path.default.join(__dirname, "..", "static");
  const router = (0, _express.Router)();
  router.use(_express.default.static(staticDir));
  router.use((req, res, next) => {
    if (req.method === "GET" && !req.url.startsWith(apiRoot)) {
      return res.sendFile(_path.default.join(staticDir, "index.html"));
    }
    next();
  });
  return router;
};
exports.clientRouter = clientRouter;
const configuredHelmet = () => (0, _helmet.default)({
  contentSecurityPolicy: false
});
exports.configuredHelmet = configuredHelmet;
const configuredMorgan = () => (0, _morgan.default)("dev", {
  stream: {
    write: message => _logger.default.info(message.trim())
  }
});
exports.configuredMorgan = configuredMorgan;
const httpsOnly = () => (req, res, next) => {
  if (!req.secure) {
    return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
  }
  next();
};
exports.httpsOnly = httpsOnly;
const logErrors = () => (err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  _logger.default.error("%O", err);
  res.sendStatus(500);
};
exports.logErrors = logErrors;