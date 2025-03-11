import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.tours__swiper-container.swiper');

const toursSlider = new Swiper(swiperElement, {
  // Optional parameters
  init: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  lazyPreloadPrevNext: 1,
  slidesPerView: 'auto',
  spaceBetween: 18,
  // autoHeight: true,

  breakpoints: {
    // when window width is >= 768px
    768: {
      allowTouchMove: false,
    },
    // when window width is >= 1440px
    1440: {
      spaceBetween: 30,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.tours__swiper-button.swiper-button.swiper-button-next',
    prevEl: '.tours__swiper-button.swiper-button.swiper-button-prev',
  },
});

export { toursSlider };
