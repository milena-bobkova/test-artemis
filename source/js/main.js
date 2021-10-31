import {initSlider} from './modules/init-slider';
import {initDropdown} from './modules/init-dropdown';
import {initScrolledHeader} from './modules/init-scrolled-header';
import {initScroll} from './modules/init-scroll';
import {validateForm} from './modules/validation';
import {initMenu} from './modules/init-menu';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  initSlider();
  initDropdown();
  initScrolledHeader();
  initScroll();
  validateForm();
  initMenu();
});

