import { iosVhFix } from './utils/ios-vh-fix';
import { initRentSlider } from './modules/init-rent-slider';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  initRentSlider();

  function equalizeItemsHeights() {
    const items = document.querySelectorAll('.products__list li');
    const maxHeight = Math.max(...Array.from(items).map(item => item.offsetHeight));
    items.forEach(item => item.style.height = maxHeight + 'px');
  }

    window.addEventListener('load', equalizeItemsHeights);
  window.addEventListener('resize', equalizeItemsHeights);

  iosVhFix();
  window.addEventListener('load', () => {

  });
});

