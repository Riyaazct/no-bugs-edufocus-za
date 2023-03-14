"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireWildcard(require("express"));
var _db = _interopRequireDefault(require("./db"));
var _path = _interopRequireDefault(require("path"));
var _logger = _interopRequireDefault(require("./utils/logger"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const router = (0, _express.Router)();
router.get("/", (_, res) => {
  _logger.default.debug("Welcoming everyone...");
  res.json({
    message: "Hello, world!"
  });
});

// Router Link location of About Page
router.get("/about/this/site", (_, res) => {
  console.log("About page Api is working...");
}).post((req, res) => {
  res.send(res);
});
router.get("/createAccount", (_, res) => {
  console.log("Signup page Api is working...");
});
router.get("/login", (_, res) => {
  console.log("Login Pge API is working...");
});
router.get("/contact-us", (_, res) => {
  console.log("Contact us page API is working");
});
router.get("/our-people", (_, res) => {
  console.log("Our People Page API is working....");
});

// router.post("/users", async (req, res) => {
//   const { users, email, pwd } = req.body;
//   const query =
//       "INSERT INTO signup (users, email, pwd) VALUES ($1, $2, $3)";
//       db
//       .query(query, [users, email, pwd])
//       .then(() => res.send("User added!"))
//       .catch((error) => {
//             console.error(error);
//             res.status(500).json(error);
//           });
// });

const imagesRoot = _path.default.join(__dirname, "images");
router.use("/images", _express.default.static(imagesRoot, {
  index: false,
  redirect: false,
  setHeaders: (res, path) => {
    if (path.endsWith(".jpg")) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
  }
}));
var _default = router;
exports.default = _default;