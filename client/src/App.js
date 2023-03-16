import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurPeople from "./pages/OurPeople";
import Publications from "./pages/Publications";
import OurPhotos from "./pages/OurPhotos";
import LogIn from "./pages/LogIn";
import Member from "./pages/Member";
import Error from "./pages/Error";
import Unauthorized from "./pages/Unauthorize";
import Administrator from "./pages/Administrator";
import { PrivateRoute } from "./pages/PrivateRoute";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OurProgrammes from "./pages/OurProgrammes";
import TrainingMaterialsManagement from "./pages/TrainingMaterialsManagement";



const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/Ourpeople/this/a/team" element={<OurPeople />} />
		<Route path="/publications" element={<Publications />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		{/* <Route path="/problem" element={<TheProblem />} /> */}
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/unauthorized" element={<Unauthorized />} />
		<Route element={<PrivateRoute role='admin' />}>
		<Route path="/adm" element={<Administrator />} />
		</Route>
		<Route element={<PrivateRoute role='member' />}>
		<Route path="/member" element={<Member />} />
		</Route>
		<Route path="*" element={<Error />} />
		<Route path="/ourprogrammes" element={<OurProgrammes />} />
		<Route path="/admin/training-material" element={<TrainingMaterialsManagement />} />
		<Route path="/admin/training-material" element={<TrainingMaterialsManagement />} />

	</Routes>
);

export default App;
