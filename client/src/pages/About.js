import "./about.css";
import Mission from "./Mission-Vision";
import Header from "../components/Navbar/Header";
import TheProblem from "./TheProblem";
import Partners from "./Partners";
import Publications from "./Publications";
import NewFooter from "../components/NewFooter";


const About = () => (
	<main role="main">
		<Header />
		<div className="ourStoryPage">
			<div className="ourStoryContentContainer">
				<div className="storyImageContainer">
					<h1>OUR STORY</h1>
					<img src="api/images/our-story.jpg" alt="" />
				</div>

				<div className="storyText">
					<p>
						<span>EduFocus Projects</span> is a 100% black women-led Non-Profit
						Organisation that was established in 2020 during the Covid-19 hard
						lockdown and temporary closure of school.
					</p>
					<p>
						Starting out as a passion project, which emanated from the findings
						of a study done by Dr Dorothy E. Esau, that revealed the need for
						support, guidance and mentorship of novice teachers.
					</p>
					<p>
						We used social media (Facebook and YouTube) as a virtual
						intervention strategy to reach our teachers to bring hope,
						motivation and inspiration, especially to our younger teachers, who
						had been particularly hard hit by the realities of a new career in
						an abnormal working environment.
					</p>
					<p>
						<span>EduFocus Projects</span> has subsequently been formalised as a
						Non-Profit Organisation, specialising in training, coaching,
						mentoring and motivational intervention programmes, which will
						hopefully, in the near future, be rolled out to schools across the
						country.
					</p>
				</div>
			</div>
		</div>
		<Mission />
		<TheProblem />
		<Partners />
		<Publications />
		<NewFooter />
	</main>
);

export default About;
