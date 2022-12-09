import { useEffect, useState } from 'react';

function Puppy ( props ) {

    const [puppy, setPuppy] = useState (null)
  let arrOfStr=[]
  let str;
    
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
    
    console.log(arrOfStr);
    
    return (
      <div className="puppyCard">
        <div className="puppyDetails">
          <h2 className='puppy'>
            Puppy Pick Me Ups
          </h2>
          {puppy ? <>
            <img width={300} height={300} src={puppy.message} alt="puppy" />
          </> : null}
          <div><h3>Breed Name: {arrOfStr[4]}</h3></div>
        </div>
        <button className="puppyBtn" onClick={fetchId}>New Puppy</button>
      </div>
    )

} 

export default Puppy