import { useEffect, useState } from 'react';

function Puppy ( props ) {

    const [puppy, setPuppy] = useState (null)
  let arrOfStr=[]
  let str;
  // let name= puppy.arrOfStr[4]
    
    async function fetchId() {
        try {
          const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
          const puppyData = await response.json()
          console.log(puppyData)
          setPuppy(puppyData)
        } catch (err) {
          console.log(err)
        }
      }

    useEffect(() => {
        fetchId()
    }, [])
    if (puppy){
    str = puppy.message
    arrOfStr = str.split("/",5);
    }
    const name = arrOfStr[4]
    console.log(name);
    return (
      <div className="puppyCard">
        <div className="puppyDetails">
          <h2 className='puppy'>
            Puppy Pick Me Ups
          </h2>
          <div className='picContainer'>
            {puppy ? <>
            <img className='puppyPics' src={puppy.message} alt="puppy" />
          </> : null}
          </div>
          
            
          <div><h3 className="breedName">Breed Name: {name}</h3></div>
        </div>
        <button className="puppyBtn" onClick={fetchId}>New Puppy</button>
      </div>
    )

} 

export default Puppy