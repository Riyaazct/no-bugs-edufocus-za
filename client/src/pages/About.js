import "./about.css";
import Mission from "./Mission-Vision";
import NavbarBlue from "../components/Navbar/NavbarBlue";
// import Footer from "../components/Footer";

const About = () => (
	<main role="main">
		<NavbarBlue />
		<div className="main-container">
			{/* TITLE */}
			<div className="aboutOurStoryH1">
				<h1>OUR STORY</h1>
			</div>
			<hr className="aboutHr" color="#1e0f9e" size="3" />
			{/* CONTAINER FOR IMAGE AND PARAGRAPH */}
			<div className="aboutImageAndTextContainer">
				{/* IMAGE OVERLAY */}
				<div className="aboutImgOverlay"></div>
				{/* IMAGE */}
				<div className="aboutOurStoryImg">
					<img src="api/images/our-story.jpg" alt=".." />
				</div>
				{/* PARAGRAPHS(split into two) */}
				<div className="ourStoryP">
					<p className="aboutFirstParagraph">
						<span className="spanForName">EduFocus Projects</span> is a 100%
						black women-led Non-Profit Organisation that was established in 2020
						during the Covid-19 hard lockdown and temporary closure of school.
						Starting out as a passion project, which emanated from the findings
						of a study done by Dr Dorothy E. Esau, that revealed the need for
						support, guidance and mentorship of novice teachers.
					</p>
					<p className="aboutSecondParagraph">
						We used social media (Facebook and YouTube) as a virtual
						intervention strategy to reach our teachers to bring hope,
						motivation and inspiration, especially to our younger teachers, who
						had been particularly hard hit by the realities of a new career in
						an abnormal working environment. EduFocus Projects has subsequently
						been formalised as a Non-Profit Organisation, specialising in
						training, coaching, mentoring and motivational intervention
						programmes, which will hopefully, in the near future, be rolled out
						to schools across the country.
					</p>
				</div>
			</div>
		</div>
		<Mission />
		{/* <Footer /> */}
	</main>
);

export default About;
