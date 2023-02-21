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
			<p className="contactintroblurb">
				Click here to see what we've been up to <br /> and join our social media
				community!
			</p>
		</section>
		<section className="contactsocialmedia">
		</section>
	</section>
);




export default Contact;