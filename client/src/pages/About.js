// import backgroundImg from "/public/bg.jpg";
import "./about.css";

const About = () => (
	<main role="main" className="main">
		<div className="main-container">

		<div className="ourStoryH1">
			<h1>OUR STORY</h1>
		</div>
		<hr color="#1e0f9e" size="5" />
		<div className="imageAndTextContainer">
			<div className="imgOverlay"></div>
			<div className="ourStoryImg">
				<img src="/images/our-story.jpg" alt=".." />
			</div>
			<div className="ourStoryP">
				<p className="firstParagraph">
					<span className="spanForName">EduFocus Projects</span> is a 100% black
					women-led Non-Profit Organisation that was established in 2020 during
					the Covid-19 hard lockdown and temporary closure of school. Starting
					out as a passion project, which emanated from the findings of a study
					done by Dr Dorothy E. Esau, that revealed the need for support,
					guidance and mentorship of novice teachers.
				</p>
				<p className="secondParagraph">
					We used social media (Facebook and YouTube) as a virtual intervention
					strategy to reach our teachers to bring hope, motivation and
					inspiration, especially to our younger teachers, who had been
					particularly hard hit by the realities of a new career in an abnormal
					working environment. EduFocus Projects has subsequently been
					formalised as a Non-Profit Organisation, specialising in training,
					coaching, mentoring and motivational intervention programmes, which
					will hopefully, in the near future, be rolled out to schools across
					the country.
				</p>
			</div>
		</div>
		</div>
	</main>
);

export default About;
