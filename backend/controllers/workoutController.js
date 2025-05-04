const workoutsModel = require("../models/workoutModel")
const mongoose = require("mongoose")

// get all workouts 
const getWorkouts = async(req,res) => {
  const workouts = await workoutsModel.find({}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a single workout

const getWorkout = async(req, res) => {
  const {id} = req.params
  const workout = await workoutsModel.findById(id)

  res.status(200).json(workout)
}


// create a new workout
const createWorkout = async(req, res) => {
    const { title, load, reps } = req.body;
  try {
    const workout = await workoutsModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// delete a workout
const deleteWorkout = async(req,res) => {
  
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)){

    return res.status(404).json({error : "Not a Valid Id"})
  }

  const workout = await workoutsModel.findOneAndDelete({_id: id})

  if (!workout){
    return res.status(404).json({error: "Couldnt delete"})
  }

  res.status(200).json({workout})


}

// update a workout 

const updateWorkout = async(req,res) =>{

  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)){

    return res.status(404).json({error : "Not a Valid Id"})
  }

  const workout = await workoutsModel.findOneAndUpdate({_id : id},{
    ...req.body
  })

  if (!workout){
    return res.status(404).json({error: "Couldnt delete"})
  }

  res.status(200).json({workout})


}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}