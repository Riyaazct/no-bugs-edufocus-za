import "./OurProgrammes.css";
import NavbarBlue from "../components/Navbar/NavbarBlue";

const OurProgrammes= () => {


	return (
		<main role="main">
		<NavbarBlue />
		<section className="ourprogrammessection">
			<section className="contactintro">
				<div className>
					<h2 className="contactintroheading">Our Programmes.</h2>
					<p className="contactintroblurb"> Our programmes span across two geographical areas, namely:</p>
                    <div>
                     <span>A. Urban Educator Development</span>
                     <span>B. Rural Educator Development</span>
                    </div>
                    <p className="contactintroblurb"> Our focus areas are:</p>
                    <ul>
                        <li>Life Skills Training</li>
                        <li>Communications Skills Training</li>
                        <li>Classroom Management Skills Training</li>
                        <li>Training in Enhancing Holistic Teacher Wellbeing</li>
                        <li>Mentor & Mentee Training</li>
                    </ul>
                    <p className="contactintroblurb">
                        In 2022, we successfully conducted an evidence-based, eight-week mentoring programme for novice teachers to enhance their holistic wellbeing in certain WCED schools. The programme is aimed at supporting their smooth transition from the university into the teaching profession and beyond. This will not only equip them with the much-needed and essential soft skills to master their classroom and pedagogical interactions, but it will also empower them to take ownership of their own wellbeing by providing them with the necessary tools to lead balanced personal lives.  </p>
                    <p className="contactintroblurb">
                        We participate in academic and research-related activities to stay abreast of the latest developments in the education sector. This allows us to remain relevant, provide sound advice and support and the most up-to-date support and mentorship intervention strategies suitable to the contextual realities of our South African schools.
                    </p>
				</div>
			</section>
		</section>
		</main>
	);

};

export default OurProgrammes;