const dropdownMenu = document.querySelector(".js-site-header__dropdown-menu");
const toggleButton = document.querySelector(".js-button-toggle");
const toggleButtonIcon = document.querySelector(".js-button-toggle .fa-bars");
const overlay = document.querySelector(".overlay");

overlay.style.display = "none";

function toggleDropdownMenu() {
  toggleOverlay();
  dropdownMenu.classList.toggle("show");

  const isMenuShown = dropdownMenu.classList.contains("show");
  toggleButtonIcon.classList = isMenuShown
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
}

function toggleOverlay() {
  const overlayState = overlay.style.display;
  overlay.style.display = overlayState === "none" ? "block" : "none";
}

toggleButton.onclick = toggleDropdownMenu;
overlay.onclick = toggleDropdownMenu;

let prevScrollPos = 0;

window.onscroll = function scroll() {
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollPos) {
    document.querySelector(".scroll-up").style.top = "-5rem";
  } else {
    document.querySelector(".scroll-up").style.top = "0";
  }

  prevScrollPos = currentScrollPos;
};
