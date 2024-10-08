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
console.log(loginForm)

//Open Login forn
signupButton.addEventListener("click", ()=>{
    loginForm.classList.add("showForm")
})

//Close Login form
loginCloseButton.addEventListener("click",()=>{
  loginForm.classList.remove("showForm")
})

const observer = new IntersectionObserver(
  (entries)=> {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("in-view")
    entry.target.classList.remove('not-in-view')
  } else {
    entry.target.classList.remove("in-view")
    entry.target.classList.add('not-in-view')
  } 
})
},
{
  rootMargin: '0px',
  threshold: [0, 0.1, 1]
},)

const tags = document.querySelectorAll('.fade')

tags.forEach((tag) => {
  observer.observe(tag)
})

const readMoreBtn = document.querySelector("#readmoreBtn");
let more = document.querySelector(".moreSec");

readMoreBtn.addEventListener("click",()=>{

  if (more.classList.contains("viewMore")){
    more.classList.remove("viewMore")
    readMoreBtn.innerHTML = `<p>Read More</p>
            <i class='bx bxs-chevron-down htmlcss-arrow arrow'></i>`;
  }else{
    more.classList.add("viewMore")
    readMoreBtn.innerHTML = `<p>Read Less</p>
            <i class='bx bxs-chevron-up htmlcss-arrow arrow'></i>`;
  }
})