"use strict";

mybutton = document.getElementById("myBtn");

function topFunction() {
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")]
  });
  $('.move-up span').click(function () {
    $('html.body').scrollTop(0);
  });
});