// window.onscroll = function () {
//   stickIt();
// };
console.log("Hi! Watcha doing here?");
const body = document.querySelector("body");

let header = document.querySelector("header");
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

//Get the button:
mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
