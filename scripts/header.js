// import { clickOnOutside } from "../utils/click.js";

const hamburgerButton = document.querySelector(".js-hamburger-button");
const hamburgerButtonIcon = document.querySelector(
  ".js-hamburger-button .fa-bars",
);
const hamburgerMenu = document.querySelector(".js-hamburger-menu");

hamburgerButton.onclick = function toggleHamburgerMenu() {
  hamburgerMenu.classList.toggle("show");
  const isMenuShown = hamburgerMenu.classList.contains("show");
  hamburgerButtonIcon.classList = isMenuShown
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
};

//clickOnOutside(hamburgerMenu, "show");
