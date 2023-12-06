const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.send("Hello Pritam! It's working.");
});

app.listen(8080, () => {
    console.log("Server is listining to port number 8080");
});