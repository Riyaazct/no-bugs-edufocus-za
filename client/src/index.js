import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/LogIn.css";
import "./pages/SignUp.css";
import "./pages/Member.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AuthProvider>
			<Routes>
				<Route path="/*" element={<App />} />
			</Routes>
		</AuthProvider>
	</BrowserRouter>
);
