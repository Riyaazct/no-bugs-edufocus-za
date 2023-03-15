import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FileUploadPage.css";

const FileUploadPage = ({ getMaterials }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [fileUploadProgress, setFileUploadProgress] = useState(0);
	const [alertMessage, setAlertMessage] = useState("");

	// useEffect to initiate timeout for the progress bar
	useEffect(() => {
		let progressTimeout;

		if (fileUploadProgress === 100) {
			progressTimeout = setTimeout(() => {
				setFileUploadProgress(0);
			}, 10000);
		}

		return () => {
			clearTimeout(progressTimeout);
		};
	}, [fileUploadProgress]);

	// UseEfect to initiate timeout for the alert message.
	useEffect(() => {
		let alertTimeout;

		if (alertMessage) {
			alertTimeout = setTimeout(() => {
				setAlertMessage("");
			}, 10000);
		}

		return () => {
			clearTimeout(alertTimeout);
		};
	}, [alertMessage]);

	// Function to store the selected file to state.
	const handleFileSelect = (event) => {
		setSelectedFile(event.target.files[0]);
	};
	// set a variable with current date to use for date input element.
	const today = new Date().toISOString().substr(0, 10);

// Function to handle the file upload
	const handleFileUpload = () => {
		if (selectedFile) {
			const formData = new FormData();
			formData.append("file", selectedFile);
			formData.append("title", document.getElementById("title").value);
			formData.append("description", document.getElementById("description").value);
			formData.append("date", document.getElementById("date").value);

			axios
				.post("/api/training_material", formData, {
					onUploadProgress: (progressEvent) => {
						setFileUploadProgress(
							Math.round((progressEvent.loaded / progressEvent.total) * 100)
						);
					},
				})
				.then(() => {
					setAlertMessage("File uploaded successfully");
					setSelectedFile(null);
					getMaterials(); // update page to reflect added material
				})
				.catch(() => {
					setAlertMessage("An error occured while uploading the file");
				});
		}
	};



	return (
		<div className="file-upload-page">
			<div className="file-upload-container">

					<h5>Upload Training Material</h5>
					<label htmlFor="title">Title:</label>
					<input className="titleInput" type="text" name="title" id="title" />
					<label htmlFor="description">Description:</label>
					<textarea
						className="textArea"
						name="description"
						id="description"
						cols="30"
						rows="5"
					></textarea>
					<label htmlFor="date">Date:</label>
					<input className="dateInput" type="date" name="" id="date" min={today} defaultValue={today} />

					<input
						className="fileInput"
						type="file"
						onChange={handleFileSelect}
					/>


				<button className="btn btn-primary btn-sm" onClick={handleFileUpload}>
					Upload
				</button>
				{fileUploadProgress > 0 && (
					<div className="progress-bar-container">
						<div
							className="progress-bar"
							style={{ width: `${fileUploadProgress}%` }}
						></div>
					</div>
				)}
				{alertMessage && <div className="alert">{alertMessage}</div>}
			</div>
		</div>
	);
};

export default FileUploadPage;
