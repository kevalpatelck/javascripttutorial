import React from 'react'

function Destructuring() {


    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };



    //array destructuring
    const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
    let[fruit1,fruit2]=fruits;

    // skipping values
    let [fruit3,,,fruit4] = fruits;

    
    //string des
    let nme = "schools";
    let [a1, a2, a3, a4, a5, a6] = nme;


    //normal des
    let { firstName, lastName, country = "us" } = person;

    let { lastName: name } = person;
    console.log(lastName);



    return (
        <div>
            <p>my first name is {firstName}. my last name is {name} {country}</p>
            <h1>{a1}</h1>
            <p>{a2}</p>
            <p>{a3}</p>
            <p>{a4}</p>
            <p>{a5}</p>
            <p>{a6}</p>
            <p>{fruit1}</p>
            <p>{fruit2}</p>
            <p>{fruit3}</p>
            <p>{fruit4}</p>

        </div>
    )
}

export default Destructuring
