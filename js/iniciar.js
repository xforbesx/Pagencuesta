var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    centerSlide:'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
    },

  });