// var student = {
//     name: "David",
//     awesome: true,
//     cohort: "JavaScript",
//     week: 1
// }
var studentName = "dave"
var capName;
for(var letter in studentName){
if (letter == 0) {
    capName = studentName[letter].toUpperCase();
    console.log(letter);
}else {
    capName += studentName[letter].toLowerCase();}
}
console.log(capName);