const express = require("express");
const workoutsModel = require("../models/workoutModel");
const router = express.Router();
const {
  createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout
} = require("../controllers/workoutController")

//get
router.get("/crudWorkout", getWorkouts);

router.get("/crudWorkout/:id", getWorkout);

router.post("/crudWorkout",createWorkout);

router.delete("/crudWorkout/:id",deleteWorkout);

router.patch("/crudWorkout/:id",updateWorkout);

router.delete("/delete/:id", (req, res) => {
  res.json({ msg: "Hello from Srinivas in Patch" });
});

module.exports = router;
