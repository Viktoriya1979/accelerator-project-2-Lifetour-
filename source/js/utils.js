const slideElements = document.querySelectorAll('[data-focus="focus"]');

const createFocusOnElement = () => {
  slideElements.forEach((item) => {
    item.setAttribute('tabindex', '0');
  });
};

export { createFocusOnElement };
