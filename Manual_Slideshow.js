//Anouncement Slides
let slideIndex2 = 1;
showSlides2(slideIndex2);

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("dis-slides2"); // Unique class for manual slideshow
  if (n > slides.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2 - 1].style.display = "block";
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}


let slideIndex3 = 1;
showSlides3(slideIndex3);

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("dis-slides3"); // Unique class for manual slideshow
  if (n > slides.length) { slideIndex3 = 1 }
  if (n < 1) { slideIndex3 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex3 - 1].style.display = "block";
}

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

let slideIndex4 = 1;
showSlides4(slideIndex4);

function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("dis-slides4"); // Unique class for manual slideshow
  if (n > slides.length) { slideIndex4 = 1 }
  if (n < 1) { slideIndex4 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex4 - 1].style.display = "block";
}

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

