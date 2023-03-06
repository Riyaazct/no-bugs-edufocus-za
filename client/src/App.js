import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import "./pages/Partners.css";
import OurPhotos from "./pages/OurPhotos";
import TheProblem from "./pages/TheProblem";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";


const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />

		<Route path="/about/this/site" element={<About />} />
		<Route path="/partners" element={<Partners />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		<Route path="/problem" element={<TheProblem />} />
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />

	</Routes>
);

export default App;
