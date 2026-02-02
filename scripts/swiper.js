const label = ["html", "javascript"];

new Swiper(".swiper-0", {
  speed: 400,
  direction: "vertical",
  loop: true,
  centerdSlides: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, "-100%", 0],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: [0, "100%", 0],
    },
  },
  // pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "custom",
    renderCustom: function (swiper, current, total) {
      let language;
      if (current === 1) {
        language = "HTLMS & CSS";
      }
      if (current === 2) {
        language = "Javascript";
      }

      return language;
    },
  },

  navigation: {
    nextEl: ".carousel--v__nav-button--prev",
    prevEl: ".carousel--v__nav-button--next",
  },

  keyboard: {
    enabled: true,
  },
});

new Swiper(".swiper-1", {
  direction: "horizontal",
  autoHeight: true,
  speed: 400,
  loop: true,
  centerdSlides: true,
  autoplay: {
    delay: 5000,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-100%", 0, 0],
      opacity: 0.7,
    },
    next: {
      translate: ["100%", 0, 0],
      opacity: 0.7,
    },
  },
  // pagination bullets
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".carousel__nav-button--prev",
    prevEl: ".carousel__nav-button--next",
  },

  keyboard: {
    enabled: true,
  },
});

new Swiper(".swiper-2", {
  direction: "horizontal",
  autoHeight: true,
  speed: 400,
  loop: true,
  centerdSlides: true,
  autoplay: {
    delay: 5000,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-100%", 0, 0],
      opacity: 0.7,
    },
    next: {
      translate: ["100%", 0, 0],
      opacity: 0.7,
    },
  },
  // pagination bullets
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".carousel__nav-button--prev",
    prevEl: ".carousel__nav-button--next",
  },

  keyboard: {
    enabled: true,
  },
});
