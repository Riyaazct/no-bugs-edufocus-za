import React,{ useState } from "react";
import "./Mission-Vision.css";

const slide = [
	{
		title: "OUR VISION",
		text: ['To become the leading service provider of intervention initiatives for teachers, in order to fulfill Goal 4 of the SDGs: "Ensuring inclusive and equitable quality education and promote lifelong learning opportunities for all."'],
		image: "images/vision.jpg",
	},
	{
		title: "OUR MISSION",
		text: ["We empower and motivate teachers in South African schools by facilitating coaching, training, mentoring and motivational initiatives, special events and other research-based activities to amplify the teacher’s voice through reflexive practices."],
		image: "images/mission.jpg",
	},
	{
		title: "OUR OBJECTIVES",
		text: [
			"To provide support, coaching and mentoring to teachers in the eight dimensions of holistic wellbeing i.e. (physical, psychological, social, financial, emotional, spiritual, vocational and environmental) in order to serve public school learners from previously disadvantaged communities.",
			"To empower teachers with coping mechanisms and strategies to manage and refer learners from previous disadvantaged communities affected by social ills, to the relevant support structures.",
			"To partner with the relevant stakeholders in order to equip teachers to become change agents in the schooling communities and communities at large.",
			"To network and partner with local community-based organisations (CBOs) in order to identify and understand the unique context and needs of the community where the schools are located.",
			"To assist teachers to identify the enabling and inhibiting factors which are unique to learners from previous disadvantaged communities in order to effectively implement successful teaching and learning in the schooling community.",
			"To organise programmes for teachers exposing them to learn and practice new skills.",
			"To contribute to the research community and to make recommendations to policy makers and education authorities about the implementation of a holistic mentorship programme in order to benefit stakeholders in previous disadvantaged communities.",
		],
		image: "images/objective.jpg",
	},
];

const Mission = () => {
    const [isActive, setIsActive] = useState(false);

    // FUNCTION TO HANDLE BUTTON CLICKS
    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
			// MAIN CONTAINER
			<div className="visionCardContainer">
				{/* SLIDES ARRAY DATA MAPPED OUT TO CREATE CARD */}
				{slide.map(({ title, text, image }, index) => (
					<div className="visionCard" key={index}>
						{/* TITLE */}
						<h1 className="visionCardTitle">{title}</h1>
						<hr color="#1e0f9e" size="3" className="visionHr" />
						<div className="visionCardContent">
							{/* IMAGE */}
							<div className="visionCardImage">
								<img src={image} alt="/" />
							</div>
							{/* UNORDERED LIST FOR TEXT CONTENT */}
							<ul>
								{/* CHECK IF BUTTON WAS CLICKED AND RETURN ALL TEXT DATA AND IF NOT JUST
                            RETURN THE FIRST BULLET POINT FROM THE LAST ITEM IN SLIDE FOLDER */}
								{isActive ? (
									text.map((item, itemIndex) => (
										<li // SET CLASS TO CSS SELECTOR THAT ADDS A BOTTOM BORDER TO EACH li for objectives
											className={
												index === slide.length - 1
													? "bottomBorderLi card-large"
													: null
											}
											key={itemIndex}
										>
											{item}
										</li>
									))
								) : (
									<li>{text[0]}</li>
								)}
								{/* Check if it's the last item in the slide array and add a button to read more */}
								{index === slide.length - 1 && (
									<button className="readMoreButton" onClick={handleClick}>
										{isActive ? "See less.." : "See more..."}
									</button>
								)}
							</ul>
						</div>
					</div>
				))}
			</div>
		);
};

export default Mission;

// // CONTAINER
//         <div className="visionMainContainer">

// 			{/* TITLE */}
// 			<h1 className="visionH1">OUR VISION</h1>
// 			<hr className="visionHr" color="1e0f9e" size="5" />

// 			{/* CONTAINER FOR IMAGE AND TEXT */}
//             <div className="visionContentContainer">

//                 {/* IMAGE */}
// 				<div className="visionImage">
// 					<img src="/images/vision.jpg" alt=".." />
//                 {/* OVERLAY */}
// 				<div className="visionOverlay"></div>
//                 </div>
//                 {/* TEXT / PARAGRAPH */}
// 				<div className="visionParagraph">
// 					<p>
// 						To become the leading service provider of intervention initiatives
// 						for teachers, in order to fulfill Goal 4 of the SDGs: "Ensuring
// 						inclusive and equitable quality education and promote lifelong
// 						learning opportunities for all".
// 					</p>
// 				</div>
// 			</div>
// 		</div>
