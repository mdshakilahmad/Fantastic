// 1. click navbar-collapse a hide
(function ($) {
  "use strict";

  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
})(jQuery);

// scroll on window  text and background color change
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 0);
  var links = document.querySelectorAll("nav ul li a, nav a");
  if (nav.classList.contains("scrolled")) {
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "black";
    }
  } else {
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "";
    }
  }
});
// 2. onePgaeNav
jQuery(".scroll").onePgaeNav({
  wrapper: "#onepage-nav",
  navStop: 100,
  navStart: 200,
});

// 3. owlCarousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  margin: 40,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// 4. animition
$(".animate-clip").animatedHeadline({
  animationType: "clip",
});

// 5. counterUp
$(".counter").counterUp({
  delay: 50,
  time: 2000,
});

// s
$(".parent-container").magnificPopup({
  delegate: "a", // child items selector, by clicking on it popup will open
  type: "image",
  // other options
});
