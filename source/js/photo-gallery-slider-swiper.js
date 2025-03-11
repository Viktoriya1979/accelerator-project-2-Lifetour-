import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.photo-gallery__swiper-container.swiper');

const initMobileLoopingSliderPhotoGallery = () => {

  let photoGalleryMobileLoopingSlider;

  if (window.innerWidth < 1440 && swiperElement.dataset.mobile === 'false') {
    photoGalleryMobileLoopingSlider = new Swiper(swiperElement, {

      // Optional parameters
      init: false,
      loop: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      lazyPreloadPrevNext: 1,
      slidesPerView: 'auto',
      spaceBetween: 5,

      // Navigation arrows
      navigation: {
        nextEl: '.photo-gallery__swiper-button.swiper-button.swiper-button-next',
        prevEl: '.photo-gallery__swiper-button.swiper-button.swiper-button-prev',
      },

    });

    swiperElement.dataset.mobile = 'true';
    photoGalleryMobileLoopingSlider.init();
  }

  if (window.innerWidth >= 1440) {
    swiperElement.dataset.mobile = 'false';
    if (swiperElement.classList.contains('swiper-initialized')) {
      photoGalleryMobileLoopingSlider.destroy();
    }
  }
};

export { initMobileLoopingSliderPhotoGallery };
