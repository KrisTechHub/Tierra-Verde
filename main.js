//NAV BAR AND TOP DIV FUNCTION
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
        document.getElementById("navigation-bar").style.visibility = "hidden";
  } else if (document.body.scrollTop < 0 || document.documentElement.scrollTop < 1) {
        document.getElementById("navigation-bar").style.top = "40px";
        document.getElementById("navigation-bar").style.visibility = "visible";
  } else {
        document.getElementById("navigation-bar").style.visibility = "visible";
        document.getElementById("navigation-bar").style.top = "0px";
  };

  prevScrollpos = currentScrollPos;
};
//END


//CONTACT PAGE FUNCTION
let form = document.getElementById("form");
let names = document.getElementById("name");
let email = document.getElementById("email");
let comment = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted form");

  formValidation();
});

const formValidation = () => {
  if (names.value === "" || email.value === "" || comment.value === "") {
    alert("Please fill in all fields.");
  } else {
    acceptData();
  }
};

let data = {};
let acceptData = () => {
  data["text"] = {names, email, comment};
  console.log(`Name: ${names.value}, Email: ${email.value}, Comment: ${comment.value}`);
  alert(`Thank you for contacting us, ${names.value}!`);
  form.reset();
  
}
//END


// HOME PAGE SLIDESHOW FUNCTIONS
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  
}
