// Chapter 41, 42 (while loops, do…while loops)
// (All Questions must be done with both loops)
/*
1.	Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0. */
// var i = 0;
// var count = 0;
// while(count < 2){
//   count++;
//   i++;
// }
// console.log("i value after running the loop twice: " + i);
// do while
// var i = 0;
// var count = 0;
// do{
//   count++;
//   i++;
// }while(count < 2);
// console.log("i value after running the loop twice: " + i);
/* 
2.	Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter. Break out of the loop when it's found.
var animals=["horse", "ox", "cow", "pig", "duck"]; */
// var animals=["horse", "ox", "cow", "pig", "duck"];
// var index = 0;
// var found = false;
// while(index < animals.length){
//   if(animals[index] === "pig"){
//     alert("Found it");
//     found = true;
//     break;
//   }
//   index++;
// }
//do while
// var animals=["horse", "ox", "cow", "pig", "duck"];
// var index = 0;
// var found = false;
// do{
//   if(animals[index] === "pig"){
//     alert("Found it");
//     found = true;
//     break;
//   }
//   index++;
// } while(index < animals.length);
/*
3.	Code to use a while & do while loop to print the numbers from 1 to 10. */
// var a = 1;
// while(a <=10){
//   console.log("Hello, World");
//   a++;
// }
// do while
// var a = 1;
// do{
//  console.log("Hello, World" + " " + a );
//   a++
// } while(a<=10);
/*
4.	To use a while loop to ask the user for a number and then print that number back to them. */

/*
5.	To use a while loop to check if a number is even or odd. */
// var num = prompt("Enter a number");
// while(!isNaN(num)){
//   if(num % 2 === 0){
//     alert(num + " is even");
//     num++;
//   }
//   else{
//     alert(num + " is odd");
//   }
//   num = parseInt(prompt("Enter another number"));
// }
// alert("Invalid input or operation canceled");

// do while
// var num = prompt("Enter a number");
// do{
//   if(num % 2 === 0){
//     alert(num + " is even");
//     num++;
//   }
//   else{
//     alert(num + " is odd");
//   }
//   num = parseInt(prompt("Enter another number"));
// }while(!isNaN(num));
// alert("Invalid input or operation canceled");
/*
6.	Create a guessing game where the user has to guess a number between 1 and 100. */
// var secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
// var attempts = 0;

// alert("Welcome to the Guessing Game! Try to guess the secret number between 1 and 100.");

// while (true) {
//   var guess = parseInt(prompt("Enter your guess:"));

//   if (isNaN(guess)) {
//     alert("Please enter a valid number.");
//     continue; // Ignore non-numeric input and continue the loop
//   }
// attempts++;

//   if (guess < secretNumber) {
//     alert("Too low! Try again.");
//   } else if (guess > secretNumber) {
//     alert("Too high! Try again.");
//   } else {
//     alert("Congratulations! You guessed the secret number (" + secretNumber + ") in " + attempts + " attempts.");
//     break; 
//   }
// }

// do while
// var secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
// var attempts = 0;

// alert("Welcome to the Guessing Game! Try to guess the secret number between 1 and 100.");

// do {
//   var guess = parseInt(prompt("Enter your guess:"));

//   if (isNaN(guess)) {
//     alert("Please enter a valid number.");
//     continue; // Ignore non-numeric input and continue the loop
//   }
// attempts++;

//   if (guess < secretNumber) {
//     alert("Too low! Try again.");
//   } else if (guess > secretNumber) {
//     alert("Too high! Try again.");
//   } else {
//     alert("Congratulations! You guessed the secret number (" + secretNumber + ") in " + attempts + " attempts.");
//     break;
//   }
// }while (true);
/*
7.	 Use a while & do-while loop to create a countdown timer? */
// var countdown = 10;{
//   while (countdown > 0 || 0 === "Blastoff!"){
//       console.log(countdown);
//       countdown = countdown - 1;
//   }
//   console.log("Blastoff!");
// }
// do while
// var countdown = 10;{
// do{
//       console.log(countdown);
//       countdown = countdown - 1;
//   }
//   while (countdown > 0 || 0=== "Blastoff!")
//   console.log("Blastoff!");
// }

