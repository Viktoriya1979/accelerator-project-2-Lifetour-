import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.advantages__swiper-container.swiper');

const initDesktopLoopingSliderAdvantages = () => {

  let advantagesDesktopLoopingSlider;

  if (window.innerWidth >= 1440 && swiperElement.dataset.desktop === 'false') {
    advantagesDesktopLoopingSlider = new Swiper(swiperElement, {

      // Optional parameters
      init: false,
      loop: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 30,
      allowTouchMove: false,
      slideToClickedSlide: true,
      centeredSlides: true,
      initialSlide: 2,

      // Navigation arrows
      navigation: {
        nextEl: '.advantages__swiper-button.swiper-button.swiper-button-next',
        prevEl: '.advantages__swiper-button.swiper-button.swiper-button-prev',
      },

    });

    swiperElement.dataset.desktop = 'true';
    advantagesDesktopLoopingSlider.init();
  }

  if (window.innerWidth < 1440) {
    swiperElement.dataset.desktop = 'false';
    if (swiperElement.classList.contains('swiper-initialized')) {
      advantagesDesktopLoopingSlider.destroy();
    }
  }
};

export { initDesktopLoopingSliderAdvantages };
