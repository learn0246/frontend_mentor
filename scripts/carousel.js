const screenChannel = document.querySelector(".screen__channel");
const carouselPagination = document.querySelector(".carousel--v__pagination");

screenChannel.textContent = carouselPagination.textContent;
let prevText = screenChannel.textContent;
let currentText = "";

function callback() {
  currentText = carouselPagination.textContent;

  if (prevText != currentText) {
    screenChannel.textContent = carouselPagination.textContent;
  }

  prevText = screenChannel.textContent;
}

const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(callback);

observer.observe(carouselPagination, config);

const carousel = document.querySelector(".carousel-container");
const screen = document.querySelector(".desk__screen");
const slideLinks = document.querySelectorAll(".swiper-slide a");

function carouselZoomOut() {
  document.addEventListener("click", (e) => {
    if (!screen.contains(e.target)) {
      screen.classList.remove("desk__screen--full-sreen");

      slideLinks.forEach((link) => {
        link.classList.remove("link--enabled");
        link.classList.add("link--disabled");
      });
    }
  });
}

function carouselZoomIn() {
  carousel.addEventListener("click", () => {
    screen.classList.add("desk__screen--full-sreen");

    slideLinks.forEach((link) => {
      if (screen.classList.contains("desk__screen--full-sreen")) {
        link.classList.remove("link--disabled");
        link.classList.add("link--enabled");
      }
    });
  });
}

carouselZoomIn();
carouselZoomOut();
