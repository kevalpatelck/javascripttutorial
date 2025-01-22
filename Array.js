import React from 'react'
// import { useState } from 'react';

function Array() {
    //  const [value, setValue] = useState('');

const fruits = ["Apple", "Orange", "Apple", "Mango", "Apple", "Apple", "Apple", "Mango", "Mango"];
let position = fruits.indexOf("Apple") + 1;
let position2 = fruits.lastIndexOf("Mango") + 1;
// let hari=fruits.findIndex("Apple");


// const clickme=()=>{
// console.log();

// }
// const myFunction = () => {
//     setValue  > 18;
// }
// console.log(hari);


  let keval=fruits.includes("Mango");
  console.log(keval);
  

  return (
    <div>
<p>{position}</p>
<p>{position2}</p>
            {/* <button id='button' myFunction={() => clickme()} >Click me</button> */}

{/* <p>{hari}</p> */}

    </div>
  )
}

export default Array
