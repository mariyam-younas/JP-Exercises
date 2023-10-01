// Chapter 21 (Changing Case)
/*
1. Type the characters that are missing from this code. var allLower = userInput.toLowerCase;
Note: Correct this statement by yourself.
*/
// var allLower = userInput.toLowerCase();
/*
2. Convert the string represented by x to lower-case and assign the result to the same variable.
*/
// var x = "Hello";
// x = x.toLowerCase();
// console.log(x);
/*
3. Convert the string represented by y to upper-case and assign the result to the same variable.
*/
// var y = "Hello";
// y = y.toUpperCase();
// console.log(y);
/*
4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
*/
// var a = "Hello";
// var b = a.toLowerCase();
// console.log(b);
/*
Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
*/
// var arrayElement = ["Cat"];
// var lowercaseElement = arrayElement[0].toLowerCase();
// console.log(lowercaseElement); 
/*
6. Display in an alert the upper-case version of the string represented by a variable. */
// var arrayElement = "Hello";
// alert(arrayElement.toLowerCase());
/*
7. var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
*/
// var cityName = "kaRacHi";
// cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(cityName);

// Chapter 22 - 25 (Strings)
/*
1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
*/
// var sameWords = "captain";
// var words = sameWords.slice(1, 3);
// console.log(words);
/*
2. The number of characters in the string will be assigned to the variable.
*/
// var cityName = "Lahore";
// var characterCount = cityName.length;
// console.log(characterCount); 
/*
3. The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.
*/
// var animal = "elephant";
// var seg = animal.slice(2, 6);
// console.log(seg);
/*
4. Find the number of characters in the string represented by a variable and assign the number to a second variable.
*/
// var cityName = "Lahore";
// var count = cityName.length;
// console.log(count);
/*
5. In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.
*/
// var cityName = "Islamabad";
// console.log(cityName.length);
// var wordsCount = cityName.charAt(0) + cityName.slice(6, 9);
// console.log(wordsCount);
/*
6. var text = "To be or not to be."; var indx = text.indexOf("be"); What is the value of indx? */
// Answer: the value of indx = 3;
/*
7. var text = "To be or not to be."; var indx = text.lastIndexOf("be"); What is the value of indx?
Note: Try the above both examples by yourself. */
// Answer: the value of indx = 16;
/*
8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
*/
// var instance = "go";
// var indx = instance.indexOf("g", 0);
// console.log(indx);
/*
9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
*/
// var strText = "Lorem ipsum dolor amit";
// var indexNum = strText.indexOf("r");
// console.log(indexNum);
// if(indexNum >= 0 && indexNum < strText.length){
//   alert("The segment with indexNum exists in a string");
// }
// else{
//   alert("The segment with indexNum does not exists in a string");
// }
/*
10. In this string "abcde", what character is at index 2? (Use charAt)
*/
// var alphabet = "abcde";
// var indexNum = alphabet.charAt(2);
// console.log(indexNum);
/*
11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
*/
// var text = "Lorem ipsum dolor amit";
// var cha = text.charAt(9);
// console.log(cha);
/*
12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
*/
// var str = "Lorem";
// var x = str.lastIndexOf("m");
// console.log(x);
/*
13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
*/
// var input = "Lorem ipsum";
// var cha = input.charAt(4);
// console.log(cha);
/*
14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
*/
// var text = "Lorem ipsum";
// if(text.length >= 3 && text.charAt(2) === "r"){
//   alert("Particular Character");
// }
// else{
//   alert("Not a particular character");
// }
/*
15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.
*/
// var cityName = "Azad Kashmir";
// var arrayElement = [];
// for(let i=0; i<cityName.length; i++){
//   arrayElement.push(cityName.charAt(i));
// }
// console.log(arrayElement);
// var strReply = "no";
// var revisedReply = strReply.replace("no", "yes");
// console.log(revisedReply);
/*
16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
*/
// var str = "1";
// var newStr = str.replace("1", "one");
// console.log(newStr);
/*
17. If you want all instances replaced, enter 3 characters that need to appear in this statement.
var y = x.replace("a", "z");
*/
// var x = "abc";
// var y = x.replace("a", "z");
// console.log(y);

