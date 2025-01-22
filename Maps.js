import React from 'react'

function Maps() {

    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200],
        ["kiwi", 400],
        ["mango", 600]


    ]);
    const [map, setMap] = React.useState(fruits);
    //get map
    let numb = fruits.get("oranges");

    //setmap
    let virat = fruits.set("oranges", 500)
    // console.log(setMap);

    //map size
    let size = fruits.size;


    //map delete
    let del=fruits.delete("bananas");
    
    //in map or not
    let inmap=fruits.has("oranges");
    console.log(inmap);

// for each in map
let fruitsList = "";
fruits.forEach(function(value,key){
    fruitsList +='<li>'+ key +'='+value+'<li>';
})

console.log(fruitsList);

    


    return (
        <div>
            <p>{map}</p>
            <p>{numb}</p>
            <p>{virat}</p>
            <p>{size}</p>
            <p>{del}</p>
            <p>{fruitsList}</p>
        </div>
    )
}

export default Maps
