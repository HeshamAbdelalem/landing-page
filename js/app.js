/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbar = document.querySelector('.page__header #navbar__list');
const ul = document.querySelector('.page__header #navbar__list');
const sections = Array.from(document.querySelectorAll('main section'));

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function addLiItem() {
  let navFragment = new DocumentFragment();

  sections.forEach((section) => {
    const navItem = document.createElement('li');
    const navItemLink = document.createElement('a');

    navItemLink.textContent = section.dataset.nav;
    navItemLink.classList.add('menu__link');
    navItemLink.setAttribute('href', `#${section.id}`);

    navItem.append(navItemLink);
    navFragment.append(navItem);
  });
  navbar.append(navFragment);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/* function scrollTo() {
  for (let section of sections) {
  }
}
 */
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
addLiItem();

// Scroll to section on link click
// scrollToClick();

// Set sections as active
