import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";
const router = Router();
const bcrypt = require('bcrypt');

router.get("/", (_, res) => {
  logger.debug("Welcoming everyone...");
  res.json({ message: "Hello, world!" });
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


//LOGIN
router.post("/login", async (req, res) => {
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
  // Login successful, return user data
  res.send({
    id: user.id,
    username: user.username,
    email: user.email,
  });
});

export default router;
