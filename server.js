const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app =  express();
const PORT = process.env.PORT || 8000;
app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.envMONGOD_URI || "mongodb://localhost/workout")

app.listen(PORT, () => {
    console.log("successfully connected to db");
})
