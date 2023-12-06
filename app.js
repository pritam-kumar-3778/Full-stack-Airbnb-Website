const express = require("express");
const app = express();
const mongoose = require("mongoose");


// Connect database
main()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err)
});

const MONGO_URL = "mongodb://127.0.0.1:27017/HouseHarbor";

async function main() {
  await mongoose.connect(MONGO_URL);

}

app.get("/", (req, res) => {
    res.send("Hello Pritam! It's working.");
});

app.listen(8080, () => {
    console.log("Server is listining to port number 8080");
});