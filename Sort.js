import React from 'react'

function Sort() {
 

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const numbers = [45, 4, 9, 16, 25];
  const reversed = fruits.toReversed();
  const d = Date("2022-03-25");
  // const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];





  numbers.sort();


  return (
    <div>
      <p>{fruits}</p>
      <p>{numbers}</p>
      <p>{reversed}</p>
      <p>{d}</p>
      {/* <p>{v}</p> */}
      {/* <p>{text}</p> */}
      {/* <p id="car-list">{len}</p> */}

 


    </div>
  )
}

export default Sort
