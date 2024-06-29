//Question41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// //Define an array having magician's_name
// let magician_names = ["Ali", "saba", "Erum", "Khalid"];
// //Define function called show_magicians
// function show_magicians(magician: string[]) {
//     magician.forEach(name=> console.log(name));
// }
// //call the function to print the name of each magician in the array.
// show_magicians(magician_names);
//Questuin 42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//Define function called show_magicians
// function show_magicians(magician: string[]) {
//     magician.forEach(name=> console.log(name));
// }
// //define make_great function
// function make_great(magician:string[]){
//     return magician.map(name => `The Great ${name}`);
// }
// //Define an array of Magician name
// let magician_names = ["Ali", "saba", "Erum", "Khalid"];
// //call the function to print the name of each magician in the array.
// let great_magician= make_great(magician_names);
// console.log(great_magician);
//Question43:Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//define make_great function
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of Magician name
var magician_names = ["Ali", "saba", "Erum", "Khalid"];
//making a copy of original array through slice function:
var copy_magician_names = magician_names.slice();
//Modified the copies array to include "The Great" with their names
var copy_Great_magicians = make_great(copy_magician_names);
// show both arrays Original and copied
//original
console.log("Original Array \n");
show_magicians(magician_names);
//copied
console.log("Copied Array\n");
show_magicians(copy_Great_magicians);
//Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
//Define a function that accepts a array of items a person wants on a sandwich. using rest parameter
function makeSandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Sandwitch which contains following items :\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now enjoy sandwitch");
}
//Call the functions 3 times
makeSandwiches("Eggs", "cheese", "chjcken", "mayo");
makeSandwiches("butter", "onion", "tomato", "potato");
makeSandwiches("chicken", "blackPepper", "egg", "bread");
//Question 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
//Define a function that stores information about a car in a Object.
function CreatCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        //Initialize a car object with manifacturer and model
        manufacturer: manufacturer,
        model: model
    };
    //Add additional car options to the ojects
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create the car option
var my_car = CreatCar("Toyota", "Corrola", "colour: Black", "Sun-roof: True");
console.log(my_car);
