signBox1 = document.querySelectorAll(".sign-box")[0];
signBox2 = document.querySelectorAll(".sign-box")[1];

sign1 = signBox1.querySelectorAll(".marquee")[0];
sign2 = signBox1.querySelectorAll(".marquee")[1];
sign3 = signBox2.querySelectorAll(".marquee")[0];
sign4 = signBox2.querySelectorAll(".marquee")[1];

sign1list = sign1.getElementsByTagName("li");
sign2list = sign2.getElementsByTagName("li");
sign3list = sign3.getElementsByTagName("li");
sign4list = sign4.getElementsByTagName("li");

sign1.onmouseover = () => {
  [].forEach.call(sign1list, li => {
    li.style.webkitTextFillColor = "black";  
    li.style.webkitTextStroke = "initial"; 
  }); 

  sign2.onmouseleave();
}

sign2.onmouseover = () => {
  [].forEach.call(sign2list, li => {
    li.style.webkitTextFillColor = "black";  
    li.style.webkitTextStroke = "initial"; 
  }); 

  sign1.onmouseleave();
}

sign3.onmouseover = () => {
  [].forEach.call(sign3list, li => {
    li.style.webkitTextFillColor = "black";  
    li.style.webkitTextStroke = "initial"; 
  }); 

  sign4.onmouseleave();
}

sign4.onmouseover = () => {
  [].forEach.call(sign4list, li => {
    li.style.webkitTextFillColor = "black";  
    li.style.webkitTextStroke = "initial"; 
  }); 

  sign3.onmouseleave();
}

sign1.onmouseleave = () => {
  [].forEach.call(sign1list, li => {
    li.style.webkitTextFillColor = "transparent";  
    li.style.webkitTextStroke = "1px black"; 
  });    
}

sign2.onmouseleave = () => {
  [].forEach.call(sign2list, li => {
    li.style.webkitTextFillColor = "transparent";  
    li.style.webkitTextStroke = "1px black"; 
  }); 
}

sign3.onmouseleave = () => {
  [].forEach.call(sign3list, li => {
    li.style.webkitTextFillColor = "transparent";  
    li.style.webkitTextStroke = "1px black"; 
  }); 
}

sign4.onmouseleave = () => {
  [].forEach.call(sign4list, li => {
    li.style.webkitTextFillColor = "transparent";  
    li.style.webkitTextStroke = "1px black"; 
  }); 
}

random1 = true;
random2 = true;

signBox1.onmouseover = () => {
  random1 = false;
}

signBox1.onmouseleave = () => {
  random1 = true;
  
}

signBox2.onmouseover = () => {
  random2 = false;
}

signBox2.onmouseleave = () => {
  random2 = true;
}

randNum1 = 0;
randNum2 = 0;


setInterval(() =>{
  randNum1 = Math.floor(Math.random() * 2);
  randNum2 = Math.floor(Math.random() * 2);
}, 1400);


setInterval(() => {
  if(random1){
      if(randNum1 === 0){
          sign1.onmouseover();
          sign2.onmouseleave();
      }else if(randNum1 === 1){
          sign2.onmouseover();
          sign1.onmouseleave();
      }
  }

  if(random2){
    if(randNum2 === 0){
        sign3.onmouseover();
        sign4.onmouseleave();
    }else if(randNum2 === 1){
        sign4.onmouseover();
        sign3.onmouseleave();
    }
}
}, 500);