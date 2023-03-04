import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />
	</Routes>
);

export default App;
