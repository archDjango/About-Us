// Initialize Swiper for About Us Carousel
const swiper = new Swiper('.swiper-container', {
    // Swiper Settings
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  