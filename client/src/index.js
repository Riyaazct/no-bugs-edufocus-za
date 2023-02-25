import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './pages/LogIn.css';
import './pages/SignUp.css';
import App from "./App";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
