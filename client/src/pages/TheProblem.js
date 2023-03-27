import React from "react";
import "./TheProblem.css";

const TheProblem = () => {
	return (
		<div className="mainContainer" role={"main"}>
			<div className="theProblemTitle">
			<h1>THE PROBLEM</h1>
			</div>
			<div className="theProblemContent">
				<div className="backgroundDiv"></div>

					<img src="api/images/theproblem.jpg" alt="" />

				<div className="theProblemTextContainer">
					<p>
						Teaching is one of the most rewarding, yet highly stressful and
						emotionally demanding professions in South Africa. Based on valuable
						insights gained from novice teachers about their perceptions of
						support to enhance their capabilities, this project highlights a
						mentoring model of support to enhance teacher wellbeing as a
						significant and necessary component towards holistic teacher
						wellbeing.</p>
						<p>
						Despite the limited scientific data on the prevalence of
						stress-related conditions in teaching, evidence does exist to indicate
						that South African teachers display high levels of psychological
						distress, burn-out and low morale. This is particularly the case in
						schools where teachers face immense challenges like
						learner-on-teacher violence; ill-disciplined learners; over-crowded,
						under-resourced classrooms and unrealistic workloads.</p>
						<p>Following the
						implementation of our programmes, we prepare Monitoring and
						Evaluation Reports which provide recommendations that the Education
						Department can implement in all public schools in their
						constituency.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TheProblem;
