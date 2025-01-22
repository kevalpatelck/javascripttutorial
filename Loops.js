import React from 'react'
import { useState } from 'react';

function Loops() {

    const [carItems, setCarItems] = useState([]);

    const cars = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi'];
    const numbers = [45, 4, 9, 16, 25];
    const person = { fname: "John", lname: "Doe", age: 25 };

    let texts = "";
    let text = "";

    let txt = "";
    let txt2 = "";
    let i = 0;



    // loops of car lenth

    const createCarItems = () => {
        let items = [];
        for (let i = 0; i < cars.length; i++) {
            items.push(<div key={i}>{cars[i]}</div>);
        }
        setCarItems(items); // Update state with the generated items
    };



    //while loop
    while (cars[i]) {
        texts += cars[i];
        i++;
    }


    // for (let i = 0; i < cars.length; i++) {
    //     text.push(<div key={i}>{cars[i]}</div>);
    //   }
    for (let i = 0; i < cars.length; i++) {

        text += cars[i];
    }


    // document.getElementById('car-list').innerHTML = text;

    // loops over array values
    for (let x in numbers) {
        txt += numbers[x] + "<br>";
    }

    //     let text = "*";
    //     let keval=5
    // for (let i = 0; i < keval; i++) {
    // //   text += keval + "<br>";
    //     return text;
    // };
    // console.log(text);
    // document.getElementById("demo").innerHTML = text;
    for (let i = 0; i < 5; i++) {
        text += "The number is " + i + '/n';
        // return i;
    }

    for (let x in person) {
        txt2 += person[x] + " ";
    }
    // console.log(txt2);

    console.log(text);


    return (
        <div>
            <p id="demo"></p>
            <p>{numbers}</p>
            <p>{cars}</p>
            <p>this is while loop      {texts}</p>
            <button className="App" onClick={() => createCarItems()}>
                <label>ffff</label>
            </button>
            <p>{carItems}</p>
            <p>{person}</p>

        </div>
    )
}

export default Loops
