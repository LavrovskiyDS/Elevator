const swiper = new Swiper('.js-main-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  parallax: true,

  autoplay: {
    delay: 7000, // 3 seconds after the switch time
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const swiperNews = new Swiper('.news-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.news-swiper-button-next',
    prevEl: '.news-swiper-button-prev',
  },
});

$(document).ready(function() {
  $('.header__icon').click(function() {
      $('.header__icon, .close, body').toggleClass('active');
      $('.b-sandwich').toggleClass('visible');
  });
});


if ($('.close').click(function() {
  $('.header__icon, .close, body').removeClass('active');
  $('.b-sandwich').removeClass('visible');
}));