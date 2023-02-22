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
					<img
							className="contactintroicon contactintrogriditem"
							src="/contact/facebook.svg"
							alt="facebook icon"
					/>
					<img
							className="contactintroicon contactintrogriditem"
							src="/contact/youtube.svg"
							alt="youtube icon"
					/>
					<img
							className="contactintroicon contactintrogriditem"
							src="/contact/dimensions8.png"
							alt="youtube icon"
					/>
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