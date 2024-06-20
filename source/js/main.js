import { iosVhFix } from './utils/ios-vh-fix';

import { initAccordions } from './modules/accordion/init-accordion';

import emailjs from 'emailjs-com';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initAccordions();

  iosVhFix();

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const agreementCheckbox = document.querySelector('input[name="agreement"]');
  const submitButton = document.querySelector('.button-form');

  function checkFormValidity() {
    if (nameInput.value !== '' && phoneInput.value !== '' && agreementCheckbox.checked) {
      submitButton.classList.remove('disabled-button');
    } else {
      submitButton.classList.add('disabled-button')
    }
  }

  if (nameInput) {
    nameInput.addEventListener('input', checkFormValidity);
  }
  if (phoneInput) {
    phoneInput.addEventListener('input', checkFormValidity);
  }
  if (agreementCheckbox) {
    agreementCheckbox.addEventListener('change', checkFormValidity);
  }




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

  emailjs.init('CMQisLDrpcIk54EvP');
  function sendEmail(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get('name'),
      from_phone: formData.get('phone'),
    };

    emailjs.send('service_kg6bi8v', 'template_u70e3xm', templateParams)
      .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        form.reset();

        document.querySelector('.form__wrapper--default').style.height = '0';
        document.querySelector('.form__wrapper--default').style.opacity = '0';
        document.querySelector('.form__wrapper--default').style.transition = 'all 0.5s';
        document.querySelector('.form__wrapper--success').classList.remove('visually-hidden');

      }, function(error) {
        console.log('Error sending email:', error);

      });
  }


  if (document.getElementById('my-form')) {
    document.getElementById('my-form').addEventListener('submit', sendEmail);
  }

  const forms = document.querySelector('#form');
  const vacancies = document.querySelector('#vacancies');
  const extra = document.querySelector('#extra');
  const contacts = document.querySelector('#contacts');
  const product1 = document.querySelector('#type-1');
  const map = document.querySelector('#map-contact');

const formLinks = document.querySelectorAll(`a[href="#form"]`);
formLinks.forEach(i => {
  scrollToSection(i, forms);
})

  scrollToSection(document.querySelector('a[href="#vacancies"]'), vacancies);
  scrollToSection(document.querySelector('a[href="#extra"]'), extra);
  scrollToSection(document.querySelector('a[href="#contacts"]'), contacts);
  scrollToSection(document.querySelector('a[href="#type-1"]'), product1);
  scrollToSection(document.querySelector('a[href="#map-contact"]'), map);

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

