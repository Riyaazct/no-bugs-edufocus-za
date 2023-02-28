import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";
import NavbarBlue from "../components/Navbar/Header"

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<NavbarBlue />
				<main role="main">
				
				<div>
		
				<h1 className="message" data-qa="message">
				{message}
						</h1>
						<Link to="/about/this/site">About</Link>
						</div>
						
				</main>
				</div>
				);
}

export default Home;
