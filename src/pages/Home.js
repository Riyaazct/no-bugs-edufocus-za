import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";
// import ListAll from "../components/buttons/components";
import NavbarBlue from "../components/Navbar/NavbarBlue"
import NavbarWhite from "../components/Navbar/NavbarWhite";


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
		<main role="main">
			<NavbarBlue />
			<NavbarWhite />
			<div>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/buttons">Buttons</Link>
			</div>
		</main>
	);
}

export default Home;
