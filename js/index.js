// Your code goes here
const navLogo = document.addEventListener("mouseover", (event) => event.target.style.color = "purple");
// reset the color after a short delay
setTimeout(function () {
  event.target.style.color = "";
}, 200);
false;

const nav = document.querySelector(".nav");
// ADD A BACKGROUND COLOR TO NAV LINKS IF THEY ARE DBCLIKCED
nav.addEventListener("dblclick", (event) => {
  event.target.style.backgroundColor = 'aqua';
});

// PREVENT NAV LINKS FROM RELOADING PAGE
nav.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("clicked on navlink");
});

const signUpButton1 = document.querySelector(".btn");
const signUpButton1Div = document.querySelector(".destination");
// ADDED CONSOLE LOG FOR WHEN FUN IN THE SUN DIV IS CLICKED
signUpButton1Div.addEventListener("click", (event) => {
  console.log("div-clicked"); // Will only show on the inspect console 
})
console.log(signUpButton1Div);

// STOPPING THE BUBBLING OF DIV CLICKED CONSOLE LOG
signUpButton1.addEventListener('click', (event) => {
  console.log("signup 1 clicked"); // Will only show on the inspect console 
  event.stopPropagation(); 
})

const body = document.querySelector('body');
const header = document.querySelector('header');
// PRESS A KEYBOARD KEY AND THE HEADER WILL DISAPPEAR FROM VISION
body.addEventListener("keydown", (event) => header.style.opacity = "0");

setTimeout(function () {
  header.style.opacity = "";
}, 200);
false;
// WORKING

//ALERTS OUCH WHENEVER THE WINDOW IS RESIZED
window.addEventListener('resize', () => {
  alert('OUCH!')
});

const navContainer = document.querySelector(".nav-container");
// MOUSEENTER THE NAVIGATION TO RETURN ITS OPACITY TO 1 TO NEGATE THE ABOVE KEYPRESS OPACITY CHANGE
navContainer.addEventListener("mouseenter", () => header.style.opacity = "1");

// ADDS AN ALERT WHEN THE USER FIRST `SCROLLS` WITH THE MOUSE WHEEL BUT THEN REMOVES THAT EVENT SO THEY CAN ACTUALLY NAVIGATE THE SITE
body.addEventListener('wheel', function alertMeOnce() {
  alert("YAAAAAY!!!!!");
  body.removeEventListener('wheel', alertMeOnce);
});

const funBusBanner = document.querySelector(".intro > img" );
// DRAG THE FUN-BUS INTRO IMAGE TO SCALE IT 150% IN SIZE 
funBusBanner.addEventListener('drag', (event) => event.target.style.transform = 'scale(1.5)');

setTimeout(function (event) {
  event.target.style.transform = "";
}, 200);
false;

// ON DOCUMENT LOAD AN ALERT WILL APPEAR TELLLING THE USER THE 9 OTHER THINGS THEY CAN DO WITH THE SITE
window.addEventListener("load", function(event) {
  alert("All resources finished loading! Ready for some FUN? Try scrolling the page, try hovering over the nav logo heading, try double clicking the nav links, try dragging the `Fun Bus` banner image, try pressing a key on your keyboard...but wait...where did the nav bar go?...that's ok, just hover over anywhere inside it to bring it back! Focus the name field in the form to see its background color change and leave its focus, aka blur event, to remove the background color. Try re-sizing the window and see what happens. Click on the `Fun In the Sun packages` div and look in the console to see that you clicked it...do the same with the Sign Me Up button inside that div and notice that it console.logs its own message without console.logging that the div was clicked...that's the power of the stopPropagation method...that's it!");
});
// WORKING

const sunPackage = document.querySelector("#sun");
const mountainPackage = document.querySelector("#mountain");
const islandPackage = document.querySelector("#island");
const radios = document.querySelector("#fieldset"); 
// Not sure if I need the above.

// const contPick = Object.values(siteContent.contentPick)
// const destBtn = document.querySelectorAll('btn');
// destBtn.forEach((item, index) => item.innerText = contPick[index])

// radios.addEventListener('select', radios.style.backgroundColor = "red");
radios.addEventListener("select", (event) => {
  event.target.style.backgroundColor = 'red'}, false);

const nameInput = document.querySelector("#nameForm");
const emailForm = document.querySelector("#emailForm");
const phoneForm = document.querySelector("#phoneForm");
const specialInstructionsForm = document.querySelector("#specialForm");
// Not sure if it's working

// ADDS A BACKGROUND COLOR THE NAME INPUT WHEN IT IS FOCUSED
nameInput.addEventListener("focus", (event) => {
  nameInput.style.backgroundColor = "orangered"
});
// REMOVES THE BACKGROUND COLOR ON THE NAME INPUT WHEN FOCUS IS LEFT...I.E. ON BLUR EVENT
nameInput.addEventListener('blue', (event) => {
  nameInput.style.backgroundColor = "inherit"
});
// NOT SURE IF IT'S WORKING 

// TRY MAKING SOME EVENTS USING querySelectorAll and using forEach to iterate over the nodelist that it gives me. 