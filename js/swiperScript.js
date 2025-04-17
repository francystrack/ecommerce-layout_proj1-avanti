const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 2,

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    920: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});