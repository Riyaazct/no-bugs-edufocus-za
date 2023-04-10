import NewFooter from "../components/NewFooter";
import Header from "../components/Navbar/Header";
import "./OurPeople.css";

const OurPeople = () => {
	return (
		<>
				<Header />
			<div className="ourPeopleContainer">
				<h1 className="heading">Our Team</h1>
				<div className="our-people">
					<div className="member-1">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/dorothy.jpg"
						/>
						<div className="name">
							<div className="nicole-fisher">Dr Dorothy E. Esau</div>
							<p></p>
							<b className="product-manager">Founder and Managing Director</b>
							<div className="designer-who-makes">
								Dr Dee is our Founder and Managing Director with 30+ years of
								experience in teaching, financial management, and
								entrepreneurship.
							</div>
						</div>
					</div>
					<div className="member-1">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/grace.jpg"
						/>
						<div className="name">
							<div className="nicole-fisher">Grace Bruintjies</div>
							<b className="product-manager">Chairperson</b>
							<div className="designer-who-makes">
								Grace Bruintjies, our Chairperson, holds a prospective Ph.D. and
								is a co-researcher on the SU-cohort Community Engaged Teaching
								and Learning NRF project.
							</div>
						</div>
						<div className="userpic"></div>
					</div>
					<div className="member-1">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/cherith.jpg"
						/>
						<div className="name">
							<div className="nicole-fisher">Cherith Wareley</div>
							<b className="product-manager">Treasurer</b>
							<div className="designer-who-makes">
								{
									"Cherith is a teacher with a Bachelor's in Education from the Western Cape Education Department. She is currently pursuing her B.Ed Honours degree in Language & Literacy at the University of the Western Cape and is committed to being a lifelong learner"
								}
							</div>
						</div>
						<div className="userpic"></div>
					</div>
					<div className="member-1">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/faith.jpg"
						/>
						<div className="name">
							<div className="nicole-fisher">Faith Brown</div>
							<b className="product-manager">Secretary</b>
							<div className="designer-who-makes">
								holds a BA (Human Ecology) degree from the University of the
								Western Cape, and Certificates in NPO Management and Business
								Management Coaching from the University of Stellenbosch Business
								School.
							</div>
						</div>
					</div>
					<div className="member-1">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/jade.jpg"
						/>
						<div className="name">
							<div className="nicole-fisher">Jade Damonse</div>
							<b className="product-manager">Volunteer</b>
							<div className="designer-who-makes">
								{
									"Jade (Damonse) Glenn has an Honours in Educational Psychology and a Bachelor of Education degree in English and Life Orientation from UWC. "
								}
							</div>
						</div>
						<div className="userpic"></div>
					</div>
					<div className="member-1">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/henry.jpg"
						/>
						<div className="name">
							<div className="nicole-fisher">Henry Esau</div>
							<b className="product-manager">
								Marketing and Public Relations expert
							</b>
							<div className="designer-who-makes">
								He has over 20 years of sales and marketing experience in the
								corporate sector and recently completed a Master's degree in
								Entrepreneurial Studies at CPUT with a focus on Social
								Entrepreneurship in Youth Development.
							</div>
						</div>
					</div>
				</div>
				<p className="space">&nbsp;</p>
				<button className="button-outline"><a href="/contact">Be Our Partner</a></button>
				<p className="space">&nbsp;</p>
			</div>
			
				<NewFooter />
		</>
	);
};
export default OurPeople;
