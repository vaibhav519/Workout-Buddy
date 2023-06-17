import React from "react";
import moment from "moment";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      console.log(json);
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  const formattedDate = moment(workout.createdAt).format("DD MMMM YYYY");
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg) : </strong>
        {workout.load}
      </p>
      <p>
        <strong>Sets : </strong>
        {workout.sets}
      </p>
      <p>
        <strong>Reps : </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Date : </strong>
        {formattedDate}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
