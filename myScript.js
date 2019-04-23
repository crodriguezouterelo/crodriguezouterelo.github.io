var slideIndex, slides, dots, captionTextMain, captionText2;
function initGallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("imageHolder");
  slides[slideIndex].style.opacity = 1;

  captionTextMain = document.querySelector(".captionHolder .captionTextMain");
  captionTextMain.innerText = slides[slideIndex].querySelector(
    ".captionTextMain"
  ).innerText;

  captionText2 = document.querySelector(".captionHolder .captionText2");
  captionText2.innerText = slides[slideIndex].querySelector(
    ".captionText2"
  ).innerText;

  dots = [];
  var dotsContainer = document.getElementById("dotsContainer");

  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dots");

    dot.setAttribute("onClick", "moveSlide(" + i + "); resetTimer();");

    dotsContainer.append(dot);
    dots.push(dot);
  }
  dots[slideIndex].classList.add("active");
}
initGallery();

function plusSlides(n) {
  moveSlide(slideIndex + n);
}

function moveSlide(n) {
  var i, current, next;
  var moveSlideAnimClass = {
    forCurrent: "",
    forNext: ""
  };

  var slideTextAnimClass;
  if (n > slideIndex) {
    if (n > slides.length - 1) {
      n = 0;
    }
    moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
    moveSlideAnimClass.forNext = "moveLeftNextSlide";
    slideTextAnimClass = "slideTextFromTop";
  } else if (n < slideIndex) {
    if (n < 0) {
      n = slides.length - 1;
    }
    moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
    moveSlideAnimClass.forNext = "moveRightNextSlide";
    slideTextAnimClass = "slideTextFromBottom";
  }

  if (n != slideIndex) {
    next = slides[n];
    current = slides[slideIndex];
    for (i = 0; i < slides.length; i++) {
      slides[i].className = "imageHolder";
      slides[i].style.opacity = 0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideIndex = n;
  }

  captionTextMain.style.display = "none";
  captionTextMain.className = "captionTextMain " + slideTextAnimClass;
  captionTextMain.innerText = slides[n].querySelector(
    ".captionTextMain"
  ).innerText;
  captionTextMain.style.display = "block";

  captionText2.style.display = "none";
  captionText2.className = "captionText2 " + slideTextAnimClass;
  captionText2.innerText = slides[n].querySelector(".captionText2").innerText;
  captionText2.style.display = "block";
}

var timer = null;
function setTimer() {
  timer = setInterval(function() {
    plusSlides(1);
  }, 4000);
}

function playPauseSlides() {
  var playPauseBtn = document.getElementById("playPauseBtn");
  if (timer == null) {
    setTimer();
    playPauseBtn.style.backgroundPositionY = "-33px";
  } else {
    clearInterval(timer);
    timer = null;
    playPauseBtn.style.backgroundPositionY = "0px";
  }
}
playPauseSlides();

function resetTimer() {
  if (timer != null) {
    clearInterval(timer);
    setTimer();
  }
}
