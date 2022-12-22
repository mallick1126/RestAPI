const express = require("express");
const studentRoute = require('./src/student/routes');

const app = express();
const port = 8000;

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

/* Telling the app to use the studentRoute when the url is `/api/v1/students` */
app.use("/api/v1/students", studentRoute);

app.listen(port, () => console.log(`app is listening to the port ${port}`));