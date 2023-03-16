import "./Contact.css";
import Header from "../components/Navbar/Header";
import { useState } from "react";
import axios from "axios";
import NewFooter from "../components/NewFooter";

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

   const handleSubmit = async(event) => {
      	event.preventDefault();
		const enquiryBody = { ...contactmsg };
		console.log("Sending data to server");
		try {
			const response = await axios.post("/api/contact",
			JSON.stringify( enquiryBody ),
			{
				headers: { "Content-Type": "application/json" },
				withCredentials: true,
			}).then((response)=>{
				console.log({ response });
				console.log(response.data.message);
				if (response.data.message === "success"){
					alert("Your Message has been sent to Edufocus.");
					// const data = response.data;
					console.log("SUCCESS!");
					setContactmsg({
						fullname: "",
						email: "",
						messagetype: "",
						message: "",
					});
				}else if(response.data.message === "fail"){
					alert("Message failed to send.Please Email info@edufocusprojects.org.za.");
				}
			});
		} catch (err) {
		console.log({ error });
			if (!err?.response) {
			console.log("No Server Response");
			}
		}
	};

	return (
		<main role="main">
		<Header />
		<section className="contactsection">
			<section className="contactintro">
				<img
					className="contactintroimage"
					src="/api/images/contact/greenblob.png"
					alt="green blob"
				/>
				<div className="contactcentered">
					<h2 className="contactintroheading">Get in touch with us.</h2>
					<p className="contactintroblurb">
						Click here to see what we've been up to and join our social media
						community!
					</p>
				</div>
			</section>
			<section className="contactsocialcontainer">

					<section className="contactsocialmedia">
						<a
							href="https://www.youtube.com/@EduFocusProjects_NPO"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="contactintroicon contactintrogriditem"
								src="api/images/contact/youtube.svg"
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
								src="api/images/contact/facebook.svg"
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
								src="api/images/contact/dimensions8.png"
								alt="8 dimensions of healing icon"
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
			</section>
			<section className="contactformsection">
				<h2 className="contactformheading">Have a question? Want to donate?</h2>
				<form
					className="contactform"
					onSubmit={handleSubmit}
					action="contact"
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
								minLength="3"
								maxLength="40"
								required
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
								required
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
							<textarea rows = "5" cols = "60"
								className="contactmessagebox"
								id="inline-message"
								type="text"
								name="message"
								minLength="3"
								maxLength="100"
								required
								value={contactmsg.message}
								onChange={handleMessageChange}
							>Enter Query Here
							</textarea>
						</div>
					</div>
					<div className="formitem">
						<div>
							<button className="buttonstyling" type="submit">
								Send Message
							</button>
							<p className="formconfirmation"> Please wait for confirmation popup</p>
						</div>
					</div>
				</form>
			</section>
		</section>
		<NewFooter />
		</main>
	);

};

export default Contact;