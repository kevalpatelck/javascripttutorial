import React from 'react'

function Breakstat() {
    const letters = ["dhoni", "rohit", "virat"];
    const numbers = [2, 4, 6, 8];
    const rohit = new Set(["r", "f", "g"]);
    const virat = new Set();
    let text = "";
    let txt2 = "";
    let txt = " ";
    //create variables
    const a = "keval";
    const b = "rohit";
    const c = "virat";
    //add variables
    virat.add(a);
    virat.add(b);
    virat.add(c);

    //for loop
    for (let i = 0; i < virat; i++) {
            
    }


    //break statement
    for (let i = 0; i < 10; i++) {
        if (i == 3) { break; }
        txt += i + "\n";
    }



    // iterables
    let keval = [...letters[2]];


    //iterables array
    for (const x of numbers) {
        text += x;
    }

    //set value
    // let virat=rohit.size()
    // console.log(virat);






    console.log(keval);
    console.log(text);



    return (
        <div>
            <p>{txt}</p>
            <p>{txt2}</p>
            <p>{keval}</p>
            <p>{text}</p>
            <p>{rohit}</p>
            <p>{virat}</p>


        </div>
    )
}

export default Breakstat