// Chapter 26 (Rounding Numbers)
/*
1. Form a statement that rounds a number to the nearest integer.
*/
// var number = 5.4;
// var roundedNum = Math.round(number);
// console.log(roundedNum);
/*
2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
*/
// var origNum = 10.3;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);
/*
3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand. */
// var origNum = 9.7;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);
/*
4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared  beforehand. */
// var origNum = 15.4;
// var roundNum = Math.round(origNum);
// console.log(roundNum);
/*
5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand. */
// var origNum = 0.5;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);

// Chapter 27 (Random Numbers)
/*
1. Convert a random number generated by JavaScript to a number in the range 1 to 50
*/
// var randomNum = Math.random();
// var numInRange = Math.floor(randomNum * 50) + 1;
// console.log(numInRange);
/*
2. Generate a random number and assign it to a variable that hasn't been declared beforehand.
*/
// var randomNum = 55;
// var number = Math.random(randomNum);
// console.log(number);
/*
3. You have to create a dice in JavaScript with the use of pseudo- random number. */
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);
/*
4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
*/
var coinToss = prompt("heads or tails?");
console.log(coinToss);
var headTails = function() {
    var outCome = Math.floor(Math.random() * 2) + 1;
    if (outCome === 1) {
        outCome = "heads";
    } else {
        outCome = "tails";
    }
};
console.log(outCome);
var compare = function(outCome, coinToss) {
    if (outCome === coinToss.toLowerCase) {
        document.write("You Win!");
    }  else {
        document.write("You Loss!")
    };
};  
// Chapter 28, 29 (Converting Strings)
/*
1. How do you convert a string to an integer in JavaScript?
*/
// var str = "20";
// var convertString = parseInt(str);
// console.log(typeof convertString);

/*
2. Write a JavaScript function to convert the string "123" to an integer. */
// function strConversion(str){
//   return parseInt(str)
// }
// var str = "123";
// var convertString = strConversion(str);
// console.log(convertString);
// console.log(typeof convertString);
/*
3. How can you convert a string containing a decimal number to a floating-point number in JavaScript? */
// var strDecimal = "3.1415";
// var convertString = parseFloat(strDecimal);
// console.log(typeof convertString);
/*
4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion? */
/*
5. How can you convert a number to a string in JavaScript? */
// var number = 20;
// var convertintoString = number.toString();
// console.log(typeof convertintoString);
/*
6. Write a JavaScript function to convert the number 42 to a string.*/
// function integerConversion(number){
//   return toString(number);
// }
// var number = 42;
// console.log(typeof number);
// var convertInteger = integerConversion(number);
// console.log(typeof convertInteger);
/*
7. Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how? */
// var str = "3.14";
// var convertString = parseInt(Math.round(str));
// console.log(convertString);

//Chapter 30 (Controlling the length of decimals)
/*
1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand. 
*/
// var num = 5.65;
// var roundedNum = num.toFixed(4);
// console.log(roundedNum);
// console.log(typeof roundedNum);
/*
2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
*/
// var num = 5.650;
// num = parseFloat(num.toFixed(2));
// console.log(num);
// console.log(typeof num);
/*
3. Code  the  first  line  of  an  if  statement  that  tests  whether  the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it. */
// var num = 5.64000;
// if (num.toFixed(2).length > 4) {
//   num = num.toString();
// } 
// console.log(num);
/*
4. Assign a number with many decimal places to a variable.
Code an alert that displays the number rounded to 2 decimal places and converted to a string.
*/
// var num = 5.6555444;
// num = num.toFixed(2);
// alert(num);

// Chapter 31 - 34 (Date & Time)
/*
1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
*/
// var currentDate = new Date();
// var dObj = currentDate;
// console.log(dObj);
/*
2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand. */
// var currentDate = new Date();
// var dStr = currentDate.toString();
// console.log(typeof dStr);
/*
3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand. */
// var d = new Date();
// var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day = dayOfWeek[d.getDay()];
// console.log(day);
/*
4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index. */
// var d = new Date();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var arrayIndex = d.getDay();
// var day = dayNames[arrayIndex];
// alert("Day is: " + day + " and " + "Index is: " + arrayIndex);
/*
5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand. */
// var currentDate = new Date();

