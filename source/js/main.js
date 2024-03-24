import { iosVhFix } from './utils/ios-vh-fix';
import { initRentSlider } from './modules/init-rent-slider';
// import { initSaleSlider } from './modules/init-sale-slider';

import { initAccordions } from './modules/accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initRentSlider();
  initAccordions();

  iosVhFix();

  const scrollToSection = (link, section) => {
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('sidebar').classList.remove('active');
        document.querySelector('.wrapper').classList.remove('dark');
      });
    }
  };

  const forms = document.querySelector('#form');
  const vacancies = document.querySelector('#vacancies');
  const extra = document.querySelector('#extra');
  const contacts = document.querySelector('#contacts');
  const product1 = document.querySelector('#type-1');
  const map = document.querySelector('#map');

const formLinks = document.querySelectorAll(`a[href="#form"]`);
formLinks.forEach(i => {
  scrollToSection(i, forms);
})

  scrollToSection(document.querySelector('a[href="#vacancies"]'), vacancies);
  scrollToSection(document.querySelector('a[href="#extra"]'), extra);
  scrollToSection(document.querySelector('a[href="#contacts"]'), contacts);
  scrollToSection(document.querySelector('a[href="#type-1"]'), product1);
  scrollToSection(document.querySelector('a[href="#map"]'), map);

  function equalizeHeights() {
    const items = document.querySelectorAll('.products__item');
    let maxHeaderHeight = 0;
    let maxItemHeight = 0;

    items.forEach(item => {
      const header = item.querySelector('h2');
      header.style.height = 'auto';
      item.style.height = 'auto';
    });

    items.forEach(item => {
      const header = item.querySelector('h2');
      header.style.height = 'auto';
      item.style.height = 'auto';
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

  const navigation = document.querySelector('.main-header__navigation');
  function clickOutside() {
    document.addEventListener('click', function(event) {
      const sidebar = document.getElementById('sidebar');
      const isClickInside = sidebar.contains(event.target);
      const isIgnoredElement = Array.from(document.querySelectorAll('button, a, input, textarea, select')).some(el => el.contains(event.target));

       if (navigation)
       {
        if (!isClickInside && !isIgnoredElement && navigation.classList.contains('active')) {
          navigation.classList.remove('active');
          document.querySelector('.wrapper').classList.remove('dark');
        }
      }
    });
  }

  if (navigation) {
    clickOutside();
    if (navigation.classList.contains('active')) {
      clickOutside();
    }
  }
});

