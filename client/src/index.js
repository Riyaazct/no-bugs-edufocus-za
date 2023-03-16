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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
