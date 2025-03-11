import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.hero__swiper-container.swiper');

const heroSliderLooping = new Swiper(swiperElement, {
  // Optional parameters
  loop: true,
  init: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  lazyPreloadPrevNext: 1,
  // autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.hero__swiper-pagination.swiper-pagination',
    type: 'bullets',
  },

  breakpoints: {
    // when window width is >= 1440px
    1440: {
      allowTouchMove: false,
      pagination: {
        clickable: true,
      },
    },
  },
});

export { heroSliderLooping };
