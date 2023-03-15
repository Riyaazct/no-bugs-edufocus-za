import { Router } from "express";
import db from "./db";
import path from "path";
import logger from "./utils/logger";
import express from "express";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


// Router Link location of About Page
router.get("/about/this/site", (_, res) =>{
	console.log("About page Api is working...");
}).post((req, res) => {
res.send(res);
});

router.get("/createAccount", (_, res)=> {
	console.log("Signup page Api is working...");
});

router.get("/login", (_,res) =>{
	console.log("Login Pge API is working...");
});

router.get("/contact-us", (_, res) => {
	console.log("Contact us page API is working");
});

router.get("/our-people", (_, res) => {
	console.log("Our People Page API is working....");
});

router.get("/users", async (req, res) => {
	try {
		const getUsersQuery = "SELECT * FROM registration";
		const usersResult = await db.query(getUsersQuery);
		const users = usersResult.rows;
		res.status(200).json(users);
	} catch (err) {
		console.error(err);
		res.status(500).send("An error occurred while processing your request.");
	}
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








































const imagesRoot = path.join(__dirname, "images");
router.use(
	"/images",
	express.static(imagesRoot, {
		index: false,
		redirect: false,
		setHeaders: (res, path) => {
			if (path.endsWith(".jpg")) {
				res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
			}
		},
	})
);




export default router;
