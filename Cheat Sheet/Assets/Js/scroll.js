function smoothScroll(target, duration) {
   var targetElement = document.getElementById(target);
   if (!targetElement) {
      return;
   }

   var headerHeight = document.querySelector('.header').offsetHeight;
   var targetPosition = getOffset(targetElement, headerHeight);
   var startPosition = window.pageYOffset;
   var distance = targetPosition - startPosition;
   var startTime = null;
   var stopScroll = false;

   function animation(currentTime) {
      if (stopScroll) return;
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
   }

   function ease(t, b, c, d) {
       t /= d / 2;
       if (t < 1) return c / 2 * t * t + b;
       t--;
       return -c / 2 * (t * (t - 2) - 1) + b;
   }

   requestAnimationFrame(animation);

   window.addEventListener('wheel', function() {
      stopScroll = true;
   });
}

function getOffset(el, headerHeight) {
   var offsetTop = 0;

   while (el) {
       offsetTop += el.offsetTop;
       el = el.offsetParent;
   }
   
   return offsetTop - headerHeight - 16;
}

var sideNavigation = document.querySelector(".sidenav");
if (sideNavigation) {
   sideNavigation.querySelectorAll('[href^="#"]').forEach(function (child) {
      child.addEventListener('click', function (e) {
         e.preventDefault();
         
         var targetId = this.getAttribute('href').substring(1);
         smoothScroll(targetId, 1000);
      });
   });
}