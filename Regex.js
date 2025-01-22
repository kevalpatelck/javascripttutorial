import React from 'react'
import { useState } from 'react';

function Regex() {
    const [name, setName] = useState('');

    let text = "tis is microsoft"
   const clickme = () => {
            setName("hii")

        }
        console.log(clickme);
        
    // const onChange = () => {
    //     text.replace("Microsoft", "W3Schools");

    
     
    // }
    return (
        <div>
        <p id="one">this is first{name}</p>

            {/* <button onclick="myFunction()">Try it</button> */}
            <button id='button' onChange={() => clickme()} >Click me</button>

        </div>
    )
}

export default Regex
