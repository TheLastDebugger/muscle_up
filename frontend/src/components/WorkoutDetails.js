const WorkoutDetails = ({workout}) => {

    return (
        <div className="workout-details">
            <h4><strong>{workout.title}</strong></h4>
            <p>Load : {workout.load}</p>
            <p>Reps : {workout.reps}</p>
            <p>Created At : {workout.createdAt}</p>


        </div>
    )

}

export default WorkoutDetails