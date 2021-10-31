const toggleHeader = () => {
  const pageHeader = document.querySelector('header');
  //const scrollPosition = pageHeader.offsetTop;

  if (!pageHeader) {
    return;
  }

  if (window.pageYOffset > 0) {
    pageHeader.classList.add('header--scrolled');
  } else {
    pageHeader.classList.remove('header--scrolled');
  }
};

const initScrolledHeader = () => {
  window.addEventListener('scroll', function () {
    toggleHeader();
  });
};

export {initScrolledHeader};


