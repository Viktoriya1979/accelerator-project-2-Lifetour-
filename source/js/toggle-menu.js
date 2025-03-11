const bodyElement = document.querySelector('.page__body');
const navMainElement = bodyElement.querySelector('.main-navigation');
const navToggleElement = navMainElement.querySelector('.main-navigation__toggle');
const navLinkElements = navMainElement.querySelectorAll('.main-navigation__link');
const navLinkAnchorElements = navMainElement.querySelectorAll('a[href*="#"]');

const onToggleMenuButton = () => {
  if (navMainElement.classList.contains('main-navigation--closed')) {
    navMainElement.classList.remove('main-navigation--closed');
    navMainElement.classList.add('main-navigation--opened');
    bodyElement.classList.add('page__body--lock-overlay');
  } else {
    navMainElement.classList.remove('main-navigation--opened');
    navMainElement.classList.add('main-navigation--closed');
    bodyElement.classList.remove('page__body--lock-overlay');
  }
};

const onClickMenuLink = () => {
  navMainElement.classList.remove('main-navigation--opened');
  navMainElement.classList.add('main-navigation--closed');
  bodyElement.classList.remove('page__body--lock-overlay');
};

const toggleMenu = () => {
  navMainElement.classList.add('main-navigation--closed');
  navToggleElement.addEventListener('click', onToggleMenuButton);
  navLinkElements.forEach((link) => {
    link.addEventListener('click', onClickMenuLink);
  });

  navLinkAnchorElements.forEach((linkAnchor) => {
    linkAnchor.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = linkAnchor.getAttribute('href').substring(1);
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
};

export { toggleMenu };
