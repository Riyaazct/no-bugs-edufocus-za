import "./Contact.css";

const Contact = () => (
	<section className="contactsection">
		<section className="fakenav">
			<h2 className="navsiteheading">Edufocus</h2>
			<div className="fakenavlist">
				<li> Home </li>
				<li> About </li>
				<li> Programmes </li>
				<li> Support </li>
				<li> Gallery </li>
				<li> Contact </li>
				<li> Register </li>
				<button className="fakebutton"> Login </button>
			</div>
		</section>
		<section className="contactintro">
			<img
				className="contactintroimage"
				src="/contact/greenblob.png"
				alt="green blob"
			/>
			<h2 className="contactintroheading">Get in touch with us</h2>
			<div className="contactsocialcontainer">
				<p className="contactintroblurb">
				Click here to see what we've been up to <br /> and join our social media community! </p>
				<section className="contactsocialmedia">
					<a href="https://www.facebook.com/groups/www.edufocusprojects.co.za" target="_blank" rel="noreferrer">
						<img
								className="contactintroicon contactintrogriditem"
								src="/contact/facebook.svg"
								alt="facebook icon"
						/>
					</a>
					<a href="https://www.youtube.com/@EduFocusProjects_NPO" target="_blank" rel="noreferrer">
						<img
								className="contactintroicon contactintrogriditem"
								src="/contact/youtube.svg"
								alt="youtube icon"
						/>
					</a>
					<a href="https://acrobat.adobe.com/link/review?uri=urn%3Aaaid%3Ascds%3AUS%3A1e5659ff-bbfc-3803-b8b5-e60db9e520bb" target="_blank" rel="noreferrer">
						<img
								className="contactintroicon contactintrogriditem"
								src="/contact/dimensions8.png"
								alt="youtube icon"
						/>
					</a>
					<p className="contactintroicondesc contactintrogriditem">Please click here 
						to watch all our videos</p>
					<p className="contactintroicondesc contactintrogriditem"></p>
					<p className="contactintroicondesc contactintrogriditem">Click here for our Eight Dimensions of Wellness Programme Overview</p>
				</section>
			</div>
		</section>
	</section>
);




export default Contact;