import React from "react";
import "./App.css";

//ApolloServer

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

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
import CoachDatabase from "./components/Coaches/Database.js";



const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Menu />
				<Header />
				<Switch>
					<div className="mainwrapper">
						<Container>
							<Route exact path="/" component={MemberDatabase} />
							<Route path="/main" component={Main} />
							<Route path="/addmember" component={AddMember} />
							<Route path="/member/update/:id" component={MemberDatabase} />
							<Route path="/CoachDatabase" component={CoachDatabase} />
						</Container>
					</div>
				</Switch>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
