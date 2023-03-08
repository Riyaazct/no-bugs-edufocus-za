<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
=======
import React from "react";
>>>>>>> main
import "./Home.css";
import NavbarBlue from "../components/Navbar/NavbarBlue";
import Button from "@mui/material/Button";

function Home() {
	return (
<<<<<<< HEAD
		<main role="main">
			<div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
				<Link to="/contact">Contact</Link>
=======
		<>
			<NavbarBlue />
			<div className="home-page">
				<section className="hero-wrap">
					<div className="overlay">
						<div className="content-wrap">
							<div className="text-wrap">
								<h3>The teacher is at the heart of everything we do</h3>
							</div>
							<div className="logo-wrap">
								<img src="api/images/home/logo.webp" alt="big round logo EduFocus" />
							</div>
							<div className="buttons">
								<Button
									variant="contained"
									color="secondary"
									size="large"
									style={{ margin: "10px" }}
								>
									Programmes
								</Button>
								<Button
									variant="contained"
									color="primary"
									size="large"
									style={{ margin: "10px" }}
								>
									Partner with us
								</Button>
								<Button
									variant="contained"
									color="secondary"
									size="large"
									style={{ margin: "10px" }}
								>
									Support
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="welcome">
						<h2>Welcome to EduFocus Projects.</h2>
						<p>
							EduFocus Projects NPO provides training, coaching and mentoring
							interventions to the education sector, in alignment with Goal 4 of
							the Sustainable Development Goals (SDGs, 2015): QUALITY EDUCATION
						</p>
						<img
							className="svg1"
							src="api/images/home/green.svg"
							alt="green round shape"
						/>
					</div>
					<div className="second-hero">
						<img
							src="api/images/home/hero-second.png"
							alt="group of three people looking at a paper"
						/>
					</div>
					<img
						className="svg2"
						src="api/images/home/blue.svg"
						alt="blue elliptical shape"
					/>
				</section>
				<section className="programmes">
					<h3>What Do We Do?</h3>
					<div className="container">
						<div className="text">
							<p>
								We empower and motivate teachers in South African schools by
								facilitating coaching, training, mentoring and motivational
								initiatives, special events and other research-based activities
								to amplify the teacher’s voice through reflexive practices.
							</p>
							<p>
								Our customized intervention programmes are dynamic and relevant
								to the contextual realities of the 21st century classroom.
							</p>
						</div>
						<div className="photos">
							<img src="api/images/home/coaching.webp" alt="coaching" />
							<img src="api/images/home/training.webp" alt="training" />
							<img src="api/images/home/mentor.webp" alt="mentor" />
						</div>
					</div>
				</section>
>>>>>>> main
			</div>
		</>
	);
}

export default Home;
