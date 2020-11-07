document.getElementById("menu").addEventListener("change", function () {
  if (document.getElementById("menu").checked) {
    document.getElementById("logo-image").src =
      "./images/logo-bookmarkWhite2.svg";
    document.getElementById("hamburguer").src = "../../images/icon-close.svg";
    document.querySelector(".header").classList.add("black-style");
  } else {
    document.getElementById("logo-image").src = "./images/logo-bookmark.svg";
    document.getElementById("hamburguer").src = "./images/icon-hamburger.svg";
    document.querySelector(".header").classList.remove("black-style");
  }
});

//QUESTIONS SECTION
document
  .getElementById("checkboxQuestions")
  .addEventListener("change", function () {
    const arrow = document.getElementById("arrow");
    if (document.getElementById("checkboxQuestions").checked) {
      arrow.src = "./images/icon-arrow.svg";
      arrow.classList.remove("rotate");
    } else {
      arrow.src = "./images/icon-arrowRed.svg";
      arrow.classList.add("rotate");
    }
  });
document
  .getElementById("checkboxQuestions2")
  .addEventListener("change", function () {
    const arrow = document.getElementById("arrow2");
    if (document.getElementById("checkboxQuestions2").checked) {
      arrow.src = "./images/icon-arrow.svg";
      arrow.classList.remove("rotate");
    } else {
      arrow.src = "./images/icon-arrowRed.svg";
      arrow.classList.add("rotate");
    }
  });
document
  .getElementById("checkboxQuestions3")
  .addEventListener("change", function () {
    const arrow = document.getElementById("arrow3");
    if (document.getElementById("checkboxQuestions3").checked) {
      arrow.src = "./images/icon-arrow.svg";
      arrow.classList.remove("rotate");
    } else {
      arrow.src = "./images/icon-arrowRed.svg";
      arrow.classList.add("rotate");
    }
  });
document
  .getElementById("checkboxQuestions4")
  .addEventListener("change", function () {
    const arrow = document.getElementById("arrow4");
    if (document.getElementById("checkboxQuestions4").checked) {
      arrow.src = "./images/icon-arrow.svg";
      arrow.classList.remove("rotate");
    } else {
      arrow.src = "./images/icon-arrowRed.svg";
      arrow.classList.add("rotate");
    }
  });
