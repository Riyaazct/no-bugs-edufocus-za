import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FileUploadPage.css";

const FileUploadPage = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [fileUploadProgress, setFileUploadProgress] = useState(0);
	const [alertMessage, setAlertMessage] = useState("");

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

	const handleFileSelect = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleFileUpload = () => {
		if (selectedFile) {
			const formData = new FormData();
			formData.append("file", selectedFile);

			axios
				.post("/api/training_material", formData, {
					onUploadProgress: (progressEvent) => {
						setFileUploadProgress(
							Math.round((progressEvent.loaded / progressEvent.total) * 100)
						);
					},
				})
				.then(() => {
					setAlertMessage("File uploaded successfully!");
					setSelectedFile(null);
				})
				.catch(() => {
					setAlertMessage("An error occurred while uploading the file.");
				});
		}
	};

	return (
		<div className="file-upload-page">
			<div className="file-upload-container">
				<h1>Upload a File</h1>
				<input type="file" onChange={handleFileSelect} />
				<button onClick={handleFileUpload}>Upload</button>
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
