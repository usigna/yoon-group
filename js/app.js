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

function useScrollReveal() {
  const slideUp = {
    duration: 1500,
    delay: 200,
    easing: "ease-out",
    scale: 1,
    distance: "6rem"
  };

  const slideUpSlow = {
    duration: 3500,
    delay: 200,
    easing: "ease-out",
    scale: 1,
    distance: "3rem"
};

  ScrollReveal().reveal(".animation", {delay: 200});
  ScrollReveal().reveal(".animation-show", slideUp);
  ScrollReveal().reveal(".animation-show--slow", slideUp);
}

function showAnimation() {
  window.addEventListener("load", function() {
    useScrollReveal();
  })
}

const init = function () {
  changeTitle();
  showHamburgerMenu();
  showAnimation();
};

document.addEventListener('DOMContentLoaded', init);