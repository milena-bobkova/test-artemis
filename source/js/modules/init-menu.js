const initMenu = () => {
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('[data-scroll]');
  const toggle = document.querySelector('.header__toggle');

  if (header && !links.lenght && !toggle) {
    return;
  }


  toggle.addEventListener('click', () => {
    header.classList.toggle('is-active');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('is-active');
    });
  });

  window.addEventListener('resize', function () {
    const viewport = document.documentElement.clientWidth;
    if (viewport >= 992) {
      header.classList.remove('is-active');
    }
  });
};

export {initMenu};


