let cover = document.querySelector(".cover");

let mouseArea = document.querySelector(".mouse-area");

let area1 = document.querySelector(".area-1");
let area2 = document.querySelector(".area-2");
let area3 = document.querySelector(".area-3");
let area4 = document.querySelector(".area-4");
let area5 = document.querySelector(".area-5");

let background = cover.querySelector(".background");
let secondPlan = cover.querySelector(".second-plan");

let bgList1 = background.querySelectorAll('.marquee')[0].getElementsByTagName('li');
let spList1 = secondPlan.querySelectorAll('.marquee')[0].getElementsByTagName('li');

let bgList2 = background.querySelectorAll('.marquee')[1].getElementsByTagName('li');
let spList2 = secondPlan.querySelectorAll('.marquee')[1].getElementsByTagName('li');

let bgList3 = background.querySelectorAll('.marquee')[2].getElementsByTagName('li');
let spList3 = secondPlan.querySelectorAll('.marquee')[2].getElementsByTagName('li');

let bgList4 = background.querySelectorAll('.marquee')[3].getElementsByTagName('li');
let spList4 = secondPlan.querySelectorAll('.marquee')[3].getElementsByTagName('li');

let bgList5 = background.querySelectorAll('.marquee')[4].getElementsByTagName('li');
let spList5 = secondPlan.querySelectorAll('.marquee')[4].getElementsByTagName('li');

let random = true;
let randomNumber = 0;

mouseArea.onmouseover = () => {
  random = false;
}

mouseArea.onmouseleave = () => {
  random = true;
}


area1.onmouseover = () => {
  [].forEach.call(bgList1, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'black';
  });

  [].forEach.call(spList1, li => {
    li.style.webkitTextStroke = "1px black";  
    li.style.webkitTextFillColor = 'black';
  });

  area2.onmouseleave();
  area3.onmouseleave();
  area4.onmouseleave();
  area5.onmouseleave();
}

area2.onmouseover = () => {
  [].forEach.call(bgList2, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'black';
  });

  [].forEach.call(spList2, li => {
    li.style.webkitTextStroke = "1px black";  
    li.style.webkitTextFillColor = 'black';
  });

  area1.onmouseleave();
  area3.onmouseleave();
  area4.onmouseleave();
  area5.onmouseleave();
}

area3.onmouseover = () => {
  [].forEach.call(bgList3, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'black';
  });

  [].forEach.call(spList3, li => {
    li.style.webkitTextStroke = "1px black";  
    li.style.webkitTextFillColor = 'black';
  });

  area1.onmouseleave();
  area2.onmouseleave();
  area4.onmouseleave();
  area5.onmouseleave();
}

area4.onmouseover = () => {
  [].forEach.call(bgList4, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'black';
  });

  [].forEach.call(spList4, li => {
    li.style.webkitTextStroke = "1px black";  
    li.style.webkitTextFillColor = 'black';
  });

  area1.onmouseleave();
  area2.onmouseleave();
  area3.onmouseleave();
  area5.onmouseleave();
}

area5.onmouseover = () => {
  [].forEach.call(bgList5, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'black';
  });

  [].forEach.call(spList5, li => {
    li.style.webkitTextStroke = "1px black";  
    li.style.webkitTextFillColor = 'black';
  });

  area1.onmouseleave();
  area2.onmouseleave();
  area3.onmouseleave();
  area4.onmouseleave();
}

area1.onmouseleave = () => {
  [].forEach.call(bgList1, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'transparent';
  });

  [].forEach.call(spList1, li => {
    li.style.webkitTextStroke = "transparent";  
    li.style.webkitTextFillColor = 'transparent';
  });
}

area2.onmouseleave = () => {
  [].forEach.call(bgList2, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'transparent';
  });

  [].forEach.call(spList2, li => {
    li.style.webkitTextStroke = "transparent";  
    li.style.webkitTextFillColor = 'transparent';
  });
}

area3.onmouseleave = () => {
  [].forEach.call(bgList3, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'transparent';
  });

  [].forEach.call(spList3, li => {
    li.style.webkitTextStroke = "transparent";  
    li.style.webkitTextFillColor = 'transparent';
  });
}

area4.onmouseleave = () => {
  [].forEach.call(bgList4, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'transparent';
  });

  [].forEach.call(spList4, li => {
    li.style.webkitTextStroke = "transparent";  
    li.style.webkitTextFillColor = 'transparent';
  });
}

area5.onmouseleave = () => {
  [].forEach.call(bgList5, li => {
      li.style.webkitTextStroke = "1px black";  
      li.style.webkitTextFillColor = 'transparent';
  });

  [].forEach.call(spList5, li => {
    li.style.webkitTextStroke = "transparent";  
    li.style.webkitTextFillColor = 'transparent';
  });
}

setInterval(() =>{
  if(window.innerWidth < 1024){
    randomNumber = Math.floor(Math.random() * 5);
  }else{
    randomNumber = Math.floor(Math.random() * 4);
  }
  
}, 1400);

setInterval(() => {
  if(random){
      if(randomNumber === 0){
          area1.onmouseover();
          area2.onmouseleave();
          area3.onmouseleave();
          area4.onmouseleave();
          area5.onmouseleave();
      }else if(randomNumber === 1){
          area2.onmouseover();
          area1.onmouseleave();
          area3.onmouseleave();
          area4.onmouseleave();
          area5.onmouseleave();
      }else if(randomNumber === 2){
          area3.onmouseover();
          area1.onmouseleave();
          area2.onmouseleave();
          area4.onmouseleave();
          area5.onmouseleave();
      }else if(randomNumber === 3){
          area4.onmouseover();
          area1.onmouseleave();
          area2.onmouseleave();
          area3.onmouseleave();
          area5.onmouseleave();
      }else if(randomNumber === 4){
          area5.onmouseover();
          area1.onmouseleave();
          area2.onmouseleave();
          area3.onmouseleave();
          area4.onmouseleave();
      }
  }
}, 2000);