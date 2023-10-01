// Chapter-01 Alert
/*
1. Alert these following (individually): 
I.    First Name
II.   Last Name
III.  Email
IV.   Phone Number
V.    Password
*/

// alert("First Name: Mariyam");
// alert("Last Name: Younas");
// alert("Email: example@gmail.com");
// alert("Phone Number: 0320-1234567");
// alert("Password: 1234");

/*
2. Correct this statement: alert"You're learning JavaScript!";
*/
// alert("You're learning JavaScript!");
/*
3. Code an alert statement displaying any message you like.
*/
// alert("I am learning Web 3.O from Jawan Pakistan.");

// Chapter 2 (Variables for string)
/*
1. Declare any variable in the camelCase format.
*/
// const firstName = "Mariyam";
// console.log(firstName);

/*
2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
*/
// let text;
// text = "Hello World!";
// console.log(text);

/*
Declare the variable teamName and Alert your Team name.
*/
// let teamName = "Barcelona Team";
// alert(teamName);
/*
This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
*/
// var bestMan = "Charlie";
// bestMan = "Chaplin";
// console.log(bestMan);

// Chapter 3 (Variables for numbers)
/* 
1. Declare a variable “caseQty”
*/
// var caseQty = 20;
// console.log(caseQty);
/*
2. Assign to the variable caseQty, which has already been declared, the value 144.
*/
// caseQty = 144;
// console.log(caseQty);
/*
3. Rewrite this statement so the variable can be used in a math operation. var num = "9";
*/
// var num = "9";
// var num = parseInt("9");
// console.log(typeof num);
/*
4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
*/
// var result;
// result = 5+20;
// console.log(result);

/*
5. What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge; Try it yourself.
*/
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge; 
// console.log(orderTotal);

/*
6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.
*/
// var num = 20;
// num = num + 15;
// console.log(num);

// Chapter 4 (Variable names Legal and Illegal)
/*
1. Correct this statement. var product cost = 3.45;
*/
// var productCost = 3.45;
// console.log(productCost);
/*
2. Rewrite this using camelCase. var Nameofband;
*/
// var nameofBand;
/*
3. In a single statement declare a legally-named variable and assign a number to it.
*/
// var legalNumber = 10;
// console.log(legalNumber);
/*
4. Declare a variable that is a combination of your first and last names. Use camelCase.
*/
// 5. List the legal and Illegal Variables.
/*
Legal Variables:  Variable names can consist of letters (both uppercase and lowercase), digits, underscores, and dollar signs.
Examples of legal variable names:
1. myVar
2. _count
3. $value
4. item123
5. FirstName
Illegal Variables: Variable names cannot be JavaScript reserved words or keywords. These are words that have special meanings in the language.
Examples of illegal variable names:
1. var
2. function
3. if
4. else
5. while
*/
// Chapter 5 (Math Expression I)
/*
1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
*/
//Answer: The name of arithmetic operator is modulus and its symbol is (%).
/*
2. What is the value of num? var num = 20 % 6; */
// var num = 20 % 6;
// console.log(num); 
/*
3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000. */
// var largeNum;
// largeNum = 1000 * 2000;
// console.log(largeNum);
/*
4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable */
// var subNumber1 = 30;
// var subNumber2 = 5;
// var result = subNumber1 - subNumber2;
// console.log(result);
/*
5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name. */
// var divNumber1 = 15;
// var divNumber2 = 4;
// var reminder = divNumber1 % divNumber2;
// console.log(reminder);
/*
6. Code an alert that displays the result of a multiplication on 2 numbers. */
// var mulNumber1 = 5;
// var mulNumber2 = 10;
// var result = mulNumber1 * mulNumber2;
// alert(result)

// Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal expressions.
// var x = 4;
// x += 1;
// console.log(x);
// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
//Answer: var x = 100;
// x -= 1;
// console.log(x);
/* 
3. var x = 50;
var y = x++;
What is the value of y?
*/
// var x = 50;
// var y = x++;
// console.log(y);
/*
4. var y = 50; var z = --y;
// What is the value of z?
*/
//Answer: The value of z is 49.
// var y = 50; 
// var z = --y;
// console.log(z);
// 5. In a single statement, decrement num and assign its original value to newNum.
// 6. In a single statement add 1 to a variable and assign its original value to another variable.
// 7.  Assign a number value to a variable. Increment the variable.
// Display the new value in an alert

