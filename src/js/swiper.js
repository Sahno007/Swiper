const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  parallax: true,
  speed: 1000,

  keyboard: {
    enable: true,
  },

  // If we need pagination
  pagination: {
    el: '.slider-wrapper__count',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
