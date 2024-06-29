// // //Question 11: Names: Store the names of a few of your friends in a array called names.Print each person’s name by accessing each element in the list, one at a time.
// // //array of names
// // // let myFriendsNames = ["wajiha", "umar", "taha", "danish"];
// // // console.log(myFriendsNames);
// // // //Print each person’s name one at a time
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // // myFriendsNames.forEach( friendsnames => {
// // //     console.log(friendsnames)
// // // });
// // //Question 12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// // // let familyFriendsNames = ["wajiha", "umar", "taha", "danish"];
// // // familyFriendsNames.forEach(feriendsNames => console.log(`Hello ${feriendsNames} , how are you?`));
// // //Question 13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// // // let tranportationModes = ["car", " bus", "motorcycle", "train"];
// // // tranportationModes.forEach( favoriteTransport => console.log(`I would like to own a Honda ${favoriteTransport}`));
// // // tranportationModes.forEach(myTransport => console.log(`I would like to drive ${myTransport}`));
// // // tranportationModes.forEach(favoriteService => console.log(`Hello I would like to derive best ${favoriteService}`));
// // // tranportationModes.forEach(goodTransport => console.log(`I love to derive ${goodTransport}`));
// // //Question14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// // // let guestInvited = ["aisha", "faiza", "mahwish", "salman"];
// // // guestInvited.forEach(persons => console.log(`salam, would you like to take dinner with me ${persons}`));
// // // guestInvited.forEach( personNames => console.log(`${personNames}, would you like to come for dinner with me`));
// //  //Question 15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// // // Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// // //• Print a second set of invitation messages, one for each person who is still in your list.
// // //let guestsInvited = ["aisha", "faiza", "mahwish", "salman"];
// // // let dontComeGuest =guestInvited[0];
// // // console.log(dontComeGuest, "is not comming");
// // // let dontCome = guestInvited[1];
// // // console.log(dontCome, "nahi arahi ha");
// // // let dontInterested =guestInvited[2];
// // // console.log(dontInterested, "is not replying");
// // //  let guestNotCome = guestInvited[3];
// // // console.log(guestNotCome, " nahi araha");
// // //Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// // // let guestInvited = ["aisha", "faiza", "mahwish", "salman"];
// // //Print a second set of invitation messages, one for each person who is still in your list.
// // // guestsInvited.forEach(newGuest => console.log(`${newGuest} would you like to make dinner with me`));
// // // guestsInvited.splice(0,1,"Kashif");
// // // guestsInvited.forEach(newGuests => console.log(`${newGuests} please come for dinner with me`));
// // // Question 16:
// // //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table. • Add one new guest to the beginning of your array.• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// // let invitedGuests = ["aisha", "faiza", "mahwish", "salman"];
// // console.log("I  found a bigger dinner table.so now more space is available.  Would you like to have dinner with me ");
// // // Add one new guest to the beginning of your array.
// // invitedGuests.unshift("usman");
// // //Add one new guest at the end of your array.
// // invitedGuests.push("Kamran");
// // //Add one new guest to the middle of your array.
// // let middleIndex = Math.floor(invitedGuests.length/2);
// // invitedGuests.splice(middleIndex, 0, "Amir");
// // console.log("Updated list of guest");
// // invitedGuests.forEach(guests => console.log(`Salam ${guests}, would you like to have dinner with me.`));
// // invitedGuests.unshift("Amir");
// // invitedGuests.push("Amna");
// // let middleNumber = Math.floor(invitedGuests.length/2);
// // invitedGuests.splice(middleNumber, 0, "jack");
// // console.log("Updated list of guest");
// // invitedGuests.forEach( guestss => console.log(`Dear ${guestss}, would you like to have a dinner with me`));
// // // Question 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.• Print a message to each of the two people still on your list, letting them know they’re still invited.• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//  let guestsInvited = ["aisha", "faiza", "mahwish", "salman"];
// // // console.log(" I just found out that my new dinner table won’t arrive in time for the dinner, and you have space for only two guests .I can invite only two people for dinner");
// // // // using while loop to remove guests from your list one at a time until only two names remain in your list
// // // while (guestsInvited.length > 2) {
// // //     let reduceList = guestsInvited.pop();
// // // console.log(`Sorry ${reduceList}, i  invite you for dinner due to small space`);
// // // }
// // // // Print a message to each of the two people still on your list, letting them know they’re still invited
// // // console.log("I am inviting two guest for dinner");
// // // guestsInvited.forEach( twoGuests => console.log(`Salam ${twoGuests}, I am inviting you for dinner`)
// // // );
// // // //Remove the last two names from your list, so you have an empty list. 
// // //  guestsInvited.pop();
// // //  guestsInvited.pop();
// // // //Print your list to make sure you actually have an empty list at the end of your program.
// // // console.log("emptylist", guestsInvited);
//  console.log("I just found out that your new dinner table won’t arrive in time for the dinner, and I have space for only two guests. I can invite only two people for dinner.");
// // // Remove guests from your list one at a time until only two names remain in your list.
//  while (guestsInvited.length>2) {
//     let removedGuest = guestsInvited.pop()
//     console.log(`Sorry ${removedGuest} we cant invit you`)
//  };
//  //Print a message to each of the two people still on your list, letting them know they’re still invited.
// guestsInvited.forEach( guestInvited => console.log(`Dear ${guestInvited} you are invited for dinner`));
// //Remove the last two names from your list, so you have an empty list.
// guestsInvited.pop();
// guestsInvited.pop();
// //Print your list to make sure you actually have an empty list at the end of your program.
// console.log("emptyList", guestsInvited);
// //Question 18:Seeing the World: Think of at least five places in the world you’d like to visit.• Store the locations in a array. Make sure the array is not in alphabetical order.• Print your array in its original order.• Print your array in alphabetical order without modifyin the actual list.• Show that your array is still in its original order by printing it.• Print your array in reverse alphabetical order without changing the order of the original list. • Show that your array is still in its original order by printing it again.• Reverse the order of your list. Print the array to show that its order has changed.• Reverse the order of your list again. Print the list to show it’s back to its original order. • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed. • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let favoritePlaces = ["pakistan","italy", "china", "korea", "japan" ];
// console.log(favoritePlaces);
// //Print your array in alphabetical order without modifyin the actual list.•
// console.log("Alphabetical order", [...favoritePlaces].sort());
// //Show that your array is still in its original order by printing it.
// console.log("Original order", favoritePlaces);
// //Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("Reverse Order list", [...favoritePlaces].reverse());
// //Show that your array is still in its original order by printing it.
// console.log("Original order", favoritePlaces);
// //Reverse the order of your list. Print the array to show that its order has changed.
// console.log("Reverse Array of list", favoritePlaces.reverse());
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log("back to original ored", favoritePlaces.reverse());
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log("Alphabetical order of original array", favoritePlaces.sort());
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log("Again Reverse Array of list", favoritePlaces.reverse());
// Think of at least five places in the world you’d like to visit.• Store the locations in a array. Make sure the array is not in alphabetical order.• Print your array in its original order.•
var favoritePlacesToVisit = ["itlay", "china", "america", "russia"];
console.log("Original order", favoritePlacesToVisit);
// Print your array in alphabetical order without modifyin the actual list
console.log("Alphabetical order withOut changing  original list", __spreadArray([], favoritePlacesToVisit, true).sort());
//Show that your array is still in its original order by printing it
console.log("original list", favoritePlacesToVisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse order", __spreadArray([], favoritePlacesToVisit, true).reverse());
//Show that your array is still in its original order by printing it
console.log("original list", favoritePlacesToVisit);
// Sort your array so it’s stored in alphabetical order
console.log("Alphabetical order", favoritePlacesToVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabetical order", favoritePlacesToVisit.reverse());
// Question 19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestInvited = ["aisha", "faiza", "mahwish", "salman"];
var lengthOfGuest = guestInvited.length;
console.log("I am inviting ".concat(lengthOfGuest, " for dinner"));
//Question 20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var programmingLanguage = ["typescript", "javaScript", "python", "php"];
console.log("List of Programming Languages :");
//Write a program that creates a list containing these items.
programmingLanguage.forEach(function (languages) { return console.log(languages); });
