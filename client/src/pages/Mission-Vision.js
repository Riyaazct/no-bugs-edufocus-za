import React from "react";
import "./Mission-Vision.css";

const Mission = () => {
	return (
		<div className="container">
			<h1 className="VisionH1">OUR VISION</h1>
			<hr color="1e0f9e" size="5" />
			<div className="visionImage">
				<img src="/images/vision.jpg" alt="" />
			</div>
			<div className="visionParagraph">
				<p>
					To become the leading service provider of intervention initiatives for
					teachers, in order to fulfill Goal 4 of the SDGs: "Ensuring inclusive
					and equitable quality education and promote lifelong learning
					opportunities for all".
				</p>
			</div>
		</div>
	);
};

export default Mission;
