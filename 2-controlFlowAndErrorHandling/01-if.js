// If statement
let isOn = false;

if (isOn === true) {
    console.log("The light is on");
}

if (isOn) {
    console.log("The light is on, YAY") // this assumes statment is true
}else {console.log("The light is off"
)}


let name = "david Whitt";

if(name == "david Whitt"){ console.log("My name is " + name.charAt(0).toUpperCase() + name.substr(1).toLowerCase())}
else{console.log("That is not my name")};

console.log(name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());
if (name[0].toUpperCase()){
    let firstLetter = name [0] + name.slice(1).toLowerCase();
    console.log("Hello my name is", firstLetter)
} else {
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log("Hello my name is" , otherLetters)
}
//Else if
 let type = true;

 if (typeof type === "string") {
     console.log(typeof type)
 } else if (typeof type === "boolean"){
     console.log (typeof type)}
    else if (typeof type == "number"){
     console.log (typeof type)}   
function between(x, min, max){ return x >= min && x <=max;}
let age = 17
 if (age >= 25){console.log("Yay! You can rent a car, drink and vote!")}
else if (age >= 21){console.log("Yay! You can drink and vote!")}
else if (age >= 18) {console.log("Yay! You can vote!")}
else if (age <= 17){console.log("Sorry you're too young to do anything.")}







