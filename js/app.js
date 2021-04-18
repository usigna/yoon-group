function changeTitle() {
  const message = 'Back to Yoon Group!';
  let original;

  window.addEventListener('focus', function () {
    if (original) {
      document.title = original;
    }
  })

  window.addEventListener('blur', function () {
    const title = document.title;
    if (title != message) {
      original = title;
    }
    document.title = message;
  })
}

function showHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');
  const navigationLinks = document.querySelectorAll('.navigation__link');
  const logo = document.querySelector('.logo');

  const handleClick = function () {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
    logo.classList.toggle('logo--nav');
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
      logo.classList.remove('logo--nav');
    })
  }

  hamburger.addEventListener('click', handleClick);
}

function showHeader() {
  const header = document.querySelector('.header');
  const logo = document.querySelector('.logo');
  const hamburger = document.querySelector('.hamburger')

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      logo.classList.add('scrolled');
      hamburger.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      logo.classList.remove('scrolled');
      hamburger.classList.remove('scrolled');
    }
  })
}

const init = function () {
  changeTitle();
  showHamburgerMenu();
  showHeader();
};

document.addEventListener('DOMContentLoaded', init);