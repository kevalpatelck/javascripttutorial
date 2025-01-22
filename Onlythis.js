import React from 'react'

function Onlythis() {

    
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        //   fullName : function() {
        //     return this.firstName + " " + this.lastName;
    }

    console.log(person.firstName);
    console.log(person.id);
    
    
    return (
        <div>
            <p>{person.firstName}   {person.id}</p>
            {/* <p>{person.this.firstName}  {person.this.id}</p> */}
        </div>
    )
}

export default Onlythis