// Chapter 7 (Math Expression III)
// 1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?
// Answer: The answer of calculatedNum = 14
// 2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?
// Answer: The answer of calculatedNum = 24
// 3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?
// Answer: The answer of calculatedNum = 24
// 4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?
// Answer: The answer of calculatedNum = 18
// Note: Try all the above equations yourself.
// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
//Answer: var result = (2 + 2) * (4 + 10);
// console.log(result);
/*
6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
*/
// Answer: var result = 2 + (2 * 4) + 10;
// console.log(result);
// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
// var result = (4 / 2) * 4;
// console.log(result);

// Chapter 8 (Concatenating Text Strings)
/*
var num = "2" + "2"; 
What is the value of num? Include quotation marks. */
// Answer: The answer of above num is 22.
/*
2. message = ("Hello," + "Dolly");
What is the value of message? (Include the quotation marks.) Alert the statement. */
// Answer: var message = ("Hello," + "Dolly");
// alert(message);
/*
3. alert("33" + 3);
What message displays in the alert box?*/
// Answer: The message displays in the alert box is 333.
/*
Write an alert that displays the concatenation of the two parts of 
"Pakistan Zindabad".
*/
// alert("Pakistan" +" " + "Zindabad ❤");
/*
5. Write a statement that assigns to a variable the concatenation of a string with a number. */
/*
6. Assign strings to two variables. Then concatenate them and assign the result to a third variable. */
// var stringValue1 = "Hello";
// var stringValue2 = "World!";
// var stringResult = stringValue1 + " " + stringValue2;
// console.log(stringResult);

// Chapter 9 (Prompts)
/*
1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
*/
//prompt("Enter first name: ")
/*
2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
*/
var country  = prompt("Enter country name");
var default_answer = "China";
console.log(country);
/*
3. Correct this statement
var yourName = prompt(Enter Your Name");
*/
// var myName = prompt("Enter your name");
/*
4. Code a prompt that specifies a string as the message Include a default input. */
// var stringText = prompt("Enter your message", "Hello World!");
/*
5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.
*/
// var text1 = "Enter any message: ";
// var text2 = "Hello World!";
// var text3 = prompt(text1, text2);
/*
6. Display a prompt, including both a message and a default response.
Display the user's response in an alert.
*/
// var text = "Message here!"
// var responseText = "Hello";
// var result = prompt(text, responseText);
// alert(responseText);

// Chapter 10 (if statments)
/*
1. var city = "Karachi"
if (city = "Karachi") {
console.log("The City OF Lights") Correct the above statement: Also try this statement by yourself
*/
var city = "Karachi"
if (city === "Karachi") {
console.log("The City OF Lights");
}
/*
2. This is the first line of an if statement: if (x === y) {
Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.
*/
// var x = 20, y = 20;
// if(x===y){
//  var z = prompt("Enter value of z");
//  console.log(z);
// }
/*
3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")
*/
// var zipCode = prompt("Enter zip code");
// if(zipCode === "10010"){
//   alert("Karachi");
// }else{
//   alert("Please write correct zipcode");
// }
/*
4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;
*/
// var textValue = 20;
// if(textValue === 20){
//   textValue = 22;
// }
// console.log(textValue);

// Chapter 11 (Comparison Operators)
/*
1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)
*/
// var x = 10, y = 20;
// if (x !== y){
//   console.log("Values are unqual");
// }
/*
2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.
*/
// var x = 20, y = 15;
// if(x > y){
//   console.log("x is greater than to y");
// }
// else{
//   console.log("x is equal to y");
// }
/*
3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.
*/
// var x = 30;
// if (x !== 35){
//   x = 40;
// }
// console.log(x);

/*
4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.
*/
// var x = 10, y = 5;
// if(x !== y){
//   alert("Congratulations!")
// }
/*
5. Code a prompt asking for your first name.
Code an if statement that tests whether the name you entered is unequal to another name.
If the condition is true (it will be), display an alert that says "No match"
*/
// var firstName = prompt("Enter your first name: ");
// if (firstName !== "Amy"){
//   alert("No Match! Please try again.")
// }
// else{
//   alert("Good Job! ")
// }

