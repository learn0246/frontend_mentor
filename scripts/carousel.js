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
