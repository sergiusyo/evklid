/*slides*/
let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },


  a11y: {
    paginationBulletMessage:
      'Перейти к слайду {{index}}',
  }
});


/*tabs*/
let TabsBtn = document.querySelectorAll('.section-how__button');
let TabsItem = document.querySelectorAll('.section-how__tabs-item');

TabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    TabsBtn.forEach(function (element) {
      element.classList.remove('section-how__button--active')
    });
    e.currentTarget.classList.add('section-how__button--active');

    TabsItem.forEach(function (element) {
      element.classList.remove('section-how__tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('section-how__tabs-item--active');
  });
});


/*accordion*/
$(function () {
  $(".accordion__list").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false
  });
});


/*burger-menu*/
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');


/*search*/
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});



document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('header__search-form').classList.add('header__search-form--active')
  });
});

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('header__search-form').classList.remove('header__search-form--active')
  });
});


document.getElementById('header__search-form').addEventListener('submit', (e) => {
  e.preventDefault()
})
