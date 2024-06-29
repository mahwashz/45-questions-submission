//Question 31:No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userName = ["Ali", "Sara", "Kamran", "Admin", "Usman"];

userName=[];

if (userName.length ===0){console.log("Your array is empty we need to find some users!")} else { userName.forEach(oneUser => {
    if (oneUser==="Admin"){console.log(`Hello ${oneUser}, would you like to see a status report?`)} else{
        console.log(`Hello ${oneUser}, thankyou for logging in again`)
    }

})

}

//question 32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.• Make a list of five or more usernames called current_users.• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// array of curreent_user
let curent_users =["faiza", "aisha","Salman", "Farida", "Rashid"];
// array for new uerss
let new_users = ["Danish", "Sarah", "Faiza", "Aisha", "Wajeeha"];
//loop for availibility of username
new_users.forEach(oneNewUser => {

let our_condition = curent_users.some(current_one_user =>current_one_user.toLowerCase()===oneNewUser.toLowerCase())
        

if(our_condition){console.log(`Sorry ${oneNewUser} is already taken`)} else{
    console.log(`Sorry ${oneNewUser} is available`)
}

})
// question33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.• Store the numbers 1 through 9 in a array.• Loop through the array.• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// creating an array
let numbers = [1,2,3,4,5,6,7,8,9];
//using for loop
for (let oneNumber of numbers) {
    let ordinalEnding: string;
    if (oneNumber===1){
        ordinalEnding="st"
    }else if (oneNumber === 2){
        ordinalEnding ="nd"
    } else if (oneNumber ===3){
        ordinalEnding="rd"
    }else {
        ordinalEnding="th"
    }
    console.log(`${oneNumber}${ordinalEnding}`);
}
//question 34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

//creating an array
let pizzasName =["chicken Tikka","fajita", "malai boti"];

//using for loop
for (let onePizza of pizzasName){
    console.log(`hello, I like to eat ${onePizza} pizza`);

}
//print a message outside for loop
console.log("pizza is love");
console.log("I eat pizza very much");
console.log("I really love pizza");

//Question35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

//creating an array
let petAnimal =["cat", "dog", "cow"];
// use a for loop to print name
for (let onePat of petAnimal){
    console.log(`A ${onePat} would make a great pet `);
    console.log(" Any of these animals would make a great pet!");
}

console.log(" All of these animals would make a great pet!");

//Question36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:string, printMessage: string){
    console.log(`The size of shit is ${size}  and ${printMessage} printed on it`);
}
// call the function
make_shirt("medium","it is pure cotton shirt")

make_shirt("large", "made in Pakistan")
make_shirt("small", "made inItally")

//Question 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 

function make_shirts (size:string= "large" , pritedMessage:string= "I love TypeScript" ) { console.log(`the shirt size is ${size} and ${pritedMessage} is printed on it`);
    
}
// call the function
make_shirts()

make_shirts("medium")
// a medium shirt with the default message, and a shirt of any size with a different message.
make_shirts("small", "I love my Papa")


//Question 38:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

//creating function
function describe_city (name:string, countryName: string= "Pakistan") { console.log(`${name} is in ${countryName}`

)
    
}
//print a simple sentence, such as Karachi is in Pakistan.
describe_city("Karachi", "Pakistan")
//Call your function for three different cities, at least one of which is not in the default country.
describe_city("Delhi", "India")
describe_city("Lahore", "Pakistan")
describe_city("Multan")

//Question 39:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:"Lahore, Pakistan"call your function with at least three city-country pairs, and print the value that’s returned.

//creating function
function city_country(name:string, countryName:string) { return `${name}, ${countryName}`
    
}
console.log(city_country("Lahore", "Pakistan"));

console.log(city_country("Dehli", "India"));
console.log(city_country("NewYork", "America"));
console.log(city_country("Dhaka", "Bangladesh"));
console.log(city_country("Paris", "France"));

//Question 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//creating a make_album function // Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
function make_album(artistName:string, albumTitle: string, tracks?:number) {
    let album:{artist: string, title: string, tracks?: number } ={
        artist: artistName,
        title: albumTitle
    };
    if(tracks !== undefined){
        album.tracks =tracks;
    }
    return album; //it should return a Object containing these two pieces of information
}

//calling three functions and creating variables with different values

let album1= make_album("Ali","satrangi")
let album2= make_album("Muskan", "album title2")
//callig a make_album function with third parameter
let album3 = make_album("faiza", "sahil", 3)

//print value of object in my function
console.log(album1);
console.log(album2);
    console.log(album3);



