function slideRight2(item1, item2, item3, item4, photoNumber){
  if(curPos2 == 1){
    item1.style.transform = "translate(-100%)";
    item2.style.transform = "translate(-100%)";
    
    setTimeout(() => {
      item2.style.transition = "all 0s";
      item2.style.transform = "translate(0)";
      item2.style.left = "0";
      setTimeout(() => {
        item2.style.transition = "transform 0.5s ease-in-out";
      }, 100)

      item1.style.left = "-100%";
      item1.style.transform = "translate(0)"; 

      item3.style.left = "100%"
      item3.style.transform = "translate(0)"; 

      item4.style.left = "100%"
      item4.style.transform = "translate(0)"; 
    }, 500);

    curPos2 = 2;
    photoNumber.textContent = curPos2;
  }else if(curPos2 == 2){
    item2.style.transform = "translate(-100%)";
    item3.style.transform = "translate(-100%)";
    
    setTimeout(() => {
      item3.style.transition = "all 0s";
      item3.style.transform = "translate(0)";
      item3.style.left = "0";
      setTimeout(() => {
        item3.style.transition = "transform 0.5s ease-in-out";
      }, 100)

      item1.style.left = "-100%";
      item1.style.transform = "translate(0)"; 

      item2.style.left = "-100%";
      item2.style.transform = "translate(0)"; 

      item4.style.left = "100%"
      item4.style.transform = "translate(0)"; 
    }, 500);

    curPos2 = 3;
    photoNumber.textContent = curPos2;
  }else if(curPos2 == 3){
    item3.style.transform = "translate(-100%)";
    item4.style.transform = "translate(-100%)";
    
    setTimeout(() => {
      item4.style.transition = "all 0s";
      item4.style.transform = "translate(0)";
      item4.style.left = "0";
      setTimeout(() => {
        item4.style.transition = "transform 0.5s ease-in-out";
      }, 100) 

      item2.style.left = "-100%";
      item2.style.transform = "translate(0)"; 

      item3.style.left = "-100%";
      item3.style.transform = "translate(0)"; 

      item1.style.left = "100%"
      item1.style.transform = "translate(0)"; 
    }, 500);

    curPos2 = 4;
    photoNumber.textContent = curPos2;
  }else if(curPos2 == 4){
    item4.style.transform = "translate(-100%)"
    item1.style.transform = "translate(-100%)"

    setTimeout(() => {
      item1.style.transition = "all 0s";
      item1.style.transform = "translate(0)";
      item1.style.left = "0";
      setTimeout(() => {
        item1.style.transition = "transform 0.5s ease-in-out";
      }, 100) 
  
      item2.style.left = "100%";
      item2.style.transform = "translate(0)"; 
  
      item3.style.left = "100%";
      item3.style.transform = "translate(0)"; 
  
      item4.style.left = "-100%"
      item4.style.transform = "translate(0)"; 
    }, 500);
  
    curPos2 = 1;
    photoNumber.textContent = curPos2;
  }
}

