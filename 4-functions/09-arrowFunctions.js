//Standard
function laptop() {
    console.log("Sason's laptop is about to explode");
}

laptop();

//Fat Arrow

let laptop1 = () => {
    console.log("Sasan's laptop is about to explode");
}

laptop1();

var cats = (fleas, ticks) => {
console.log("Cats have", fleas, "and", ticks);
}

cats("fleas","ticks");

let apples = x => console.log(`There are ${x} apples.`);

apples(20);

//Block Bodies
let apples = (x) => {console.log(`There are ${x} apples.`)
}
apples(7);

//Line breaks are bad

let func = () => console.log("hi");//ok

// let func = ()
// => console.log("hi"); //not ok