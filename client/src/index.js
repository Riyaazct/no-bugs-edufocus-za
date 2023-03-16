
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./pages/LogIn.css";
import "./pages/SignUp.css";
import App from "./App";
import React from "react";
// import { render } from 'react-dom';
window.React = React;
import { AuthProvider } from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
	<AuthProvider>
		<App />
	</AuthProvider>
	</BrowserRouter>
);


