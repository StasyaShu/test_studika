// import {manageAccordion} from './modules/init-accordion';
// import {initCustomSelect} from './modules/init-custom-select';
// import {manageMobMenu} from './modules/init-mobile-menu';
import './vendor.js/dragscroll';
import {manageSearchBar} from './modules/init-search-bar';
import {scrollMenu} from './modules/init-scroll-menu';

window.addEventListener('DOMContentLoaded', () => {
  // manageAccordion();
  // initCustomSelect();
  // manageMobMenu();

  manageSearchBar();
  scrollMenu();
});
