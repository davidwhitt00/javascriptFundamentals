let friend = "Aaron";

switch (friend) {
    case "Aaron":
    console.log("Hey Aaron, when are we going rock climbing?");
    break;
    case "Kenn":
    console.log("Hey Kenn, wanna play Catan?");
    break;
    case "Carolyn":
    console.log("Hey Caroloyn, when are we playing DnD?");
    break;
    default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);
}


let dessert = "cake";
switch (dessert) {
    case "pie":
    console.log(`${dessert}, ${dessert}, me oh my!`);
    break;
    case "cake":
    console.log(`${dessert} is great!`);
    break;
    case "ice cream":
    console.log(`I scream for ${desert}!`);
    break;
    default:
    console.log("Not on the menu!");
}

let yep = -8

switch (true){
    case (yep < 0 && yep > -10):
    console.log("worked");
    break;
    case (yep > 0):
    console.log("also worked!");
    break;
    default:
    console.log("didn't work");
}