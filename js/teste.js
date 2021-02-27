let sliderContainerSec6 = document.querySelector(".section-6-slider");

let section6 = document.querySelector(".section-6");

let btnNextSec6 = section6.querySelector(".next");
let btnPrevSec6 = section6.querySelector(".prev");

let item1sec6 = section6.querySelector(".item-1");
let item2sec6 = section6.querySelector(".item-2");
let item3sec6 = section6.querySelector(".item-3");
let item4sec6 = section6.querySelector(".item-4");

let photoNumberSec6 = section6.querySelector(".photoNumber");

let autoSlideSec6 = setInterval(() => {
  slideRight(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
}, 3000);


btnNextSec6.onclick = () => {
  slideRight(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
  clearInterval(autoSlideSec6);
}

btnPrevSec6.onclick = () => {
  slideLeft(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
  clearInterval(autoSlideSec6);
}


swipedetect(sliderContainerSec6, function(swipedir){
    if (swipedir == 'left'){
      slideRight(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
    }else if( swipedir == 'right'){
      slideLeft(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
    }
    clearInterval(autoSlideSec6);
});