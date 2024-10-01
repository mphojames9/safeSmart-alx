// search-box open
let navbar = document.querySelector(".navbar");

// sidebar open close
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}

menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}

let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

//login form popup
const signupButton = document.querySelector(".sign-in-button")
const loginForm = document.querySelector(".login-popup")
const loginCloseButton = document.querySelector(".closeLoginForm")

//Open Login forn
signupButton.addEventListener("click", ()=>{
    loginForm.classList.add("showForm")
})

//Close Login form
loginCloseButton.addEventListener("click",()=>{
  loginForm.classList.remove("showForm")
})