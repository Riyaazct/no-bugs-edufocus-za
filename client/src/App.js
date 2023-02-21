import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import People from "./pages/People"
import ListAll from "./componets/buttons/ListAll";


const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/createAccount" element={<Signup />} />
		<Route path="/login" element={<Login/>} />
		<Route path="/contact-us" element={<Contact />} />
		<Route path="/our-people" element={<People />} />


		<Route path="/buttons" element={<ListAll />} />
	</Routes>
);

export default App;
