require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

// Exp app
const app = express();

// app middleware

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//App Routes
app.use("/srinivas/", workoutRoutes);

//connect to db

mongoose
  .connect(process.env.mango_uri)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT_NO, () => {
      console.log("Listeninig.. on port !!!", process.env.PORT_NO);
    });
  })
  .catch((error) => {
    console.log(error);
  });
