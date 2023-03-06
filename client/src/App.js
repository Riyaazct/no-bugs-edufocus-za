import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import OurPhotos from "./pages/OurPhotos";
import TheProblem from "./pages/TheProblem";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Member from "./pages/Member";
import Error from "./pages/Error";
import Unauthorized from "./pages/Unauthorize";
import RequireAuth from "./components/RequireAuth";

const App = () => (
	<Routes>
		{/* public routes */}
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/photos" element={<OurPhotos />} />
		<Route path="/problem" element={<TheProblem />} />
		<Route path="/login" element={<LogIn />} />
		<Route path="/signup" element={<SignUp />} />
		<Route path="/unauthorized" element={<Unauthorized />} 
		/>
		
		{/* protected routes */}
		{/* <Route element={<RequireAuth />}> */}
		<Route path="/member" element={<Member />} />
		{/* </Route> */}
		{/* error route */}
		<Route path="*" element={<Error />} />
	</Routes>
);

export default App;