// Chapter 46, 48 (Events)
/*
1.	Create a simple event that prints a message when the user clicks on an element. */
function clickFun(){
  document.getElementById("para").innerHTML = "Hello World";
}
/*
2.	Create an event that hides an element when the user clicks on a different element. */
function hideFun(){
  document.getElementById("demo").style.display = "none";
}
/*
3.	Create a link that changes color when the user hovers over it and then back to its original color when the user moves the mouse away. */
function colorChange(){
  document.querySelector("a").style.color = "green";
}
function colorFun(){
  document.querySelector("a").style.color = "purple";
}
/*
4.	Create an event that scrolls to the top of the page when the user clicks on a link. */
function topFunction() {
  document.getElementById("scrollToTop");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*
5.	Create a link that plays a sound when the user clicks on it. */
function playSound(){
  var audio = document.getElementById("audio");
  audio.play();
}
/*
6.	Create a simple link that opens a new window when clicked. */
function newTab(){
  window.open("https://google.com", "_blank");
}
/*
7.	Create a simple button that alert a message when clicked. */
function buttonFun(){
  document.getElementById("btn");
  alert("Button is clicked");
}
/*
8.	Create a button that changes color when the user hovers over it. */
function changeColor(){
  document.getElementById("button").style.background = "seagreen";
}
/*
9.	Create a button that plays a sound when the user clicks on it. */
function playAudio(){
  var audio = document.getElementById("sound");
  audio.play();
}
/*
10.	Create an event that alert a message when the user moves the mouse over an element. */
// function mouseOver(){
//   var mouse = document.getElementById("myElement");
//   alert("Mouseover event detected!");
// }
/*
11.	Create an event that hides an element when the user moves the mouse out of it. */
function mouseOut(){
  var mouseOut = document.getElementById("mouseElement").style.display = "none";
}
/*
12.	 Create a link that opens a new window when the user clicks on it and then closes the window when the user clicks on a close button in the new window. The size of the new window should be determined by the user's mouse position. */

// let myWindow;

// function openWin() {
//   myWindow = window.open("", "", "width=250,height=150");
// }

// function closeWin() {
//   myWindow.close();
// }

// Chapter 49, 50 (Reading and Setting field values)
/*
1.	 Read the value of a user Input and print it to the console. */
var userInput = prompt("Enter any number");
console.log(userInput);
/*
2.	Read the value of a checkbox and print it to the console */
function checkFun() {
  var x = document.getElementById("myCheck").value;
  document.getElementById("demo").innerHTML = console.log(x);
}
/*
3.	Read the value of a select box and print it to the console. */
function selectFun() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("option").innerHTML = console.log(x);
}
/*
4.	Place some text in a field. Make up an id for the field. */
const element = document.getElementsByTagName("h3").id = "heading";
console.log(element);
/*
5.	Ask the user about Martial Status. If the variable married is false, place the value "available" in the field with the id "status" */
var maritalStatus = document.getElementById("maritalStatus");
var setStatusButton = document.getElementById("setStatusButton");
setStatusButton.addEventListener("click", function() {
var isMarried = maritalStatus.checked;
var statusField = document.getElementById("status");
if (!isMarried) {
  statusField.value = "available";
}
});
/*
6.	If a input is empty, fill it with a string. */
var input = document.getElementById('test');
if(input === 0){
    input += `Hello World`;
    console.log(input);
}
/*

// Chapter 52 (Manipulating Images and Text)
/*
1.	When the user clicks on the sentence, it turns bold. */
function textFun(){
  document.getElementById("text").style.fontWeight = "bold";
}
/*
2.	How can I make an image disappear when the user hovers over it and show text instead? When the user hovers off the image, the original image should reappear. */
function disappearFun(){
 document.getElementById("image").style.display = "none";
 document.getElementById("para-text").style.display = "block";
}
function showText(){
  document.getElementById("image").style.display = "block";
  document.getElementById("para-text").style.display = "none";
}
/*
3.	When the user mouses over the heading, its background turns black, but it retains its original light gray color */
function changeBg(){
 document.getElementById("heading").style.background = "black";
 document.getElementById("heading").style.color = "#ffffff";
}
/*
4.	When user hover to a paragraph, Add a underline style to text. */
function paraFun(){
  document.getElementById("underline").style.textDecoration = "underline";
}

// Chapter 52 (Swapping Images)
/*
1.	Swap the images when the user clicks on a button. */
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("images/image-2.jpg")) {
      image.src = "images/image-1.jpg";
  }
  else {
      image.src = "images/image-2.jpg";
  }
}