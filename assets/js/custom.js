$(document).ready(function(){
  $('.menu-btns i').click(function(){
    $('.header-opacity').slideToggle(200);
  });
});

    var swiper = new Swiper(".regio-slide", {
      spaceBetween: 30,
      slidesPerView: 2,
      freeMode: true,
      loop:true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },

    });