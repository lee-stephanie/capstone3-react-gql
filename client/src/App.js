import React from "react";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//router REST API
import { BrowserRouter, Route, Link } from "react-router-dom";

// components

import Menu from "./components/Menu.js";
import Header from "./components/Header.js";

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<Header />
		</BrowserRouter>
	);
}

export default App;
