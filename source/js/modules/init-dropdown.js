const header = document.querySelector('.header');

const closeSubmenu = (menu) => {
  menu.classList.remove('is-open');
};

const openSubmenu = (menu) => {
  menu.classList.add('is-open');
};

const toggleClickHandler = (menu) => {
  if (!menu.classList.contains('is-open')) {
    openSubmenu(menu);
  } else {
    closeSubmenu(menu);
  }
};

const documentClickCloseMenuHandler = (menu) => {
  document.addEventListener('click', (evt) => {
    if (!menu.contains(evt.target)) {
      closeSubmenu(menu);
    }
  });
};


const initDropdown = () => {
  const submenus = document.querySelectorAll('[data-submenu]');

  if (!submenus.length) {
    return;
  }

  submenus.forEach((submenu) => {
    documentClickCloseMenuHandler(submenu);

    const menuItems = submenu.querySelectorAll('.submenu__link');

    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        closeSubmenu(submenu);
      });
    });
  });

  const submenuToggles = document.querySelectorAll('[data-toggle]');

  if (!submenuToggles.length) {
    return;
  }

  submenuToggles.forEach((targetToggle) => {
    const submenuTarget = targetToggle.closest('[data-submenu]');

    if (!submenuTarget) {
      return;
    }

    targetToggle.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (header && header.classList.contains('is-open')) {
        header.classList.remove('is-open');
      }

      submenuToggles.forEach((toggle) => {
        if (toggle !== targetToggle) {
          const submenu = toggle.closest('[data-submenu]');
          closeSubmenu(submenu);
        }
      });
      toggleClickHandler(submenuTarget);
    });
  });
};

export {initDropdown};


