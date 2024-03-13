$(function () {
  $(".welcome__inner-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".home__inner-slider").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: false,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
