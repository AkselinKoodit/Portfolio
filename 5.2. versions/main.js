// window.onscroll = function () {
//   stickIt();
// };
console.log("Hi! Watcha doing here?");
const body = document.querySelector("body");

let header = document.querySelector(".container");
let fixed = header.offsetTop;

const stickIt = (event) => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("fixed");
    // header.getElementsByClassName.background = "#ffffffb3";
  } else {
    header.classList.remove("fixed");
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
