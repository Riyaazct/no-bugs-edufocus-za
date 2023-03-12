import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurPeople from "./pages/OurPeople";
import OurPhotos from "./pages/OurPhotos";
// import TheProblem from "./pages/TheProblem";
import LogIn from "./pages/LogIn";

import Member from "./pages/Member";
import Error from "./pages/Error";
import Unauthorized from "./pages/Unauthorize";
import RequireAuth from "./components/RequireAuth";
import Administrator from "./pages/Administrator";

import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TrainingMaterialsManagement from "./components/TrainingMaterialsManagement";


const App = () => (
	<Routes>
		{/* public routes */}
		<Route path="/" element={<Home />} />
		<Route path="/Ourpeople/this/a/team" element={<OurPeople />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		{/* <Route path="/problem" element={<TheProblem />} /> */}
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />

		<Route path="/unauthorized" element={<Unauthorized />} />
		<Route element={<RequireAuth />}>
		<Route path="/member" element={<Member />} />
		<Route path="/adm" element={<Administrator />} />
		</Route>

		<Route path="*" element={<Error />} />

		<Route path="/contact" element={<Contact />} />

		<Route path="/admin/training-material" element={<TrainingMaterialsManagement />} />

	</Routes>
);

export default App;
