import React from "react";
import "./OurPhotos.css";

const slide = [
	{
		event: "EduFocus Projects Launch",
		date: "12 March 2022",
		location: "CPUT Hotel School, Granger Bay",
		images: [
			"/images/gallery/01 launch 2022/01.jpg",
			"/images/gallery/01 launch 2022/02.jpg",
			"/images/gallery/01 launch 2022/03.jpg",
			"/images/gallery/01 launch 2022/04.jpg",
			"/images/gallery/01 launch 2022/05.jpg",
			"/images/gallery/01 launch 2022/06.jpg",
			"/images/gallery/01 launch 2022/07.jpg",
			"/images/gallery/01 launch 2022/08.jpg",
			"/images/gallery/01 launch 2022/09.jpg",
			"/images/gallery/01 launch 2022/010.jpg",
			"/images/gallery/01 launch 2022/011.jpg",
			"/images/gallery/01 launch 2022/012.jpg",
			"/images/gallery/01 launch 2022/013.jpg",
			"/images/gallery/01 launch 2022/014.jpg",
			"/images/gallery/01 launch 2022/015.jpg",
		],
	},
	{
		event: "Teachers' Tea Time with a Difference",
		date: "27 August 2022",
		location: "Ottery Youth Centre",
		images: [
			"/images/gallery/02 teachers' tea time with a difference 2022/01.jpg",
			"/images/gallery/02 teachers' tea time with a difference 2022/02.jpg",
			"/images/gallery/02 teachers' tea time with a difference 2022/03.jpg",
			"/images/gallery/02 teachers' tea time with a difference 2022/04.jpg",
			"/images/gallery/02 teachers' tea time with a difference 2022/05.jpg",
			"/images/gallery/02 teachers' tea time with a difference 2022/06.jpg",
			"/images/gallery/02 teachers' tea time with a difference 2022/07.jpg",
		],
	},
	{
		event: "EduFocus Projects Inaugural Gala & Awards Event",
		date: "05 November 2022",
		location: "Krystal Beach Hotel",
		images: [
			"/images/gallery/03 inaugural  gala & awards event 2022/01.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/02.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/03.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/04.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/05.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/06.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/07.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/08.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/09.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/010.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/011.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/012.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/013.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/014.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/015.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/016.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/017.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/018.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/019.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/020.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/021.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/022.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/023.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/024.jpg",
			"/images/gallery/03 inaugural  gala & awards event 2022/025.jpg",
		],
	},
];

const OurPhotos = () => {
	return (
		<div className="photosContainer">
			<h1>Our Photos</h1>
		<div className="carouselContainer">
			<div className="carouselCard">
				<h4>{slide[2].event}</h4>
				<p>{slide[2].date}</p>
				<p>{slide[2].location}</p>
				<img src={slide[2].images[12]} alt="" />
			</div>
		</div>
		</div>
	);
};

export default OurPhotos;
