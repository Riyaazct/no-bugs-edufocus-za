import React from "react";
import "./NewFooter.css";
import { faFacebook, faWhatsapp, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewFooter = () => {
	return (
		<footer>
			<div className="row primary">
				<div className="column about">
					<h3>EduFocus Projects</h3>
					<p>
						EduFocus Projects NPO provides training, coaching and mentoring
						interventions to the education sector.
					</p>
					<div className="social">
						<a
							href="https://web.facebook.com/groups/www.edufocusprojects.co.za?_rdc=1&_rdr"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faFacebook} className="icon" />
						</a>
						<a
							href="https://www.youtube.com/channel/UCrp7fGUvqgJxcQFyFyeISZQ/videos?app=desktop"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faYoutubeSquare} className="icon" />
						</a>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="icon"
							title="info@edufocusprojects.org.za"
						/>
						<a href="https://wa.me/27716247778"
							className="icon">
							<FontAwesomeIcon
								icon={faWhatsapp} />
						</a>
						<FontAwesomeIcon
							icon={faPhone}
							className="icon"
							title="+27 83 441 9423"
						/>

					</div>
				</div>
				<div className="column links">
					<h3>Company</h3>
					<ul>
						<li>
							<a href="#term-of-service">Term of service</a>
						</li>
						<li>
							<a href="#cookies-policy">Cookies Policy</a>
						</li>
						<li>
							<a href="#privacy-policy">Privacy Policy</a>
						</li>
						<li>
							<a href='/ourprogrammes'>OUR PROGRAMMES</a>
						</li>
					</ul>
				</div>
				<div className="column links">
					<h3>About</h3>
					<ul>
						<li>
							<a href="/Ourpeople/this/a/team">Team</a>
						</li>
						<li>
							<a href="/photos">Our Photos</a>
						</li>
						<li>
							<a href="/about">About Us</a>
						</li>
						<li>
							<a href="/contact">Support</a>
						</li>
					</ul>
				</div>
				<div className="column subscribe">
					<h3>Newsletter</h3>
					<div>
						<input type="email" placeholder="Your email here" />
						<button>SUBMIT</button>
					</div>
				</div>
			</div>
			<div className="row copyright">
				<div className="footer-menu">
					<a href="/">Home</a>
					<a href="/about">About Us</a>
					<a href="/contact">Contact Us</a>
					<a href="">Social</a>
				</div>
				<p>© 2023 Copyright: Edufocus</p>
			</div>
		</footer>
	);
};



export default NewFooter;