let x = [];

console.log(typeof x);

let student = ["Tyler", "Sasan", "Brandon", "Lawrence", "Rajni", "Sherri", "David"];

console.log(student[4]);

let cohort = ["Lawrence", 35, true,["Brandon",4,"Sherri"],6,false];

console.log("Hello", cohort[3][2],"you look nice today!");

//Populating/Referring

let food = ["Hamburger", "Chicken", "Steak", "Burrito", "BBQ"];

for (f in food){
    console.log(food[f]);
   // console.log(f);//of
}
//adds to array
food.push("Pizza");
//replace
food.splice(5,5,"Tofu");
food.splice(5,0,"Jump Rope")
//delete last item
food.pop();
for (f in food){
    console.log(food[f]);
}
 

let food = ["Hamburger", "Chicken", "Steak", "Burrito", "BBQ"];

food.forEach(f => console.log(`${f} is on the menu today.`));
food.forEach(f => console.log(f));
food.forEach((value, number)=> {console.log(number, value);})

let movies = ["Starwars 1", "Starwars 2", "Starwars 3", "Starwars 4", "Starwars 5", "Starwars 6"];
movies.forEach(x => console.log(x));
movies.push("The Last Jedi");
movies.forEach(x => console.log(x));
movies.splice(0,1,"Anything without jar jar");
movies.forEach(x => console.log(x));