// Chapter 12 (if…else and else if statements)
/*
1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
*/
// var a = 20, b = 25;
// if(a === b){
//   alert("You did it! 🤩");
// }
// else if(a >= b){
//   alert("Keep trying");
// }
// else if(a <= b){
//   alert("So close!");
// }
// else{
//   alert("Better luck next time!");
// }
/*
2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET)
*/
// var marks = prompt("Enter your marks");
// var total = 100;
// var percentage = (marks/total)*100;
// if(percentage >= 90){
//   alert("A grade");
// }
// else if(percentage >= 70){
//   alert("B grade");
// }
// else if(percentage >= 50){
//   alert("C grade");
// }
// else{
//   alert("F grade");
// }
/*
3. This is the if statement that begins the code. if (a === 10) {
alert("a is 10"); }
If a isn't 10, display an alert that says The correct value of a is
____
Note: Try this by yourself
*/
// var a = 15;
// if (a === 10) {
//   alert("a is 10"); 
// }
// else{
//   alert("The correct value of a is: " + a);
// }
/*
4. Prompt the user to enter a city.
If the city is Karachi, display an alert acknowledging it is Karachi. If not, check to see if it's Lahore.
If it is, display an alert acknowledging it's Lahore. Otherwise, display a different alert.
*/
// var city = prompt("Enter city name");
// if(city === "Karachi" || city === "karachi"){
//   alert("It is Karachi");
// }
// else if(city === "Lahore" || city === "lahore"){
//   alert("It is Lahore");
// }
// else{
//   alert("Enter correct city name");
// }

// Chapter 13 (Testing sets of conditions)
/*
1. Code the first line of an if statement that tests whether both are 
true: a has the same value as b and c has the same value as d.
*/
// var a = 5, b = 5;
// var c = 10, d = 10;
// if(a === b && c === d){
//   alert("true");
// }
/*
2. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.
*/
// var a = 5, b = 5;
// var c = 15, d = 10;
// if(a === b || c !== d){
//   alert("true");
// }
/*
3. Code the first line of an if statement that tests whether 
I.    name is either "Hamza" or "Arsalan".
II.    age is Less than 60.
*/
// var stdName = "Hamza";
// var age = 31;
// if(stdName === "Hamza" || stdName === "Arsalan"){
//   alert(stdName);
// }
// if(age < 60){
//   alert("Age is less than 60");
// }
/*
4. Declare two variables and assign them number values.
If the first variable is less than the second variable or greater than the second variable, display an alert.
*/
// var a = 20, b = 25;
// if(a > b || a < b){
//   alert("The consition is satisfied");
// } 
/*
5. Declare 2 variables. Assign one of them your first name and the other one your last name.
Code 2 prompts, asking for your first and your last name. If your answers match the two variables, display an alert.
*/
// var firstName = "Mariyam";
// var lastName = "Younas";
// var lowercaseFirstName = firstName.toLowerCase();
// var lowercaseLastName = lastName.toLowerCase();
// var userfirstName = prompt("Enter your first name");
// var userlastName = prompt("Enter your last name");
// if(lowercaseFirstName === userfirstName && lowercaseLastName === userlastName){
//   alert("You did an amazing job! ");
// }
// else{
//   alert("No Match");
// }

// Chapter 14 (If statements nested)
/*
1. Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5, then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".
*/
// var password = prompt("Enter your pasword");
// if(password !== ''){
//   if(password.length <= 5){
//     alert("Password must be greater than 5");
//   }
//     if(password.length > 5){
//       alert("Ok");
//     }
//   }
/*
Try this statement by yourself if (a === 1) {
if (c === "Max") { alert("OK"); }
}
*/
/*
Declare two variables and assign them the same number value. Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.
*/
// var a = 10, b = 10;
// if(a === b){
//   if(a <= b){
//     alert("a is equal to b");
//   }
// }

// Chapter 15 (Array I)
/*
Declare an empty array.
*/
// var emptyArray = [];
/*
2. Code an array with 1 string element
*/
var stringArray = ["Hello"];
/*
3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index
*/
// var alphabet = ["h","i","j","k"];
// alert(alphabet[2]);
/*
4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
*/
// var alphabet=["h","i","j","k", "l","m", "n", "o"];
// alert(alphabet.length);

/*
5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.
*/
// var arrayElement = ["Hello"];
// arrayElement[1] = "Dolly";
// alert(arrayElement)
// alert(arrayElement[1]);

// Chapter 16 (Array II)
/*
1. Code an array with 1 string element.
Add an additional element to the array using push. Create an alert whose message is the last element.
*/
// var arrayElement = ["Jawan"];
// arrayElement.push("Pakistan");
// alert(arrayElement[1]);
/*
2. var Alphabet=["h","i","j","k"]
Remove the last element from the array Alphabet.
*/
// var alphabet=["h","i","j","k"];
// alphabet.pop();
// alert(alphabet);
/*
3. var alphabet=["h","i","j","k"]
Add a new element, a number, to the end of an array.
*/
// var alphabet=["h","i","j","k"];
// alphabet.push(4);
// alert(alphabet);

