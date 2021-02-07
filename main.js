// window.onscroll = function () {
//   stickIt();
// };
console.log("Hi! Watcha doing here?");
const body = document.querySelector("body");

let header = document.querySelector(".container");
let otsikko1 = document.querySelector("h1");
let fixed = header.offsetTop;

const stickIt = (event) => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("fixed");
    otsikko1.classList.add("topPadding");
    // header.getElementsByClassName.background = "#ffffffb3";
  } else {
    header.classList.remove("fixed");
    otsikko1.classList.remove("topPadding");
  }
};

window.addEventListener("scroll", stickIt);

// let body = document.querySelector("body");
// let header = document.querySelector(".container");

// const containerFixed = () => {
//   event.preventDefault();
//   (".container");
// };

// body.addEventListener("scroll", containerFixed);
