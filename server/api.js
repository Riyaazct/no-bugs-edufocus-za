import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post("/users", async (req, res) => {
	
	try {
		const {users, email, pwd} = req.body
		const result = await db.query(
			"INSERT INTO signup (users, email, pwd) VALUES ($1, $2, $3)",
			[users, email, pwd]

		);

		res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result.rows[0]
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }

	
});

export default router;
