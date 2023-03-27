/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./OurPhotos.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import NewFooter from "../components/NewFooter";

import Header from "../components/Navbar/Header";




const OurPhotos = () => {
	const [slide, setSlide] = useState([]);
	//state for image carousel
	const [currentIndex, setCurrentIndex] = useState(0);
	const [event, setEvent] = useState(0);

	// state for modal
	const [selectedImage, setSelectedImage] = useState(null);
	const [modalOpen, setModalopen] = useState(false);

	const [loading, setLoading] = useState(true);

	// UseEffect to get the data from the API
	useEffect(() => {
		axios.get("/api/photos")
			.then((res) => {
				setSlide(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	console.log(slide);

	// function to go to next image
	const nextImage = () => {
		const isLastImage = currentIndex === slide[event].images.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	// function to go to previous image
	const prevImage = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage
			? slide[event].images.length - 1
			: currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	// CLICK EVENT HANDLER FOR SELECT ELEMENT
	const handleClick = (e) => {
		const newValue = e.target.value;
		setEvent(newValue);
	};
// FUNCTION TO RENDER JSX FOR THE IMAGE MODAL
	const ImageModal = ({ imageUrl, closeModal }) => {
		return (
			<div className="imageModal">
				<img src={imageUrl} alt="" onClick={closeModal} />
			</div>
		);
	};

	return (
		<Fragment>
			{loading ? (
				<h3>Loading...</h3>
			) : (
				<>
					{modalOpen ? (
						<ImageModal
						imageUrl={selectedImage}
						closeModal={() => setModalopen(false)}
						/>
						) : (
							<div className="photosContainer">
							<Header />
							<div className="titleDiv">
								<h1>Our Photos</h1>
							</div>
							<div className="carouselContainer">
								<div className="carouselCard">
									<div className="carouselTextContainer">
										<h3>{slide[event].event}</h3>
										<div className="carouselText">
											<p>{slide[event].location}</p>
											<p>{slide[event].date}</p>
										</div>
									</div>

									<div className="imageContainer">
										<img
											src={slide[event].images[currentIndex]}
											alt=""
											onClick={() => {
												setModalopen(true);
												setSelectedImage(slide[event].images[currentIndex]);
											}}
										/>
										<div className="left">
											<IoIosArrowBack
												size={40}
												color="white"
												onClick={prevImage}
											/>
										</div>
										<div className="right">
											<IoIosArrowForward
												size={40}
												color="white"
												onClick={nextImage}
											/>
										</div>
									</div>
									<form className="formContainer">
										<label className="h2 mt-2" htmlFor="otherEvents">
											See other events
										</label>
										<select
											className="form-select form-select-lg mb-3"
											onClick={(e) => handleClick(e)}
											name="otherEvents"
											id="otherEvents"
										>
											{slide.map((item, index) => (
												<option key={index} value={index}>
													{item.event}
												</option>
											))}
										</select>
									</form>
								</div>
							</div>
							<NewFooter />
						</div>
					)}
				</>
			)}
		</Fragment>
	);
};

export default OurPhotos;
