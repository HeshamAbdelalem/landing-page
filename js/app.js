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
let documentFragment = new DocumentFragment();
const navbar = document.querySelector('.page__header .navbar__menu');
const ul = document.querySelector('.page__header #navbar__list');
//! modify the node tree to array for no problems later
const sections = Array.from(document.querySelectorAll('main section'));
console.log('## TCL ## >>: sections', sections);

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
  for (let i = 0; i < sections.length; i++) {
    let li = document.createElement('li');
    li.textContent = sections[i].dataset.nav;
    console.log(li.textContent);
    li.classList.add('menu__link');

    documentFragment.appendChild(li);
  }
  ul.appendChild(documentFragment);
  //   console.log('## TCL ## >>: addLiItem -> documentFragment', documentFragment);
}

addLiItem();
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
