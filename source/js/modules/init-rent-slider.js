const sliderRent = document.querySelector('[data-slider="rent-swiper"]');

const initRentSlider = () => {
  if (sliderRent) {
    // eslint-disable-next-line
    new Swiper(sliderRent, {
      keyboard: true,
      // loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {

        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
  }
};

export {initRentSlider};
