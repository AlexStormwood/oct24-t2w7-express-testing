const express = require("express");
const app = express();

// declare a basic root route
// for confirming the server works
app.get("/", (request, response) => {

	response.json({
		message: "Hello, world!"
	});
});

let PORT = process.env.PORT || 3000;

// export the configured server
// for the index.js and test files to control
module.exports = {
	app: app,
	PORT: PORT
}

// module.exports = app;
// module.exports = PORT;