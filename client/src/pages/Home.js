import React from "react";
import "./Home.css";
import Header from "../components/Navbar/Header";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<Header />
			<div className="home-page">
				<section className="hero-wrap">
					<div className="overlay">
						<div className="content-wrap">
							<div className="left-box">
								<h2>Edu Focus</h2>
								<h3>The teacher is at the heart of everything we do</h3>
								<div className="buttons">
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
							<div className="right-box">
								<div className="logo-wrap">
									<img src="api/images/home/logo.webp" alt="big round logo EduFocus" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="welcome">
					<div className="welcome-text">
						<h2>Welcome to EduFocus Projects.</h2>
						<p>
							EduFocus Projects NPO provides training, coaching and mentoring
							interventions to the education sector, in alignment with Goal 4 of
							the Sustainable Development Goals (SDGs, 2015): QUALITY EDUCATION
						</p>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							style={{ margin: "10px" }}
						>
							Programmes
						</Button>
					</div>
					<div className="welcome-img">
						<img
							src="api/images/home/hero-second.png"
							alt="group of three people looking at a paper"
						/>
					</div>
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
							<div className="coaching">
								<h4>Coaching programmes</h4>
								<img src="api/images/home/coaching.webp" alt="coaching" />
								<p>
									<Link to="/">Find out more...</Link>
								</p>
							</div>
							<div className="training">
								<h4>Training programmes</h4>
								<img src="api/images/home/training.webp" alt="training" />
								<p>
									<Link to="/">Find out more...</Link>
								</p>
							</div>
							<div className="mentor">
								<h4>Mentoring programmes</h4>
								<img src="api/images/home/mentor.webp" alt="mentor" />
								<p>
									<Link to="/">Find out more...</Link>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Home;
