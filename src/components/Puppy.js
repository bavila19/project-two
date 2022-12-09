import { useEffect, useState } from 'react';

function Puppy ( props ) {
    const [puppy, setPuppy] = useState (null)

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

    return (
      <div className="puppyCard">
        <div className="puppyDetails">
          <h2>
            Puppy Pick Me Ups
          </h2>
          {puppy ? <>
            <img width={200} src={puppy.message} alt="puppy" />
          </> : null}
        </div>
        <button className="puppyBtn" onClick={fetchId}>New Puppy</button>
      </div>

    )
} 

export default Puppy