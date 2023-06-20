import Workout from "../models/Workout.js";

// get all workouts
export const getWorkouts = async (req, res) => {
  const user_id = req.user._id
  const workouts = await Workout.find({user_id}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get single workout
export const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: "No such workout" });
  }
};

// create a workout
export const createWorkout = async (req, res) => {
  const { title, sets, reps, load } = req.body;
  const user_id = req.user._id
  try {
    const workout = await Workout.create({ title, sets, reps, load, user_id });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: "Please fill in all the fields" });
  }
};

// delete a workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    // Delete the workout
    await Workout.findByIdAndDelete(id);

    // Fetch the remaining workouts
    const remainingWorkouts = await Workout.find();

    // Send the remaining workouts in the response
    res.status(200).json(remainingWorkouts);
  } catch (error) {
    console.error("Error deleting workout:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the workout." });
  }
};

// update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the workout by ID and update its fields
    const updatedWorkout = await Workout.findByIdAndUpdate(id, { ...req.body });

    // Send the updated workout in the response
    res.status(200).json(updatedWorkout);
  } catch (error) {
    console.error("Error updating workout:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the workout." });
  }
};
