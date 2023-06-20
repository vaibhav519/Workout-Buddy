import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controllers/workout.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// require auth for all workouts
router.use(requireAuth)

// get all workouts
router.get("/", getWorkouts);

// get single workouts
router.get("/:id", getWorkout);

router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

export default router;
 