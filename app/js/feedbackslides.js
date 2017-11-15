$(document).ready(function () {
  // Slider
  $('.feedbackslides').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    useTransform: false,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false
        }
      },]
  });

});