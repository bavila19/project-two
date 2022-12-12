import { useState } from "react"
import {Link} from "react-router-dom"

function Home () {

   return(
    <div>
      <div className="container1">
      <div className="homeCard">
        <Link to="/compliments" className="cards">
          <div >Compliments</div>
        </Link>
        <Link to="/Puppy" className="cards" >
          <div>Puppy Pick Me Ups</div>
        </Link>
    </div>
    
    </div>
    
    <div className="container2">
      <p className="pContainer"> Choose either compliments or puppy pick me ups to make your day slightly better!</p>
    </div>
    
    </div>
   )
}


export default Home