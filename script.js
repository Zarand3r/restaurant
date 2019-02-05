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

  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
  }

});