// var currentYear = currentDate.getFullYear();
// var currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-indexed
// var currentDay = currentDate.getDay();
// var currentHours = currentDate.getHours();
// var currentMinutes = currentDate.getMinutes();
// var currentSeconds = currentDate.getSeconds();

// console.log("Year: " + currentYear);
// console.log("Month: " + currentMonth);
// console.log("Day: " + currentDay);
// console.log("Hours: " + currentHours);
// console.log("Minutes: " + currentMinutes);
// console.log("Seconds: " + currentSeconds);
/*
6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand. */
// var later = new Date("2020-12-31");
// console.log(later);
/*
Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
*/
// var dateObj = new Date("1992-02-02");
// console.log(dateObj);
/*
8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.*/
// alert(new Date(1980, 0, 1).getTime() - new Date(1970, 0, 1).getTime());
/*
9. How do you change the year of a date in JavaScript? */
// var dateObj = new Date();
// var newYear = 2025;
// dateObj.setFullYear(2025);
// console.log(dateObj);
/*
10. Write a JavaScript function to change the month of a given date to January. */
// function dateChange(){
//   var monthDate = new Date();
//   var setDate = (2023, 0, 16);
//   monthDate.setMonth(0);
//   console.log(monthDate);
// }
// dateChange();
/*
11. What is the method to change the day of the week for a specific date in JavaScript?  */
// var myDate = new Date(); 
// var dayOfWeek = 6;
// var currentDay = myDate.getDay();
// var dayChange = dayOfWeek - currentDay;
// myDate.setDate(myDate.getDate() + dayChange);
// console.log(myDate); 
/*
12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt) */

/*
13. Write a JavaScript function to add a specific number of hours to a given time.*/
// function addHours(now, add){
//   var h = (now + add) % 24;

//   return h < 0 ? 24 + h : h;
// };
// addHours(3, 5);
// addHours(23, 4);
// addHours(21, -5);
/*
14. You have to create a age calculator in JavaScript. */
// function ageCalculator() {  
//   var userinput = document.getElementById("DOB").value;  
//   var dob = new Date(userinput);  
//   if(userinput==null || userinput=='') {  
//     document.getElementById("message").innerHTML = "**Choose a date please!";    
//     return false;   
//   } else {  
//   var month_diff = Date.now() - dob.getTime();  
//   var age_dt = new Date(month_diff);    
//   var year = age_dt.getUTCFullYear();  
//   var age = Math.abs(year - 1970);  
//     return document.getElementById("result").innerHTML =    
//              "Age is: " + age + " years. ";  
//     }  
// }  
// ageCalculator()

// Chapter 35 - 37 (Functions)
/*
1. Code the first line of a function displayAlert.
*/
// function displayAlert(){
//   alert("Hello World")
// }
// displayAlert(); 
/*
2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand. */
// function askName(){
//   var enterName = prompt("Enter name");
//   var userName = enterName;
//   console.log(userName);
// }
// askName();
/*
3. Code a function that calls 2 other functions. */

/*
4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function. */
// function askName(){
//   var enterName = prompt("Enter your name");
//   alert(enterName);
// }
// askName();
/*
5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments. */
// function concat(a, b, c){
//   return variableName, str, num;
// }
// var variableName = "true";
// var str = "Hello, World";
// var num = 20;
// concat(variableName, str, num);

/*
6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.*/
// function concatFun(a, b){
//   var result = a + b;
//   return result;
// }
// var str1 = "Jawan";
// var str2 = " Pakistan";
// var concateString = concatFun(str1, str2);
// console.log(concateString);
/*
7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet. */
// function mulFun(a, b, c){
//   var result = a * b * c;
//   return result;
// }
// var mulNum1 = 5, mulNum2 = 10, mulNum3 = 7;
// var multiplyNum = mulFun(mulNum1, mulNum2, mulNum3);
// console.log(multiplyNum);

