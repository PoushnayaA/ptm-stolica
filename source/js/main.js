import { iosVhFix } from './utils/ios-vh-fix';
import { initRentSlider } from './modules/init-rent-slider';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initRentSlider();

  iosVhFix();


  function equalizeHeights() {
    const items = document.querySelectorAll('.products__item');
    let maxHeaderHeight = 0;
    let maxItemHeight = 0;

    items.forEach(item => {
      const header = item.querySelector('h2');
      header.style.height = 'auto'; // Сбрасываем высоту заголовка перед пересчетом
      const headerHeight = header.offsetHeight;
      const itemHeight = item.offsetHeight;

      maxHeaderHeight = Math.max(maxHeaderHeight, headerHeight);
      maxItemHeight = Math.max(maxItemHeight, itemHeight);
    });

    items.forEach(item => {
      const header = item.querySelector('h2');
      header.style.height = `${maxHeaderHeight}px`;
      item.style.height = `${maxItemHeight}px`;
    });
  }

  window.addEventListener('load', equalizeHeights);
  window.addEventListener('resize', equalizeHeights);
});

