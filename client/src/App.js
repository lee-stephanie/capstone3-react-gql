import React from "react";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//router REST API
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
// components

import Menu from "./components/Menu.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import AddMember from "./components/Members/addmember.js";
import MemberDatabase from "./components/Members/Database.js";

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<Header />
			<Switch>
				<div className="mainwrapper">
					<Container>
						<Route exact path="/" component={Main} />
						<Route path="/addmember" component={AddMember} />
						<Route
							path="/MemberDatabase"
							component={MemberDatabase}
						/>
					</Container>
				</div>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
