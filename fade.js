let slideIndex = 0;
  showSlides();
  
  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("fade-slide");
      let dots = document.getElementsByClassName("dot");
      
      for (i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
      }
      
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      
      for (i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");
      }
      
      slides[slideIndex-1].classList.add("active");
      dots[slideIndex-1].classList.add("active");
      setTimeout(showSlides, 3000); // Change image every 5 seconds
  }
  
  function currentSlide(n) {
      slideIndex = n;
      showSlides();
  }
