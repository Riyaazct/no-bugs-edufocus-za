import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import OurPeople from "./pages/OurPeople";
import OurPhotos from "./pages/OurPhotos";
import TheProblem from "./pages/TheProblem";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

// dashboard
import Dash from "./pages4dash/home/Dash.jsx";
import List from "./pages4dash/list/List";
import Single from "./pages4dash/single/Single.jsx";
import New from "./pages4dash/new/New.jsx";
import { productInputs, userInputs } from "./formSource";

const PrivateRoute = ({ element: Component, ...rest }) => {
	const isAuthenticated = localStorage.getItem('isAuthenticated');
	return (
		<Route
			{...rest}
			element={
				isAuthenticated ? (
					Component
				) : (
					<Navigate to="/login" replace />
				)
			}
		/>
	);
};


const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/Ourpeople/this/a/team" element={<OurPeople />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		<Route path="/problem" element={<TheProblem />} />
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />


		<PrivateRoute path="/dashboard" element={<Dash />} />
		<PrivateRoute path="/dashboard/users" element={<List />} />
		<PrivateRoute path="/dashboard/users/:userId" element={<Single />} />
		<PrivateRoute
			path="/dashboard/users/new"
			element={<New inputs={userInputs} title="Add New User" />}
		/>
		<PrivateRoute path="/dashboard/material" element={<List />} />
		<PrivateRoute path="/dashboard/material/:productId" element={<Single />} />
		<PrivateRoute
			path="/dashboard/material/new"
			element={<New inputs={productInputs} title="Add New Product" />}
		/>


	</Routes>
);

export default App;
