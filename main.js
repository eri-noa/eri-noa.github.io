$(function () {
  $(".slick-area").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1013,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".reserve").fadeIn();
    }
    else {
      $(".reserve").fadeOut();
    }
  });
});


$(function(){
  $('a[href^="#"]').click(function(){
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({scrollTop:position},400,'swing');
    return false;
  });
});
