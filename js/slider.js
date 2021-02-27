function slideRight(item1, item2, item3, item4, photoNumber){
  if(curPos == 1){
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

    curPos = 2;
    photoNumber.textContent = curPos;
  }else if(curPos == 2){
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

    curPos = 3;
    photoNumber.textContent = curPos;
  }else if(curPos == 3){
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

    curPos = 4;
    photoNumber.textContent = curPos;
  }else if(curPos == 4){
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
  
    curPos = 1;
    photoNumber.textContent = curPos;
  }
}

function slideLeft(item1, item2, item3, item4, photoNumber){
  
  if(curPos == 1){
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

    curPos = 4;
    photoNumber.textContent = curPos;
  }else if(curPos == 4){
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

    curPos = 3;
    photoNumber.textContent = curPos;
  }else if(curPos == 3){
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

    curPos = 2;
    photoNumber.textContent = curPos;
  }else if(curPos == 2){
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

    curPos = 1;
    photoNumber.textContent = curPos;
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

let sliderContainerSec3 = document.querySelector(".section-3-slider");

let section3 = document.querySelector(".section-3");

let btnNextSec3 = section3.querySelector(".next");
let btnPrevSec3 = section3.querySelector(".prev");

let item1sec3 = section3.querySelector(".item-1");
let item2sec3 = section3.querySelector(".item-2");
let item3sec3 = section3.querySelector(".item-3");
let item4sec3 = section3.querySelector(".item-4");

let photoNumberSec3 = section3.querySelector(".photoNumber");

let curPos = 1;

let autoSlideSec3 = setInterval(() => {
  slideRight(item1sec3, item2sec3, item3sec3, item4sec3, photoNumberSec3);
}, 3000);


btnNextSec3.onclick = () => {
  slideRight(item1sec3, item2sec3, item3sec3, item4sec3, photoNumberSec3);
  clearInterval(autoSlideSec3);
}

btnPrevSec3.onclick = () => {
  slideLeft(item1sec3, item2sec3, item3sec3, item4sec3, photoNumberSec3);
  clearInterval(autoSlideSec3);
}


swipedetect(sliderContainerSec3, function(swipedir){
    if (swipedir == 'left'){
      slideRight(item1sec3, item2sec3, item3sec3, item4sec3, photoNumberSec3);
    }else if( swipedir == 'right'){
      slideLeft(item1sec3, item2sec3, item3sec3, item4sec3, photoNumberSec3);
    }
    clearInterval(autoSlideSec3);
});

boxPrev = document.querySelector(".box-prev");
boxNext = document.querySelector(".box-next");
prevIcon = document.querySelector(".prev-icon");
nextIcon = document.querySelector(".next-icon");

boxPrev.onmouseover = () => {
  prevIcon.style.opacity = "0.5";
}

boxPrev.onmouseleave = () => {
  prevIcon.style.opacity = "0";
}

boxNext.onmouseover = () => {
  nextIcon.style.opacity = "0.5";
}

boxNext.onmouseleave = () => {
  nextIcon.style.opacity = "0";
}

boxPrev.onclick = () => {
  slideLeft(item1sec3, item2sec3, item3sec3, item4sec3, photoNumberSec3);
  clearInterval(autoSlideSec3);
}

boxNext.onclick = () => {
  slideRight(item1sec3, item2sec3, item3sec3, item4sec3, photoNumberSec3);
  clearInterval(autoSlideSec3);
}