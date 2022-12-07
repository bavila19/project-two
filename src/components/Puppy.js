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
        <div>
    {puppy ? <>
      <img width={200} src={puppy.message} alt="puppy" />
      <h2>
        Puppy Pick Me Ups
      </h2>
    </> : null}
    <button onClick={fetchId}>New Puppy</button>
  </div>

    )
} 

export default Puppy