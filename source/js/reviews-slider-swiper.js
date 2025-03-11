import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.reviews__swiper-container.swiper');

const reviewsSlider = new Swiper(swiperElement, {
  // Optional parameters
  init: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  lazyPreloadPrevNext: 1,
  slidesPerView: 'auto',
  autoHeight: true,
  spaceBetween: 30,
  slidesOffsetBefore: 15,
  slidesOffsetAfter: 15,

  breakpoints: {
    // when window width is >= 768px
    768: {
      allowTouchMove: false,
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
    },
    // when window width is >= 1440px
    1440: {
      spaceBetween: 120,
      slidesOffsetBefore: 130,
      slidesOffsetAfter: 130,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-button.swiper-button.swiper-button-next',
    prevEl: '.reviews__swiper-button.swiper-button.swiper-button-prev',
  },
});

export { reviewsSlider };
