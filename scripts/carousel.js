function updateCarouselInfo() {
  const carouselInfo = document.querySelector(".hero__carousel-info");
  const carouselPagination = document.querySelector(
    ".carousel__pagination--vertical",
  );

  carouselInfo.textContent = carouselPagination.textContent;
  let prevText = carouselInfo.textContent;
  let currentText = "";

  function callback() {
    currentText = carouselPagination.textContent;

    if (prevText != currentText) {
      carouselInfo.textContent = carouselPagination.textContent;
    }

    prevText = carouselInfo.textContent;
  }

  const config = { attributes: true, childList: true, subtree: true };
  const observer = new MutationObserver(callback);

  observer.observe(carouselPagination, config);
}

updateCarouselInfo();

const carouselContainer = document.querySelector(".carousel-container");
const slideLinks = document.querySelectorAll(".swiper-slide a");
const closeWindowIcon = document.querySelector(".hero__xmark");

function carouselZoomIn() {
  carouselContainer.addEventListener("click", () => {
    closeWindowIcon.style.display = "inline";

    carouselContainer.classList.add("carousel-container--full-screen");

    slideLinks.forEach((link) => {
      if (
        carouselContainer.classList.contains("carousel-container--full-screen")
      ) {
        link.classList.remove("link--disabled");
        link.classList.add("link--enabled");
      }
    });
  });
}

function carouselZoomOut() {
  document.addEventListener("click", (e) => {
    if (!carouselContainer.contains(e.target)) {
      closeWindowIcon.style.display = "none";

      carouselContainer.classList.remove("carousel-container--full-screen");

      slideLinks.forEach((link) => {
        link.classList.remove("link--enabled");
        link.classList.add("link--disabled");
      });
    }
  });
}

carouselZoomIn();
carouselZoomOut();
