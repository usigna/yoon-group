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

function changeSlideItem(slideX, slideY, slideZ) {
  slideX.classList.add('slide--active');
  slideY.classList.remove('slide--active');
  slideZ.classList.remove('slide--active');
}

function changeSlide() {
  const controls = document.querySelectorAll('.control__input');
  const control1 = document.querySelector('.control1');
  const control2 = document.querySelector('.control2');
  const control3 = document.querySelector('.control3');
  const slide1 = document.querySelector('.slide1');
  const slide2 = document.querySelector('.slide2');
  const slide3 = document.querySelector('.slide3');

  for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('change', function() {
      if (control1.checked) {
        changeSlideItem(slide1, slide2, slide3);
      }

      if (control2.checked) {
        changeSlideItem(slide2, slide1, slide3);
      }

      if (control3.checked) {
        changeSlideItem(slide3, slide1, slide2);
      }
    })
  }
}

function useScrollReveal() {
  ScrollReveal().reveal(".animation", {delay: 200});
}

function showAnimation() {
    window.addEventListener("load", function() {
        useScrollReveal();
    })
}

const init = function () {
  changeTitle();
  showHamburgerMenu();
  showHeader();
  changeSlide();
  showAnimation();
};

document.addEventListener('DOMContentLoaded', init);