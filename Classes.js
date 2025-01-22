import React from 'react'
import { useState } from 'react';

const Classes=()=> {
    const [person, setPerson] = useState({
        name: 'John Doe',
        job: 'Developer'
       });
    const[age,setAge]=useState({
        keval: 30

       })
       console.log(setPerson);
       console.log(setAge);

       
  return (
    <div>
        <p>my name is: {person.name} my job is:{age.keval} my job is:{person.job}</p>
    
    </div>
  )
}

export default Classes
