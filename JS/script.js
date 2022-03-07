
var myIndex = 0;
setInterval(carousel, 2000);

function carousel() {
  const arrayOfImg = ['../Imagini/poza proba.jpg', '../Imagini/calendar.jpg', '../Imagini/carnet x2.jpg', '../Imagini/carnet.jpg']

  const img = document.getElementById('imgSlideShow');

  myIndex++;

  if (myIndex > arrayOfImg.length) { myIndex = 1 }

  img.src = arrayOfImg[myIndex-1];
} 

