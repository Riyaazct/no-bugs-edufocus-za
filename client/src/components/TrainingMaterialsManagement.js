import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TrainingMaterialsManagement.css";

const TrainingMaterialsManagement = () => {
	const [materials, setMaterials] = useState([]);

	// set materials state to material data from api on page load.
	useEffect(() => {
		getMaterials();
	}, []);

	// function to get materials from api
	const getMaterials = async () => {
		try {
			const response = await axios.get("/api/materials");
			setMaterials(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	// function to delete material for the button
	const deleteMaterial = async (id) => {
		try {
			await axios.delete(`/api/materials/${id}`);
			setMaterials(materials.filter((material) => material.id !== id));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="trainingMaterialsPage">
			<h2>TrainingMaterialsManagement</h2>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>title</th>
						<th>description</th>
						<th>file_path</th>
						<th>date_uploaded</th>
						<th>user_id</th>
					</tr>
				</thead>
				<tbody>
					{materials.map((material) => (
						<tr key={material.id}>
							<td>{material.title}</td>
							<td>{material.description}</td>
							<td>{material.file_path}</td>
							<td>{material.date}</td>
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
	);
};

export default TrainingMaterialsManagement;
