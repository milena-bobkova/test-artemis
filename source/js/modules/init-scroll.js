const triggerElements = document.querySelectorAll('[data-scroll]');
const header = document.querySelector('header');

const initScroll = () => {
  if (!triggerElements && !header) {
    return;
  }

  const headetHeight = header.getBoundingClientRect().height;

  triggerElements.forEach((trigger) => {
    trigger.addEventListener('click', (evt) => {
      evt.preventDefault();
      const moveTo = new window.MoveTo({tolerance: headetHeight});

      let target = document.querySelector(evt.target.getAttribute('href'));

      if (!target) {
        target = document.body;
      }

      moveTo.move(target);
    });
  });
};

export {initScroll};
