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

// 6. magnificPopup 1
$(".parent-container").magnificPopup({
  delegate: "a", // child items selector, by clicking on it popup will open
  type: "image",
  // other options
});

// 7. mixitup
var mixer = mixitup(".img-container-filter");

// 8. magnificPopup 2
$(".img-container").magnificPopup({
  delegate: "a", // child items selector, by clicking on it popup will open
  type: "image",
  gallery: {
    enabled: true,
  },
  // other options
});

// 9. wow
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

// 10 scroll to top arrow
window.addEventListener("scroll", () => {
  const arrowTop = document.querySelector(".arrow-top");
  if (window.pageYOffset > 300) {
    arrowTop.style.display = "block";
  } else {
    arrowTop.style.display = "none";
  }

  // click
  arrowTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
