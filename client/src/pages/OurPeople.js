import "./OurPeople.css";
import NavbarBlue from "../components/Navbar/Header";
import Footer from "../components/Footer";

const OurPeople = () => {
  return (
		<div>
			<div className="header">
				<NavbarBlue />
				<div>
					<h1>Our Team</h1>
				</div>
			</div>

			<div className="our-people">
				<div className="member-1">
					<div className="name">
						<div className="designer-who-makes">
							Dr Dee is our Founder and Managing Director with 30+ years of
							experience in teaching, financial management, and
							entrepreneurship.
						</div>
						<b className="product-manager">Founder and Managing Director</b>
						<p></p>
						<div className="nicole-fisher">Dr Dorothy E. Esau</div>
					</div>
					<div className="userpic">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/dorothy.jpg"
						/>
					</div>
				</div>
				<div className="member-11">
					<div className="name1">
						<div className="designer-who-makes1">
							Grace Bruintjies, our Chairperson, holds a prospective Ph.D. and
							is a co-researcher on the SU-cohort Community Engaged Teaching and
							Learning NRF project.
						</div>
						<b className="product-manager1">Chairperson</b>
						<div className="nicole-fisher1">Grace Bruintjies</div>
					</div>
					<div className="userpic">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/grace.jpg"
						/>
					</div>
				</div>
				<div className="member-12">
					<div className="name2">
						<div className="designer-who-makes2">
							{
								"Cherith is a teacher with a Bachelor's in Education from the Western Cape Education Department. She is currently pursuing her B.Ed Honours degree in Language & Literacy at the University of the Western Cape and is committed to being a lifelong learner"
							}
						</div>
						<b className="product-manager2">Treasurer</b>
						<div className="nicole-fisher2">Cherith Wareley</div>
					</div>
					<div className="userpic">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/cherith.jpg"
						/>
					</div>
				</div>
				<div className="member-13">
					<div className="name2">
						<div className="designer-who-makes2">
							holds a BA (Human Ecology) degree from the University of the
							Western Cape, and Certificates in NPO Management and Business
							Management Coaching from the University of Stellenbosch Business
							School.
						</div>
						<b className="product-manager2">Secretary</b>
						<div className="nicole-fisher3">Faith Brown</div>
					</div>
					<div className="userpic">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/faith.jpg"
						/>
					</div>
				</div>
				<div className="member-14">
					<div className="name1">
						<div className="designer-who-makes1">
							{
								"Jade (Damonse) Glenn has an Honours in Educational Psychology and a Bachelor of Education degree in English and Life Orientation from UWC. "
							}
						</div>
						<b className="product-manager4">Volunteer</b>
						<div className="nicole-fisher4">Jade Damonse</div>
					</div>
					<div className="userpic">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/jade.jpg"
						/>
					</div>
				</div>
				<div className="member-15">
					<div className="name5">
						<div className="designer-who-makes5">
							He has over 20 years of sales and marketing experience in the
							corporate sector and recently completed a Master's degree in
							Entrepreneurial Studies at CPUT with a focus on Social
							Entrepreneurship in Youth Development.
						</div>
						<b className="product-manager">
							Marketing and Public Relations expert
						</b>
						<div className="nicole-fisher5">Henry Esau</div>
					</div>
					<div className="userpic">
						<img
							className="mask-icon"
							alt=""
							src="/api/images/ourPeople/henry.jpg"
						/>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default OurPeople;