function slideLeft2(item1, item2, item3, item4, photoNumber){
  
  if(curPos2 == 1){
    item1.style.transform = "translate(100%)";
    item4.style.transform = "translate(100%)";
    
    setTimeout(() => {
      item4.style.transition = "all 0s";
      item4.style.transform = "translate(0)";
      item4.style.left = "0";
      setTimeout(() => {
        item4.style.transition = "transform 0.5s ease-in-out";
      }, 100)

      item1.style.left = "100%"
      item1.style.transform = "translate(0)";
      
      item3.style.left = "-100%";
      item3.style.transform = "translate(0)"; 

      item2.style.left = "100%";
      item2.style.transform = "translate(0)"; 
    }, 500);

    curPos2 = 4;
    photoNumber.textContent = curPos2;
  }else if(curPos2 == 4){
    item4.style.transform = "translate(100%)";
    item3.style.transform = "translate(100%)";
    
    setTimeout(() => {
      item3.style.transition = "all 0s";
      item3.style.transform = "translate(0)";
      item3.style.left = "0";
      setTimeout(() => {
        item3.style.transition = "transform 0.5s ease-in-out";
      }, 100)

      item1.style.left = "100%"
      item1.style.transform = "translate(0)";  

      item2.style.left = "-100%";
      item2.style.transform = "translate(0)"; 

      item4.style.left = "100%";
      item4.style.transform = "translate(0)"; 
    }, 500);

    curPos2 = 3;
    photoNumber.textContent = curPos2;
  }else if(curPos2 == 3){
    item3.style.transform = "translate(100%)";
    item2.style.transform = "translate(100%)";
    
    setTimeout(() => {
      item2.style.transition = "all 0s";
      item2.style.transform = "translate(0)";
      item2.style.left = "0";
      setTimeout(() => {
        item2.style.transition = "transform 0.5s ease-in-out";
      }, 100)

      item1.style.left = "-100%"
      item1.style.transform = "translate(0)";  

      item3.style.left = "100%";
      item3.style.transform = "translate(0)"; 

      item4.style.left = "100%";
      item4.style.transform = "translate(0)"; 
    }, 500);

    curPos2 = 2;
    photoNumber.textContent = curPos2;
  }else if(curPos2 == 2){
    item2.style.transform = "translate(100%)";
    item1.style.transform = "translate(100%)";
    
    setTimeout(() => {
      item1.style.transition = "all 0s";
      item1.style.transform = "translate(0)";
      item1.style.left = "0";
      setTimeout(() => {
        item1.style.transition = "transform 0.5s ease-in-out";
      }, 100)

      item2.style.left = "100%"
      item2.style.transform = "translate(0)";  

      item3.style.left = "100%";
      item3.style.transform = "translate(0)"; 

      item4.style.left = "-100%";
      item4.style.transform = "translate(0)"; 
    }, 500);

    curPos2 = 1;
    photoNumber.textContent = curPos2;
  }
}

function swipedetect(el, callback){
  
  var touchsurface = el,
  swipedir,
  startX,
  startY,
  distX,
  distY,
  threshold = 75, //required min distance traveled to be considered swipe
  restraint = 200, // maximum distance allowed at the same time in perpendicular direction
  allowedTime = 500, // maximum time allowed to travel that distance
  elapsedTime,
  startTime,
  handleswipe = callback || function(swipedir){}

  touchsurface.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0]
      swipedir = 'none'
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
  }, false)

  touchsurface.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0]
      distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime){ // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
              swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
          }
          else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
              swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
          }
      }
      handleswipe(swipedir);
  }, false)
}

let curPos2 = 1;

let sliderContainerSec6 = document.querySelector(".section-6-slider");

let section6 = document.querySelector(".section-6");

let btnNextSec6 = section6.querySelector(".next");
let btnPrevSec6 = section6.querySelector(".prev");

let item1sec6 = section6.querySelector(".item-1");
let item2sec6 = section6.querySelector(".item-2");
let item3sec6 = section6.querySelector(".item-3");
let item4sec6 = section6.querySelector(".item-4");

let photoNumberSec6 = section6.querySelector(".photoNumber");


if(window.innerWidth < 1024){
  let autoSlideSec6 = setInterval(() => {
    slideRight2(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
  }, 3000);
  
  
  btnNextSec6.onclick = () => {
    slideRight2(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
    clearInterval(autoSlideSec6);
  }
  
  btnPrevSec6.onclick = () => {
    slideLeft2(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
    clearInterval(autoSlideSec6);
  }
  
  swipedetect(sliderContainerSec6, function(swipedir){
    if (swipedir == 'left'){
      slideRight2(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
    }else if( swipedir == 'right'){
      slideLeft2(item1sec6, item2sec6, item3sec6, item4sec6, photoNumberSec6);
    }
    clearInterval(autoSlideSec6);
  });
    
  }

