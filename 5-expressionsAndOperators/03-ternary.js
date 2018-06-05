var x = 10;

if (x > 0) {
console.log("yes");
}else {
console.log("no");
}

console.log((x > 0) ? "yes" : "no");

//else if
console.log((x > 0 && x <= 9) ? "yes" : (x > 10) ? "maybe" : "no");

let age = 23

console.log((age >= 25) ? "Yay! You can rent a car!" : (age >= 21) ? "Yay! You can drink" : (age >= 18) ? "Yay! You can vote!": "Sorry you're too young to do anything fun.");