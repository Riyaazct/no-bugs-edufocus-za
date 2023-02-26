import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import TheProblem from "./pages/TheProblem";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/the-problem" element={<TheProblem />} />
	</Routes>
);

export default App;
