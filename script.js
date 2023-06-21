// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
  var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < smoothScrollLinks.length; i++) {
    smoothScrollLinks[i].addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    var targetId = this.getAttribute("href");
    var targetPosition = document.querySelector(targetId).offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 800;
    var startTimestamp = null;

    function scrollAnimation(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      var timeElapsed = timestamp - startTimestamp;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
  }
});

// Hide and show the header on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("hidden");
  } else {
    document.getElementById("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};
