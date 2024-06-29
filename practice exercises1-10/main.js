//Question 2:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var persons_name = "Ahmed";
console.log(persons_name);
console.log("Hello ".concat(persons_name, ", would you like to learn some Python today?"));
//Question 3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName : string= "ahmed ali";
// console.log(personName.toUpperCase());
// console.log(personName.toLowerCase());
// console.log(personName.replace(/\b\w/g, (maha)=> maha.toUpperCase()));
// console.log(personName.replace(/\b\w/g,(jia)=> jia.toUpperCase()));
// console.log(personName.replace(/\b\w/g , (taha) => taha.toUpperCase()));
// let myName : string ="mahwash zahra kirmani";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.replace(/\b\w/g, (dan) => dan.toUpperCase()));
// let favoriteName : string= " muhammad umar ajaz alavi";
// console.log(favoriteName.toLowerCase());
// console.log(favoriteName.toUpperCase());
// console.log(favoriteName.replace(/\b\w/g , (ommo) => ommo.toUpperCase()));
var goodName = "wajiha ajaz alavi";
console.log(goodName.toLowerCase());
console.log(goodName.toUpperCase());
console.log(goodName.replace(/\b\w/g, function (jia) { return jia.toUpperCase(); }));
//Question 4:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.
var famousPerson = "albert einstein";
var message = "once said a person who never made amistake never tried any thing new";
//let message : string ="A person who never made a mistake never tried anything new.";
// console.log(`${famousPerson} once said,${message} `);
// console.log(famousPerson , message);
console.log(famousPerson, message);
//Question 5:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Ahmed hussain kirmani";
var message1 = "Goog morning, have a nice day.";
console.log("Hello ".concat(famous_person, ", ").concat(message1));
console.log(famous_person.toLowerCase());
console.log(famous_person.toUpperCase());
console.log(famous_person.replace(/\b\w/g, function (ammo) { return ammo.toUpperCase(); }));
//Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let personWithWhiteSpaceName1 : string = "\n\t farida alavi \t \n";
// let personWithoutwhitespace = personWithWhiteSpaceName1.trim();
// console.log(personWithWhiteSpaceName1);
// console.log(personWithoutwhitespace);
var personNameWithWhiteSpaces = "\n\t Wajiha Ajaz Alavi \t\n";
var abdcf = " \t\n taha ajaz alavi \n\t";
var personNameWitouthWhiteSpaces = personNameWithWhiteSpaces.trim();
console.log(personNameWithWhiteSpaces);
console.log(personNameWitouthWhiteSpaces);
//Question 7: You should create four lines that look like this
//Question 8:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let addition_num : number = 5 +3;
// let subtraction_num :number = 14 - 6;
// let multiplication_num : number = 2*4;
// let division_num: number = 16/2;
//  console.log(addition_num);
//  console.log(subtraction_num);
//  console.log(multiplication_num);
//  console.log(division_num)
console.log(4 + 4);
console.log(12 - 4);
//Question 9:  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 9;
var message4 = " My favorite number is";
console.log("".concat(message4, "  ").concat(favoriteNumber));
console.log(message4, favoriteNumber);
//Question 10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Addition 
console.log(4 + 4);
//Subtraction
console.log(12 - 4);
// multiplication
console.log(4 * 2);
// division
console.log(16 / 2);
