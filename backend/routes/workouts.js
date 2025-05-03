const express = require("express");
const workoutsModel = require("../models/workoutModel");
const router = express.Router();
const {
  createWorkout,
} = require("../controllers/workoutController")

//get
router.get("/crudWorkout", (req, res) => {
  res.json({ message: "Hello From Srinivas" });
});

router.get("/crudWorkout/:id", (req, res) => {
  res.json({ get: "Single Workout" });
});

router.post("/crudWorkout",createWorkout);

router.delete("/crudWorkout/:id", (req, res) => {
  res.json({ msg: "Hello from Srinivas in Delete" });
});

router.patch("/crudWorkout/:id", (req, res) => {
  res.json({ msg: "Hello from Srinivas in Patch" });
});

router.delete("/delete/:id", (req, res) => {
  res.json({ msg: "Hello from Srinivas in Patch" });
});

module.exports = router;
