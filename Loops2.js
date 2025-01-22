import React from 'react'

function Loops2() {
    const cars = ["BMW", "Volvo", "Mini"];


    const person = { fname: "John", lname: "Doe", age: 25 };


    //for loop for in
    let txt = "";
    for (let x in person) {
        txt += person[x] + " ";
    }

    //loops for of

    let text = "";
    for (let x of cars) {
        text += x + "      ";
    }
    //while loop
    let i = 0;
    let text2 = "";
    while (cars[i]) {
        text2 +=cars[i]+" ";
        i++;
    }

    console.log(txt);
    console.log(text);


    return (
        <div>
            <p>{txt}</p>
            <p>{text}</p>
            <p>{text2}</p>
        </div>
    )
}

export default Loops2
