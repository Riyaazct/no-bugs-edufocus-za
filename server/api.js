import { Router } from "express";
import db from "./db";

import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post("/users", async (req, res) => {
  const { users, email, pwd } = req.body;
  const query =
      "INSERT INTO signup (users, email, pwd) VALUES ($1, $2, $3)";
      db
      .query(query, [users, email, pwd])
      .then(() => res.send("User added!"))
      .catch((error) => {
            console.error(error);
            res.status(500).json(error);
          });
});

export default router;
