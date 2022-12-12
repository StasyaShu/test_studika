import './vendor.js/dragscroll';
// import {getData} from './modules/get-cities-list';
import {manageSearchBar} from './modules/init-search-bar';
import {scrollMenu} from './modules/init-scroll-menu';
import {chooseCity} from './modules/init-cities-list';

window.addEventListener('DOMContentLoaded', () => {
  // getData();
  manageSearchBar();
  scrollMenu();
  chooseCity();
});
