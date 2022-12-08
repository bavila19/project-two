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
        <div className="complimentCard">
            <div className="hypeDetails">

                <h1>Hype me up</h1>
                    {compliments ? <>
                        <h2>
                            {compliments.compliment}
                        </h2>
                    </> : null}
                <button onClick={fetchID} className="happyBtn">Hype my up</button>
        
            </div>
        </div >
    )
}

export default Compliments