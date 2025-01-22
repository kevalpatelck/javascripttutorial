import React, { useState } from 'react'


function Person(keval) {
    
    const[father,setFather]=useState({
       
        first:"keval",
        last:"shah",
        age:15,
        eye:"normal"

    })
    console.log(setFather);
    
  return (
    <div>
      <p>name is{father.first}</p>
    </div>
  )
}

export default Person