//Chapter 16 (Array III)
/*
1. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Remove the first element of an array.
*/
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift(1, 1);
// alert(sizes);
/*
2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Add three number elements to the beginning of an array.
*/
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1,4,7);
// alert(sizes);
/*
3. Declare an array with one element.
Add a second element to the beginning of the array. Create an alert whose message is the new first element.
*/
// var arrayElement = ["Jawan"];
// arrayElement.unshift("Pakistan");
// alert(arrayElement[0]);
/*
4. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Insert "L" into the array between "M" and "XL".
*/
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2,0, "L");
// alert(sizes);
/*
5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Copy the first 3 sizes of the array and put them into a new array, regSizes.
*/
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0,3);
// alert(regSizes);
/*
6. var pets = ["dog", "cat", "ox", "duck", "frog"].
Add 2 elements after "dog" and remove "cat", "ox", and "duck".
*/
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "cow", "parrot");
// alert(pets);
/*
7. var pets = ["dog", "cat", "ox", "duck", "frog"]; Remove "cat" and "ox".
*/
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2);
// alert(pets);
/*
8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; Reduce it to "duck" and "frog" using slice. */
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedSize =  pets.slice(3, 5);
// alert(reducedSize);

// Chapter 17 - 20 (for Loops)
/* 
1. Write a statement in which loop is to run 10 times. */
// for (i=1; i<= 10; i++){
//   console.log("Hello, World");
// }
/*
2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.
*/
// for (i=1; i<= 12; i++){
//   console.log("Hello, World" + " " + i);
// }
/*
3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.
for var i = 0 i <= 4 i++
Note: Complete this statement by yourself
*/
// for (var i = 0; i <= 4; i++){
// }
/*
4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
*/
// for(let n=1; n<=100; n++){
//   console.log("Jawan Pakistan"+ " " + n);
// }
/*
5. Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.
*/
// for(let n = 4; n > 1; n--){
//   console.log(n);
// }
/*
6. The statement assigns the number of elements in the array to the variable.
*/
// var arrayElement = ["cat", "dog", "ox", "crow", "frog"];
// var numElements  = arrayElement.length;
// console.log(numElements);
/*
7. Set a variable named “flag” with an initial Boolean value of your choice.
*/
var flag = true;
/*
8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
*/
// var arrayPets = ["cat", "dog", "ox", "crow", "frog"];
// for(let i = 1; i < 4; i++){
//   console.log(arrayPets[i]);
// }
/*
9. Coding Exercise:
Set a for loop to run 10 iterations.
On the second iteration, display the counter in an alert. (It should be 1.)
Break out of the loop.
*/
// for (let i=1; i<=10; i++ ){
//   if(i === 2){
//     alert("It should be 1");
//     break;
//   }
// }
/*
10. Create an array which contains user names
Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names. Code an if statement that tests the presense of (user name) in an array.
If user name match Alert that "Enter". if not then alert ("Please write correct user name").
*/
// var userNames = ["Amy", "Annie", "Anna", "Maryam", "Saher"];
// var firstName = prompt("Enter first name");
// var usernameFound = false;
// for(let i=0; i<userNames.length; i++){
//   if(firstName === userNames[i]){
//     usernameFound = true;
//     break;
//   }
// }
// if(usernameFound){
//   alert("Enter");
// }
// else{
//   alert("Please write correct user name");
// }
/*
11. Complete this code to display an alert if a match isn't found. var matchFound = false;
for (var i = 0; i < list.length; i++) { if (userInput === list[i]) { alert("Match found"); matchFound = true;
break; }
}; */
var matchFound = false;
// var list = ["Amy", "Annie", "Anna"];
// var userInput = prompt("Enter your name");
// for (var i = 0; i < list.length; i++){ 
//   if (userInput === list[i]){ 
//     alert("Match found"); 
//     matchFound = true;
//     break; 
//   }
// }; 
/*
12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”]; var secondArr = [1, 2, 3, 4, 5, 6];
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr.
In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr.
After that concatenate the both loops. Expected Output:
a1 a2 a3 a4
… f6
*/
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < firstArr.length; i++) {
//   for (var j = 0; j < secondArr.length; j++) {
//     console.log(firstArr[i] + secondArr[j]);
//   }
// }


