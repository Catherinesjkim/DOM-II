// Your code goes here

// ON DOCUMENT LOAD AN ALERT WILL APPEAR TELLLING THE USER THE 9 OTHER THINGS THEY CAN DO WITH THE SITE
window.addEventListener("load", function(event) {
  alert("All resources finished loading! Ready for some FUN? Try scrolling the page, try hovering over the nav logo heading, try double clicking the nav links, try dragging the `Fun Bus` banner image, try pressing a key on your keyboard...but wait...where did the nav bar go?...that's ok, just hover over anywhere inside it to bring it back! Focus the name field in the form to see its background color change and leave its focus, aka blur event, to remove the background color. Try re-sizing the window and see what happens. Click on the `Fun In the Sun packages` div and look in the console to see that you clicked it...do the same with the Sign Me Up button inside that div and notice that it console.logs its own message without console.logging that the div was clicked...that's the power of the stopPropagation method...that's it!");
});

const navLogo = document.querySelector("body");
navLogo.addEventListener("mouseover", (event) => {
  event.target.style.color = "purple";
  navLogo.style.transition = "all 20s";
});

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

const body = document.querySelector("body");
const header = document.querySelector("header");
// PRESS A KEYBOARD KEY AND THE HEADER WILL DISAPPEAR FROM VISION
body.addEventListener("keydown", event => (header.style.opacity = "0"));

const navContainer = document.querySelector(".nav-container");
// MOUSEENTER THE NAVIGATION TO RETURN ITS OPACITY TO 1 TO NEGATE THE ABOVE KEYPRESS OPACITY CHANGE
navContainer.addEventListener("mouseenter", () => (header.style.opacity = "1"));

// ADDS AN ALERT WHEN THE USER FIRST `SCROLLS` WITH THE MOUSE WHEEL BUT THEN REMOVES THAT EVENT SO THEY CAN ACTUALLY NAVIGATE THE SITE
body.addEventListener('wheel', function alertMeOnce() {
  alert("YAAAAAY!!!!!");
  body.removeEventListener('wheel', alertMeOnce);
});

//ALERTS OUCH WHENEVER THE WINDOW IS RESIZED
window.addEventListener('resize', function alertMeOnce() {
  alert('OUCH!');
  window.removeEventListener('resize', alertMeOnce);
});

const funBusPhotos = document.querySelectorAll("img" );
// DRAG THE FUN-BUS INTRO IMAGE TO SCALE IT 150% IN SIZE 
funBusPhotos.forEach(image => {
  image.addEventListener('drag', (event) => event.target.style.transform = 'scale(1.5)');
  image.addEventListener("mouseleave", () => event.target.style.transform = '');
  image.addEventListener("mouseleave", () => event.target.style.transition = 'all 2s');
});

const sunPackage = document.querySelector("#sun");
const mountainPackage = document.querySelector("#mountain");
const islandPackage = document.querySelector("#island");

const signUpButton1 = document.querySelector(".btn");
const signUpButton1Div = document.querySelector(".destination");

// ADDED CONSOLE LOG FOR WHEN FUN IN THE SUN DIV IS CLICKED
signUpButton1Div.addEventListener("click", event => {
  console.log("div-clicked"); // Will only show on the inspect console
});
console.log(signUpButton1Div);

// STOPPING THE BUBBLING OF DIV CLICKED CONSOLE LOG
signUpButton1.addEventListener("click", event => {
  console.log("signup 1 clicked"); // Will only show on the inspect console
  event.stopPropagation();
});

const changeBtnText = document.querySelectorAll('.btn');
changeBtnText.forEach(text => {
  text.addEventListener('click', () => {
    text.textContent = "Almost there!";
  });
});

const nameInput = document.querySelector("#nameForm");
const emailForm = document.querySelector("#emailForm");
const phoneForm = document.querySelector("#phoneForm");
const specialInstructionsForm = document.querySelector("#specialForm");

// ADDS A BACKGROUND COLOR TO THE NAME INPUT WHEN IT IS FOCUSED
nameInput.addEventListener("focus", (event) => {
  nameInput.style.backgroundColor = "lightgreen"
});
// REMOVES THE BACKGROUND COLOR ON THE NAME INPUT WHEN FOCUS IS LEFT...I.E. ON BLUR EVENT
nameInput.addEventListener("blur", (event) => {
  event.target.style.backgroundColor = "inherit"
});