/*
8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers. */
// function arrayAverage(num){
//   if(num.length === 0){
//     return 0;
//   }
//   var sum = 0;
//   for(var i=0; i<num.length; i++){
//     sum += num[i];
//   }
//   return sum/num.length;
// }
// var arrayNum = [1, 4, 7, 9, 12, 15, 20, 22];
// var average = arrayAverage(arrayNum);
// console.log("The average of numbers is: " + Math.round(average));
// /*
// 9. Write a JavaScript function that takes two parameters and returns their sum. */
// // function additionFun(a, b){
// //   return a+b;
// // }
// // var add1 = 10, add2 = 35;
// // var addition = additionFun(add1, add2);
// // console.log(addition);
// /*
// 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers. */
// function arrayAverage(num){
//   if(num.length === 0){
//     return 0;
//   }
//   var sum = 0;
//   for(var i=0; i<num.length; i++){
//     sum += num[i];
//   }
//   return sum/num.length;
// }
// var arrayNum = [2, 5, 8, 10, 13, 15, 21, 30];
// var average = arrayAverage(arrayNum);
// console.log("The average of numbers is: " + Math.round(average));
/*

11. You have to capture the returned value from a function and store it in a variable?  */
// function captureValue(a){
//   return a;
// }
// var value = 14;
// var returnValue = captureValue(value);
// console.log(returnValue);
/*
12. Write a function which tells letter counts of (word).  */
// function wordsCount(str, letter){
//   var letterCount = 0;
//   for(let i=0; i<str.length; i++){
//     if(str.charAt(i) == letter){
//       letterCount += 1;
//     }
//   }
//   return letterCount;
// }
// console.log(wordsCount("Jawan Pakistan", "a"));
/*
13. Write a function to set (year) in date object.  */
// function changeYear(){
//   userDate = new Date()
//   document.write("Before Change the Year : "+userDate+"<br/>")
//   changeDate = userDate.setYear(2025)
//   document.write("After changing Year : "+userDate+"<br/>")
// }
// changeYear();
/*
14. Write a function which tells the age of a person who Born on (dateOfBirth)  */
// function personAge(dateOfBirth){
//   var dob = new Date(dateOfBirth);
//   var currentDate = new Date();
//   var age = currentDate.getFullYear() - dob.getFullYear();
//   if(currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth === dob.getMonth() && currentDate.getDate() < dob.getDate())){
//     age --;
//   }
//   return age;
// }
// var dateOfBirth = "2003-10-30";
// var calculatedAge = personAge(dateOfBirth);
// console.log("Age: " + calculatedAge);
/*
15. Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false  */
// function checkWord(word, wordArray) {
//   return wordArray.includes(word);
// }

// var wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var wordToCheck = 'raza';

// var isWordPresent = checkWord(wordToCheck, wordArray);

// console.log(isWordPresent);
/*
16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10) */
// function repeatLetter(){
//   var letter = "abcde";
//   var repetation = letter.repeat(10);
//   console.log(repetation);
// }
// repeatLetter();
/*
17. write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse() */
// function reverseArray(){
//   var arrayElement = ['a','b','c','d','e'];
//   var reverseResult = arrayElement.reverse();
//   console.log(reverseResult);
// }
// reverseArray();

// Chapter 38 (Local vs. Global Variables)
/*
1. Write a JavaScript function that demonstrates the usage of a local variable. */

// function sumofTwo(){
//   var a = 5;
//   var b = 10;
//   var c = a+b;
//   console.log(c);
// }
// sumofTwo();
/*
2. How can you access a global variable inside a function in JavaScript? */
// var a = 15, b = 10;
// function subofTwo(){
//   var c = a - b;
//   console.log(c);
// }
// subofTwo();

// Chapter 39, 40 (Switch Statements)
/*
1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
*/
// var car = "carola";
// switch(car){
//   case "carola":
//     console.log("I like black carola car");
//     break;
//   case "audi":
//     console.log("I am thinking to buy audi soon.");
//     break;
//   default:
//     console.log("It's not a car");
// }
/*
2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.
*/
// var cityName = prompt("Enter city name");
// switch(cityName){
//   case "lahore":
//     console.log("City of gardens");
//     break;
//   case "islamabad":
//     console.log("Capital of Pakistan");
//     break;
//   case "karachi":
//     console.log("City of lights");
//     break;
//   default:
//     console.log("Please enter correct city name");
// }