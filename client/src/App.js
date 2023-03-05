import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import OurPhotos from "./pages/OurPhotos";
import TheProblem from "./pages/TheProblem";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Member from "./pages/Member";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		<Route path="/problem" element={<TheProblem />} />
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />
		<Route path="/member" element={<Member />} />
	</Routes>
);

export default App;
