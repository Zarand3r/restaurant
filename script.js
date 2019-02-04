$( document ).ready(function() {
  var h = $(window).height();
  var filter1 = document.getElementById("filter1");
  var filter2 = document.getElementById("filter2");

  $(window).scroll(function () {
      if($(this).scrollTop() < 2*h) {
        var opacity1 = 0.2 + $(this).scrollTop() / 1000;
        if(opacity1 >= 0.8)  {
          opacity1 = 0.8;
        }
        filter1.style.opacity = opacity1;
      }

      if($(this).scrollTop() > 2*h) {
        var opacity2 = 0.2 + ($(this).scrollTop()-2*h) / 1000;
        if(opacity2 >= 0.8)  {
          opacity2 = 0.8;
        }
        filter2.style.opacity = opacity2;
      }
  });
});
