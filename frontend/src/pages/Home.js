import { useEffect,useState } from "react"

const Home = () =>{

    const [workouts,setWorkouts] = useState(null)

    useEffect(() => {

        const fetchWorkouts = async () => {
             
            const respone = await fetch('http://localhost:4000/api/workouts')

            const json = await Response.json()

            if (reponse.ok) {

            }
        }

        fetchWorkouts()
        
    },[]);

    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Home