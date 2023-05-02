
function startslide() {
  document.getElementById("Lightbox").style.display = "block";
}

function endslide() {
  document.getElementById("Lightbox").style.display = "none";
}

var photonumber = 1;
zoomPhotos(photonumber);

function nextSlide(n) {
  zoomPhotos(photonumber += n);
}

function currentSlide(n) {
  zoomPhotos(photonumber = n);
}

function zoomPhotos(n) {
  var i;
  var photos = document.getElementsByClassName("Photographies");
  var dots = document.getElementsByClassName("demo");
  var descriptionText = document.getElementById("description");
  if (n > photos.length) {photonumber = 1}
  if (n < 1) {photonumber = photos.length}
  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  photos[photonumber-1].style.display = "block";
  dots[photonumber-1].className += " active";
  descriptionText.innerHTML = dots[photonumber-1].alt;
}






