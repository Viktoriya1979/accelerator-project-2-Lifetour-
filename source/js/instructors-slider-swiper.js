import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.instructors__swiper-container.swiper');

const instructorsSlider = new Swiper(swiperElement, {
  // Optional parameters
  init: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  lazyPreloadPrevNext: 1,
  slidesPerView: 'auto',
  spaceBetween: 20,
  initialSlide: 2,

  breakpoints: {
    // when window width is >= 768px
    768: {
      allowTouchMove: false,
      initialSlide: 0,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.instructors__swiper-button.swiper-button.swiper-button-next',
    prevEl: '.instructors__swiper-button.swiper-button.swiper-button-prev',
  },
});

export { instructorsSlider };
