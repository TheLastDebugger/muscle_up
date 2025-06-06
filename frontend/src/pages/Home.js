import { useEffect,useState } from "react"

//components

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () =>{

    const [workouts,setWorkouts] = useState(null)

    useEffect(() => {

        const fetchWorkouts = async () => {
             
            const response = await fetch('/srinivas/crudWorkout/')

            const json = await response.json()

            if (response.ok) {

                setWorkouts(json)
            }
        }

        fetchWorkouts()
        
    },[]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (

                    // <p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails key = {workout._id} workout = {workout} />

                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home