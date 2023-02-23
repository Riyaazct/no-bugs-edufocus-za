import "./Contact.css";
import "./../index.css";

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
			<h2 className="contactformheading">Have a question?</h2>
			<form className="contactform">
				<div className="formitem">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Full Name
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="text"
							value="Jane Doe"
						/>
					</div>
				</div>
				<div className="formitem">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-email"
						>
							Email
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-password"
							type="email"
							placeholder=""
						/>
					</div>
				</div>
				<div className="formitem">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-query"
						>
							Message Type
						</label>
					</div>
					<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
						<option>Query</option>
						<option>Concern</option>
						<option>Training Feedback</option>
					</select>
				</div>
				<div className="formitem">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-customer-message"
						>
							Message Details
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-customer-message"
							type="text"
							value="Jane Doe"
						/>
					</div>
				</div>

				<div className="formitem formnewsletter">
					<label className="md:w-2/3 block text-gray-500 font-bold">
						<span className="text-sm">Send me your newsletter!</span>
					</label>
					<input className="mr-2 leading-tight" type="checkbox" />
				</div>
				<div className="formitem">
					<div className="md:w-1/3"></div>
					<div className="md:w-2/3">
						<button className="fakebutton" type="button">
							Send Message
						</button>
					</div>
				</div>
			</form>
			{/* <form className="w-full max-w-sm">
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Full Name
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="text"
							value="Jane Doe"
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-email"
						>
							Email
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-password"
							type="email"
							placeholder=""
						/>
					</div>
				</div>
				<div className="inline-block relative w-64">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-query"
						>
							Message Type
						</label>
					</div>
					<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
						<option>Query</option>
						<option>Concern</option>
						<option>Training Feedback</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-customer-message"
						>
							Message Details
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-customer-message"
							type="text"
							value="Jane Doe"
						/>
					</div>
				</div>

				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3"></div>
					<label className="md:w-2/3 block text-gray-500 font-bold">
						<input className="mr-2 leading-tight" type="checkbox" />
						<span className="text-sm">Send me your newsletter!</span>
					</label>
				</div>
				<div className="md:flex md:items-center">
					<div className="md:w-1/3"></div>
					<div className="md:w-2/3">
						<button
							className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							type="button"
						>
							Send Message
						</button>
					</div>
				</div>
			</form> */}
		</section>
	</section>
);




export default Contact;