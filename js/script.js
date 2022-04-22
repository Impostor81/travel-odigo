(function() {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  }
}());


// burger handler

(function() {
  const burger = document.querySelector('.burger');
  const closeBtn = document.querySelector('.header__nav-close');
  const menu = document.querySelector('.header__nav');
  const menuItems = document.querySelectorAll('.header__item');

  burger.addEventListener('click', () => {
    menu.classList.add('header__nav-active');

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
      })
    });
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
  });

}());
