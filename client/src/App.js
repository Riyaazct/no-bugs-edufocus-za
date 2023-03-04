import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import "./pages/Partners.css";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/partners" element={<Partners />} />
	</Routes>
);

export default App;
