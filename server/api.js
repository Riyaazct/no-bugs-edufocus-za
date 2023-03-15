
import { Router } from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import db from "./db";
import logger from "./utils/logger";
// import images route from file
import imageRoutes from "./imageRoutes";
import nodemailer from "nodemailer";

//contact form imports and getting tokens and google oauth

const { google } = require("googleapis");
const dotenv = require("dotenv");
dotenv.config();
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.Client_ID,
  process.env.Client_Secret,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({ refresh_token:process.env.Refresh_Token });
const accessToken = oauth2Client.getAccessToken();
//++++++++++++++++++++

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

//router for images displayed on pages
router.use("/", imageRoutes);

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
  res.json("Welcome to member page!");
});

router.get("/adm", (_, res) => {
  res.json("Welcome to the administrator page!");
});

router.get("/login", (_, res) => {
  console.log("Login Pge API is working...");
  res.json({ message: "Hello, I am login!" });
});

router.get("/our-people", (_, res) => {
  console.log("Our People Page API is working....");
});


//***********************/
//CONTACT PAGE

//   message object from frontend
//   const [contactmsg, setContactmsg] = useState({
//   fullname: "",
//   email: "",
//   messagetype: "",
//   message: "",
//  });

//general get for testing purpose

router.get("/contact", (_, res) => {
  console.log("Contact Page API is working...");
  res.json({ message: "Hello, I am Contact" });
});

router.post("/contact",(req, res)=>{

  const { fullname, email, messagetype, message } = req.body;

  //email sample
  const output=`
  <p>You have a new contact request</p>
  <h3>Contact details</h3>
  <ul>
  <li>FirstName: ${fullname}</li>
  <li>Email: ${email}</li>
  <li>Message Type: ${messagetype}</li>
  <li>Message : ${message}</li>
  </ul>`;

  //res.send(output);

  console.log({ output });

  //sending mail using SMTP and nodemailer
  const smtpTrans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type:"OAuth2",
      user:process.env.GMAIL_USER,
      clientId:process.env.Client_ID,
      clientSecret:process.env.Client_Secret,
      refreshToken:process.env.Refresh_Token,
      accessToken:accessToken,
    },
  });

  //email with content
  const mailOpts = {
    from:process.env.GMAIL_USER,
    to:process.env.RECIPIENT,
    subject:"New message from Edufocus Website Contact form",
    html:output,
  };
    //send email
  smtpTrans.sendMail(mailOpts,(error,res)=>{
    if(error){
    console.log(error);
    } else{
      res.status(200).send("Message sent successfully");
    }
   //smtpTrans.close();
  });
});
//****************************/

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
    let theObj = req.body.fullname;
    res.send("theObj");

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
      message: `${username}`,
    });


  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while processing your request.");
  }
});


// Logout endpoint
router.post("/logout", (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("Error logging out");
    } else {
      // Remove the session cookie
      res.clearCookie("connect.sid");
      res.status(200).send("Logged out successfully");
    }
  });
});

// // route for images stored in server
// const imagesRoot = path.join(__dirname, "images");
// router.use("/images", express.static(imagesRoot));

// photo carousel data in database
router.get("/photos", async (req, res) => {
	try {
		const result = await db.query("select * from photos");
		res.json(result.rows);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
});

export default router;
