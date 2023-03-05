import { Router } from "express";
import db from "./db";

import logger from "./utils/logger";

const router = Router();

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
});

router.get("/contact-us", (_, res) => {
  console.log("Contact us page API is working");
});

router.get("/our-people", (_, res) => {
  console.log("Our People Page API is working....");
});

router.post("/createAccount", async (req, res) => {
  const { users, email, pwd } = req.body;
  // Check if the username already exists
  const checkUserQuery = "SELECT * FROM signup WHERE users = $1";
  const userResult = await db.query(checkUserQuery, [users]);
  if (userResult.rowCount > 0) {
    return res.status(400).send("Username already exists");
  }
  // Check if the email already exists
  const checkEmailQuery = "SELECT * FROM signup WHERE email = $1";
  const emailResult = await db.query(checkEmailQuery, [email]);
  if (emailResult.rowCount > 0) {
    return res.status(400).send("Email already exists");
  }
  // If both checks pass, insert the new record
  const insertQuery = "INSERT INTO signup (users, email, pwd) VALUES ($1, $2, $3)";
  db.query(insertQuery, [users, email, pwd])
    .then(() => res.send("User added!"))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

export default router;
