const color = "red";

//use a switch when you have a lot of different cases instead of elseifs
switch(){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("Color is not red or blue");
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

console.log("Today is ${day}");

//funny arrays
const numbers = [43, 56, 33, 23, 44, 56, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()]; //array can be a mix of different variables

let val;

//this gets array length
val = numbers.length;
//Check if it is array
val = Array.isArray(numbers);
//this gets a single value from an array
val = numbers[3]; //arrays are 0 based
//insert into an array
numbers[2] = 100;
//find the index of a value
val = numbers.indexOf(36);

//this mutates arrays
numbers.push(250); //this adds on to the end of the array
numbers.unshift(120); //adds to front
numbers.pop(); //takes off the end
numbers.shift(); //takes off the front
numbers.splice(); //splices values
numbers.reverse(); //reverses array

//concatenate array
val = numbers.concat(numbers2);

//sorts arrays
val = fruit.sort();
val = numbers.sort();

console.log(val);