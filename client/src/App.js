import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => (
	<div>

		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
		<p className="bg-black text-white text-3xl">test</p>
	</div>
);

export default App;
