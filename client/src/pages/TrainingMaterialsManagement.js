import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./TrainingMaterialsManagement.css";
import FileUploadPage from "./FileUploadPage";

const TrainingMaterialsManagement = () => {
	const [materials, setMaterials] = useState([]);
	const [addMaterialActive, setAddMaterialActive] = useState(false);
	const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

	// set materials state to material data from api on page load.
	useEffect(() => {
		getMaterials();
	}, []);

	// function to get materials from api
	const getMaterials = async () => {
		try {
			const response = await axios.get("/api/training_material");
			setMaterials(response.data);
		} catch (error) {
			console.error(error);
		}
	};


	// function to delete training material.
	const deleteMaterial = async (id) => {
		try {
			await axios.delete(`/api/training_material/${id}`);
			setMaterials(materials.filter((material) => material.id !== id));
		} catch (error) {
			console.error(error);
		}
	};


	return (
		<>
			<div className="trainingMaterialsPageHeading">
			<button onClick={handleLogout}>Logout</button>
				<h2>Training Material Management</h2>
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={() => setAddMaterialActive(!addMaterialActive)}
				>
					{addMaterialActive
						? "CLOSE"
						: "Add new Training Material"}
				</button>
			</div>
			{addMaterialActive && <FileUploadPage getMaterials = {getMaterials} />}
			<div className="trainingMaterialsPage">
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Title</th>
							<th>Description</th>
							<th>Date</th>
							<th>File_path</th>
							<th>Date_uploaded</th>
							<th>Uploaded by User</th>
							<th>Manage Data</th>
						</tr>
					</thead>
					<tbody>
						{materials.map((material) => (
							<tr key={material.id}>
								<td>{material.id}</td>
								<td>{material.title}</td>
								<td>{material.description}</td>
								<td>{material.date}</td>
								<td>{material.file_path}</td>
								<td>{material.uploaded}</td>
								<td>{material.user_id}</td>
								<td>
									<button onClick={() => deleteMaterial(material.id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TrainingMaterialsManagement;
