import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span></span>
				</div>

				<div>
					<Link href="" className="me-4 text-reset">
						<MDBIcon color="secondary" fab icon="facebook-f" />
					</Link>
					<Link href="" className="me-4 text-reset">
						<MDBIcon color="secondary" fab icon="twitter" />
					</Link>
					<Link href="" className="me-4 text-reset">
						<MDBIcon color="secondary" fab icon="google" />
					</Link>
					<Link href="" className="me-4 text-reset">
						<MDBIcon color="secondary" fab icon="instagram" />
					</Link>
					<Link href="" className="me-4 text-reset">
						<MDBIcon color="secondary" fab icon="linkedin" />
					</Link>
					<Link href="" className="me-4 text-reset">
						<MDBIcon color="secondary" fab icon="github" />
					</Link>
				</div>
			</section>

			<section className="">
				<MDBContainer className="text-center text-md-start mt-5">
					<MDBRow className="mt-3">
						<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<MDBIcon color="secondary" icon="gem" className="me-3" />
								Edufocus
							</h6>
							<p>
								EduFocus Projects NPO provides training, coaching and mentoring
								interventions to the education sector.
							</p>
						</MDBCol>

						<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Company</h6>
							<p>
								<Link href="#!" className="text-reset">
									Terms of service
								</Link>
							</p>
							<p>
								<Link href="#!" className="text-reset">
									Privacy Policy
								</Link>
							</p>
							<p>
								<Link href="#!" className="text-reset">
									OUR PROGRAMMES
								</Link>
							</p>
							<p>
								<Link href="#!" className="text-reset">
									Support
								</Link>
							</p>
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">About</h6>
							<p>
								<a href="#!" className="text-reset">
									Team
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Volunteers
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Our Photos
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									About Us
								</a>
							</p>
						</MDBCol>

						<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p>
								<MDBIcon color="secondary" icon="home" className="me-2" />

								<a
									href="https://www.facebook.com/groups/www.edufocusprojects.co.za"
									className="text-reset"
								>
									<MDBIcon fab icon="facebook" />
									Facebook
								</a>
							</p>
							<p>
								<MDBIcon color="secondary" icon="envelope" className="me-3" />
								info@edufocusprojects.org.za
							</p>
							<p>
								<MDBIcon color="secondary" icon="phone" className="me-3" />
								WhatsApp: +27 83 441 9423
							</p>
							<p>
								<MDBIcon color="secondary" icon="print" className="me-3" /> + 01
								234 567 89
							</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>

			<div
				className="text-center p-4"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
			>
				© 2023 Copyright: Edufocus
			</div>
		</MDBFooter>
	);
}
