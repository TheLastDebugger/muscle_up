require("dotenv").config();

const express = require("express");
const workoutRoutes = require('./routes/workouts')


// Exp app
const app = express();

// app middleware

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
});


//App Routes
app.use("/srinivas/",workoutRoutes)


//listen for request
app.listen(process.env.PORT_NO, () => {
  console.log("Listeninig.. on port !!!", process.env.PORT_NO);
});
