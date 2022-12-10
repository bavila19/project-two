import { useState } from "react"
import {Link} from "react-router-dom"

function Home () {

   return(
    <div className="homeCard">
    <Link to="/compliments" className="cards">
      <div >Compliments</div>
    </Link>
    <Link to="/Puppy" className="cards" >
      <div>Puppy Pick Me Ups</div>
    </Link>
    </div>
   )
}


export default Home