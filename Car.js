import React from 'react'
import { useState } from 'react';

function Car() {
    const [name, setName] = useState('');
    const[time,setTime]=useState();
    
        const clickme = () => { 
            setName("hii")
        }

  return (
    <div>
        <p id="one">this is first</p>
       <button id='button' onChange={() => clickme()} >Click me</button>

<p>{name}</p>
    </div>
  )
}

export default Car
