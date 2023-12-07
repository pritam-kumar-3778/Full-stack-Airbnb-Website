const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/HouseHarbor";
// Connect database
main()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err)
});

async function main() {
  await mongoose.connect(MONGO_URL);

}

app.get("/", (req, res) => {
    res.send("Hello Pritam! It's working.");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My Home",
        description: "By the beach.",
        price: 3200,
        location: "Chandrabhaga, Odisha",
        Country: "India",
    });

    await sampleListing.save();
    console.log("Your Home was saved.");
    res.send("Successfully testing done.");
});

app.listen(8080, () => {
    console.log("Server is listining to port number 8080");
});