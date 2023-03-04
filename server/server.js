import http from "http";

import app from "./app";
import { connectDb, disconnectDb } from "./db";
import config from "./utils/config";
import logger from "./utils/logger";

const server = http.createServer(app);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	logger.info("listening on: %s", bind);
});

process.on("SIGTERM", () => server.close(() => disconnectDb()));

connectDb().then(() => server.listen(config.port));

const express = require("express");
const appMailer = express();
const PORT = process.env.PORT || 5000;



appMailer.get("/", (req, res) => {
	res.send("hello!Test");
});

appMailer.listen(PORT, ()=>{
	console.log(`appMailer Server running on ${PORT}`);
});