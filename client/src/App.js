import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import OurPeople from "./pages/OurPeople";
import OurPhotos from "./pages/OurPhotos";
import TheProblem from "./pages/TheProblem";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

// dashboard
import Dash from "./pages4dash/home/Home";
import List from "./pages4dash/list/List";
import Single from "./pages4dash/single/Single";
import New from "./pages4dash/new/New";
import { productInputs, userInputs } from "./formSource";


const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/Ourpeople/this/a/team" element={<OurPeople />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		<Route path="/problem" element={<TheProblem />} />
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />


		<Route path="/dashboard">
			<Route index element={<Dash />} />
			<Route path="login" element={<LogIn />} />
			<Route path="/dashboard/users">
				<Route index element={<List />} />
				<Route path=":userId" element={<Single />} />
				<Route
					path="new"
					element={<New inputs={userInputs} title="Add New User" />}
				/>
			</Route>
			<Route path="/dashboard/material">
				<Route index element={<List />} />
				<Route path=":productId" element={<Single />} />
				<Route
					path="new"
					element={<New inputs={productInputs} title="Add New Product" />}
				/>
			</Route>
		</Route>
	</Routes>
);

export default App;
