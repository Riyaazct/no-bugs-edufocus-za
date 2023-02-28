import "./Contact.css";
import "./../index.css";
import React, { useState } from "react";

const Contact = () => {

	const options = [
		{ label: "Query", value: "query" },
		{ label: "Concern", value: "concern" },
		{ label: "Training Feedback", value: "feedback" },
		{ label: "Donation", value: "donation" },
	];

 	const [contactmsg, setContactmsg] = useState({
		fullname: "",
		email: "",
		messagetype: "",
		message: "",
   });

 	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [messagetype, setMessagetype] = useState("query");
	const [message, setMessage] = useState("");

	function handleFullnameChange(event) {
		contactmsg.fullname = event.target.value;
		setContactmsg({ ...contactmsg });
	}

	function handleEmailChange(event) {
		contactmsg.email = event.target.value;
		setContactmsg({ ...contactmsg });
	}

	function handleMessagetypeChange(event) {
		contactmsg.messagetype = event.target.value;
		setContactmsg({ ...contactmsg });
	}

	function handleMessageChange(event) {
		contactmsg.message = event.target.value;
		setContactmsg({ ...contactmsg });
	}

	 function handleSubmit(event) {
			event.preventDefault();

			console.log("Sending data to server");

			fetch("https://httpstat.us/200", {
				method: "POST",
				body: JSON.stringify({
					username: username,
					email: email,
					password: password,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
		}


	return (
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
				<h2 className="contactintroheading">Get in touch with us.</h2>
				<div className="contactsocialcontainer">
					<p className="contactintroblurb">
						Click here to see what we've been up to and join our social media
						community!{" "}
					</p>
					<section className="contactsocialmedia">
						<a
							href="https://www.youtube.com/@EduFocusProjects_NPO"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="contactintroicon contactintrogriditem"
								src="/contact/youtube.svg"
								alt="youtube icon"
							/>
						</a>
						<a
							href="https://www.facebook.com/groups/www.edufocusprojects.co.za"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="contactintroicon contactintrogriditem"
								src="/contact/facebook.svg"
								alt="facebook icon"
							/>
						</a>
						<a
							href="https://acrobat.adobe.com/link/review?uri=urn%3Aaaid%3Ascds%3AUS%3A1e5659ff-bbfc-3803-b8b5-e60db9e520bb"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="contactintroicon contactintrogriditem"
								src="/contact/dimensions8.png"
								alt="8 dimenions of healing icon"
							/>
						</a>
						<p className="contactintroicondesc contactintrogriditem">
							Please click here to watch all our videos
						</p>
						<p className="contactintroicondesc contactintrogriditem"></p>
						<p className="contactintroicondesc contactintrogriditem">
							Click here for our Eight Dimensions of Wellness Programme Overview
						</p>
					</section>
				</div>
			</section>
			<section className="contactformsection">
				<h2 className="contactformheading">Have a question? Want to donate?</h2>
				<form
					className="contactform"
					onSubmit={handleSubmit}
					method="POST"
				>
					<div className="formitem">
						<div>
							<label htmlFor="inline-full-name">Full Name</label>
						</div>
						<div>
							<input
								id="inline-full-name"
								type="text"
								name="fullname"
								placeholder="Enter Full Name"
								value={contactmsg.fullname}
								onChange={handleFullnameChange}
							/>
						</div>
					</div>
					<div className="formitem">
						<div>
							<label htmlFor="inline-email">Email</label>
						</div>
						<div>
							<input
								id="inline-email"
								type="email"
								name="email"
								placeholder="Enter Email Address"
								value={contactmsg.email}
								onChange={handleEmailChange}
							/>
						</div>
					</div>
					<div className="formitem">
						<div>
							<label htmlFor="inline-query">Message Type</label>
						</div>
						<select
							value={contactmsg.messagetype}
							onChange={handleMessagetypeChange}
						>
							{options.map((option, inx) => (
								<option key={inx} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
					<div className="formitem">
						<div>
							<label htmlFor="inline-customer-message">Message Details</label>
						</div>
						<div>
							<input
								className="contactmessagebox"
								id="inline-message"
								type="text"
								name="message"
								placeholder="Enter Query Here"
								value={contactmsg.message}
								onChange={handleMessageChange}
							/>
						</div>
					</div>
					<div className="formitem">
						<div>
							<button className="fakebutton" type="submit">
								Send Message
							</button>
						</div>
					</div>
				</form>
			</section>
		</section>
	);

};




export default Contact;