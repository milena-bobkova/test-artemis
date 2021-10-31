const validateForm = () => {
  const forms = document.querySelectorAll('[data-validate]');

  if (!forms.length) {
    return;
  }

  forms.forEach((form) => {
    const pristine = new Pristine(form, {
      classTo: 'privat__input-block',
      errorClass: 'invalid',
      successClass: 'edited',
      errorTextParent: 'privat__input-block',
      errorTextTag: 'div',
      errorTextClass: 'privat__error'
    }, false);

    form.addEventListener('submit', (e) => {
      const valid = pristine.validate();

      if (!valid) {
        e.preventDefault();
      }
    });
  });
};



export {validateForm};
