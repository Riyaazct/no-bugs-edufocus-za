import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import "./index.css";
=======
import "./pages/LogIn.css";
import "./pages/SignUp.css";
>>>>>>> main
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
	<AuthProvider>
	<App />
	</AuthProvider>
	</BrowserRouter>
);
