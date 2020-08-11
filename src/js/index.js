var swiper = new Swiper('.swiper-container', {
    loop : true,
    speed:300,
    autoplay : {
      delay:3000
    },
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });