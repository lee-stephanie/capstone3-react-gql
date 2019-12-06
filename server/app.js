// backend server

const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://admin:24Lj878aDUYQ06P3@nosqlsession-gdzha.mongodb.net/valiant_db?retryWrites=true&w=majority",

	{
		useNewUrlParser: true
	}
);

mongoose.connection.once("open", () => {
	console.log("now connected to the online MongoDB");
});

const server = require("./queries/queries.js");

server.applyMiddleware({
	app
});

app.listen(5000, () => {
	console.log(
		`🚀  Server ready at http://localhost:5000${server.graphqlPath}`
	);
});
