//Return

function capitalizeName(name) {

    let capName = "";
    for (let l in name) {
        if(l==0) {

            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }

    }
    console.log(capName);
    return capName;
}
capitalizeName("branDON");
const newName = capitalizeName("branDON")

console.log(newName + ", how are you today?");

function tipAmount(orderTotal, tipPerc){
    let netTotal = orderTotal * tipPerc;
    return netTotal.toFixed(2);
}

let tip = tipAmount(19.97,.20)
var subTotal = "10"
function tip(){return subTotal * .20};
tip();

let total = subTotal + tip();
console.log(total);



