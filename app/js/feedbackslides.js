$(document).ready(function () {
  // Slider
  $('.feedbackslides').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    useTransform: false,
    pauseOnHover: false,
    // adaptiveHeight: true
    // speed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },]
  });

});