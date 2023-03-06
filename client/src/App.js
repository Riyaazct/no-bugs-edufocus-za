import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
import Home from "./pages/Home";
import OurPeople from "./pages/OurPeople";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/Ourpeople/this/a/team" element={<OurPeople />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		<Route path="/problem" element={<TheProblem />} />
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />
	</Routes>
);

export default App;
