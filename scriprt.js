const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  
  autoplay: {
    delay: 7000, // 3 seconds after the switch time
    stopOnLastSlide: true,
    disableOnInteraction: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const swiperNews = new Swiper('.news__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  
  autoplay: {
    delay: 7000, // 3 seconds after the switch time
    stopOnLastSlide: true,
    disableOnInteraction: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});