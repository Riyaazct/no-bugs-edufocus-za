import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import OurPhotos from "./pages/OurPhotos";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
	</Routes>
);

export default App;
