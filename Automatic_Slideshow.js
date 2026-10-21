let slideIndex1 = 0;
let slideTimer1;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("dis-slides"); // Unique class for automatic slideshow
  if (slides.length === 0) return;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex1 >= slides.length) {
    slideIndex1 = 0;
  }
  slides[slideIndex1].style.display = "block";
  slideIndex1++;
  clearTimeout(slideTimer1);
  slideTimer1 = setTimeout(showSlides1, 5000);}