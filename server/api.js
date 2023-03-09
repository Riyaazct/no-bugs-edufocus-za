import { Router } from "express";
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import db from "./db";
import logger from "./utils/logger";
const router = Router();
const bcrypt = require("bcrypt");

// middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cookieParser());
router.use(session({
  // key: "user_id"
  secret: "£123",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
}));


router.get("/", (_, res) => {
  logger.debug("Welcoming everyone...");
  res.json({ message: "Hello, world!" });
});

router.get("/about/this/site", (_, res) => {
  console.log("About page Api is working...");
}).post((req, res) => {
  res.send(res);
});

router.get("/createAccount", (_, res) => {
  console.log("Signup page Api is working...");
});
router.get("/member", (req, res) => {
  res.json('Welcome to member page!');
});

router.get("/adm", (_, res) => {
  res.json('Welcome to the administrator page!');
});

router.get("/login", (_, res) => {
  console.log("Login Pge API is working...");
  res.json({ message: "Hello, I am login!" });
});

router.get("/contact-us", (_, res) => {
  console.log("Contact us page API is working");
});

router.get("/our-people", (_, res) => {
  console.log("Our People Page API is working....");
});

// REGISTRATION
router.post("/createAccount", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username already exists
  const checkUserQuery = "SELECT * FROM registration WHERE username = $1";
  const userResult = await db.query(checkUserQuery, [username]);
  if (userResult.rowCount > 0) {
    return res.status(400).send("Username already exists");
  }
  // Check if the email already exists
  const checkEmailQuery = "SELECT * FROM registration WHERE email = $1";
  const emailResult = await db.query(checkEmailQuery, [email]);
  if (emailResult.rowCount > 0) {
    return res.status(400).send("Email already exists");
  }
  // Hash the password
  const hashedPwd = await bcrypt.hash(password, 10);
  // If both checks pass, insert the new record with hashed password
 const insertQuery = "INSERT INTO registration (username, email, password) VALUES ($1, $2, $3)";
  db.query(insertQuery, [username, email, hashedPwd])
    .then(() => res.send("User added!"))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if the username exists
    const checkUserQuery = "SELECT * FROM registration WHERE username = $1";
    const userResult = await db.query(checkUserQuery, [username]);
    if (userResult.rowCount === 0) {
      return res.status(400).send("Invalid username or password");
    }
    // Compare password hash with user's input
    const user = userResult.rows[0];
    const validPwd = await bcrypt.compare(password, user.password);
    if (!validPwd) {
      return res.status(400).send("Invalid username or password");
    }
    // set Cache-Control header
    res.setHeader("Cache-Control", "no-cache");
    // Login successful, store user data in session
    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
    console.log(user);

    res.status(200).json({
      user: user,
      message: 'Success',
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while processing your request.");
  }
});


// Logout endpoint
router.post('/logout', (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {  
      res.status(500).send('Error logging out');
    } else {
      // Remove the session cookie
      res.clearCookie('connect.sid');
      res.status(200).send('Logged out successfully');
    }
  });
});
export default router;
