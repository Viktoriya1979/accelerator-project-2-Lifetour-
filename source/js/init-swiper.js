import { createFocusOnElement } from './utils.js';
import { heroSliderLooping } from './hero-slider-swiper.js';
import { toursSlider } from './tours-slider-swiper.js';
import { instructorsSlider } from './instructors-slider-swiper.js';
import { reviewsSlider } from './reviews-slider-swiper.js';

const initSwipers = () => {
  heroSliderLooping.init();
  toursSlider.init();
  instructorsSlider.init();
  reviewsSlider.init();
  createFocusOnElement();
};

export { initSwipers };
