const sliderBlocks = document.querySelectorAll('[data-slider]');

const initSlider = () => {
  if (!sliderBlocks.length) {
    return;
  }

  sliderBlocks.forEach((sliderBlock) => {
    const slider = sliderBlock.querySelector('.mySwiper');

    if (!slider) {
      return;
    }

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 26,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 480px
        460: {
          slidesPerView: 2,
          spaceBetween: 26
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 26
        }
      }
    });
  });
};

export {initSlider};
