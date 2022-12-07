import { useEffect, useState } from "react"
import { json } from "react-router";

function Compliments (props){
    const [compliments, setCompliments] = useState(null)

    async function fetchID(){
        try{
            const response = await fetch (`https://complimentr.com/api`)
            const complimentsData = await response.json()
            console.log(complimentsData)
            setCompliments(complimentsData)
    }catch(err){
        console.log(err)
    }
}
    useEffect(()=>{
        fetchID()
    },[])

    return(
        <div>
            {compliments ? <>
                <h2>
                    {compliments.compliment}
                </h2>
         </> : null}
            <h1>Hype me up</h1>
            <button onClick={fetchID}>Hype my up</button>
      
        </div >
    )
}

export default Compliments