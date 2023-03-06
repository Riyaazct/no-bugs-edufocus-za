import React from "react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import NavbarBlue from "../components/Navbar/NavbarBlue";
import Footer from "../components/Footer";
import "./Home.css";


function Home() {
	// const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			setMessage(body.message);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return <>
    <section>
      <NavbarBlue />
      <div className='hero-wrap'>
        <div className='overlay'>
          <div className='title-wrap'>
            <h1>The teacher is at the heart of everything we do</h1>
          </div>
          <div className='big-logo'>
						<img src='img-home/logo.webp' alt='big round logo EduFocus' />
					</div>
        </div>
      </div>
    </section>

    <section>
      <div className='welcome'>
        <h2>Welcome to EduFocus Projects.</h2>
        <p>EduFocus Projects NPO provides training, coaching and mentoring interventions to the
					 education sector,  in alignment with Goal 4 of the Sustainable Development Goals
					  (SDGs, 2015): QUALITY EDUCATION</p>
        <img className='svg1' src='img-home/green.svg' alt='green round shape' />
      </div>
      <div className='second-hero'>
				<img src='img-home/hero-second.png' alt='group of three people looking at a paper' />
			</div>
      <img className='svg2' src='img-home/blue.svg' alt='blue elliptical shape' />
    </section>

    <section className='programmes'>
      <h2>What Do We Do?</h2>
      <div className="text-container">
        <div className="text">
          <p>We empower and motivate teachers in South African schools by facilitating coaching,
						 training, mentoring and motivational initiatives, special events and other research-based
						  activities to amplify the teacher’s voice through reflexive practices.</p>
          <p>Our customized intervention programmes are dynamic and relevant to the contextual realities
						 of the 21st century classroom.</p>
        </div>
        <div className='photos'>
          <img src='img-home/coaching.webp' alt='coaching' />
          <img src='img-home/training.webp' alt='training' />
          <img src='img-home/mentor.webp' alt='mentor' /></div>
        </div>
				<Footer />
    </section>
  </>;
}

export default Home;
