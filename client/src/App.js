import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
import Home from "./pages/Home";
import OurPeople from "./pages/OurPeople";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/Ourpeople/this/a/team" element={<OurPeople />} />
	</Routes>
);

export default App;
