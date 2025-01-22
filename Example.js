// import React, { useState } from 'react'
import React from 'react';

const Example = (hari) => {
    this.Firstname=hari;
    const person={
        name:"John",
        Age:15
    }
    const keval={
        name:"keval",
        age:15
    }
    console.log(keval.name+keval.age);
    
    // const myFather = new Person("John", "Doe", 50, "blue");

    const time = new Date().getHours();
let greeting;
let day;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "half day";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

    const [name, setName] = useState('');

    const clickme = () => { 
        setName("hii")
        
    }
    console.log(greeting);
    

    return (
        <div>

            <p id='keval'>this is my first paragraph.</p>
            {/* <p id='keval'>this is my second paragraph.</p> */}
            <button id='button' onChange={() => clickme()} >Click me</button>
            <p>{day}hello</p>
            <p>{time}</p>
            <p>my name is {keval.name+keval.age} and my age is{keval.age}</p>
        {/* <label>{name}</label> */}

        </div>
    )
}

export default Example