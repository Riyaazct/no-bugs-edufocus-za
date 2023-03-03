import React, { Fragment, useState } from "react";
import "./OurPhotos.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import NavbarBlue from "../components/Navbar/NavbarBlue";
import Footer from "../components/Footer";

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
	const [currentIndex, setCurrentIndex] = useState(0);
	const [event, setEvent] = useState(0);

	const nextImage = () => {
		const isLastImage = currentIndex === slide[event].images.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const prevImage = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage
			? slide[event].images.length - 1
			: currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const handleClick = (e) => {
		const newValue = e.target.value;
		setEvent(newValue);
	};

	return (
		<Fragment>
			<NavbarBlue />
			<div className="photosContainer">
				<h1>Our Photos</h1>
				<hr />
				<div className="carouselContainer">
					<div className="carouselCard">
						<div className="carouselTextContainer">
							<h3>{slide[event].event}</h3>
							<div className="carouselText">
								<p>{slide[event].date}</p>
								<p>{slide[event].location}</p>
							</div>
						</div>

						<div className="imageContainer">
							<img src={slide[event].images[currentIndex]} alt="" />
							<div className="left">
								<IoIosArrowBack size={40} color="white" onClick={prevImage} />
							</div>
							<div className="right">
								<IoIosArrowForward
									size={40}
									color="white"
									onClick={nextImage}
								/>
							</div>
						</div>
					</div>
					<form className="formContainer">
						<label className="h2" htmlFor="otherEvents">
							See other events
						</label>
						<select
							className="form-select form-select-lg mb-3"
							onClick={(e) => handleClick(e)}
							name="otherEvents"
							id="otherEvents"
						>
							{" "}
							<option selected value={event}>
								View other events
							</option>
							{slide.map((item, index) => (
								<option key={index} value={index}>
									{item.event}
								</option>
							))}
						</select>
					</form>
					<div className="carouselThumbnails">
						<img src={slide[2].images[12]} alt="" />
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</Fragment>
	);
};

export default OurPhotos;
