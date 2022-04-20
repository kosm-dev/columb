$(function () {
  $(".star").rateYo({
    starWidth: "15px",
    normalFill: "transparent",
    ratedFill: "#E2510E",
    readOnly: true,
    spacing: "5px",
    starSvg: '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1.19376L9.162 4.79696L9.27922 5.05111L9.55716 5.08406L13.4976 5.55126L10.5843 8.24537L10.3788 8.43539L10.4334 8.70991L11.2067 12.6019L7.74422 10.6637L7.5 10.527L7.25578 10.6637L3.79328 12.6019L4.56661 8.70991L4.62115 8.43539L4.41567 8.24537L1.5024 5.55126L5.44284 5.08406L5.72078 5.05111L5.838 4.79696L7.5 1.19376Z" stroke="#E2510E"/>'
  });

  const multiSelect = () => {
    const elements = document.querySelectorAll('.price__form-select');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
      });
    });
  };

  multiSelect();

  // слайдер

  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2000
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  // смена цвета шапки

  $(window).scroll(function () {
    $('.header').toggleClass('header--scroll', $(this).scrollTop() > 0);
  });

  const menuBtn = document.querySelector('.menu__btn'),
    menu = document.querySelector('.mobile__menu'),
    header = document.querySelector('.header'),
    body = document.querySelector('body');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('mobile__menu--active');
    header.classList.toggle('header--active');
    body.classList.toggle('lock');
  });



  // wow

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated',
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();

});


