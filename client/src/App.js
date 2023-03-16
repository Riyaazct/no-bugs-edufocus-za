import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import OurPeople from "./pages/OurPeople";
import OurPhotos from "./pages/OurPhotos";
import TheProblem from "./pages/TheProblem";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

// dashboard
import Customers from "./pdashboard/Customers";
import Inventory from "./pdashboard/Inventory";
import Orders from "./pdashboard/Orders/index";
import Dash from "./Dash";


const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/Ourpeople/this/a/team" element={<OurPeople />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		<Route path="/problem" element={<TheProblem />} />
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />

		<Route path="/dash" element={<Dash />}></Route>
		<Route path="/inventory" element={<Inventory />}></Route>
		<Route path="/orders" element={<Orders />}></Route>
		<Route path="/customers" element={<Customers />}></Route>
	</Routes>
);

export default App;
